import { connect } from "react-redux";
import { useEffect, useState } from "react";
import StateLists from "../components/StateLists";
import "../styles.css";
import Layouts from "../layouts";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";
import { ascending, dscending } from "../utils/sorting";

const Home = ({ covidData }) => {
  const [data, setData] = useState(covidData?.covid);
  const location = useLocation();

  useEffect(() => {
    setData(covidData?.covid);
  }, [covidData]);

  //Search Enter text
  const handleSeach = (e) => {
    let name = e.target.value.split("");
    if (name.length === 2) {
      let filter = Object.keys(data)
        .filter((item) => item === e.target.value.toUpperCase())
        .reduce((obj, key) => {
          obj[key] = data[key];
          return obj;
        }, {});
      if (Object.keys(filter).length !== 0) {
        setData(filter);
      } else {
        setData(covidData?.covid)
      }
    } else {
      setData(covidData?.covid)
    }
  };

  //Date Filter
  const handleDatePicer = (e) => {
    let filter = Object.keys(covidData.covid).filter(item => covidData.covid[item].meta.date === e.target.value)
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});
    setData(filter);
  };

  //Sorting
  const handleOptionChange = (e) => {
    if (e.target.value === 'confirmedDsc') {
      setData(dscending(data, 'confirmed'));
    } else if (e.target.value === 'confirmedAsc') {
      setData(ascending(data, 'confirmed'));
    } else if (e.target.value === 'affDsc') {
      setData(dscending(data, 'affected'));
    } else if (e.target.value === 'affAsc') {
      setData(ascending(data, 'affected'));
    } else if (e.target.value === 'vacDsc') {
      setData(dscending(data, 'vaccinated1'));
    } else if (e.target.value === 'vacAsc') {
      setData(ascending(data, 'vaccinated1'));
    } else {
      setData(covidData?.covid)
    }
  }
  return (
    <>
      <Layouts />
      <div className="App">
        <div className="container">
        <Filter handleSeach={handleSeach} handleDatePicer={handleDatePicer} handleOptionChange={handleOptionChange} />
        <div className="flex">

          {typeof data === 'object' && data !== undefined ? Object.keys(data).map((elem, index) => {
            return (
              <StateLists
                key={index}
                state={elem}
                data={data[elem]?.total ? data[elem]?.total : {}}
                districts={data[elem]?.districts}
              />
            );
          }) : "Loading..."}
        </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ covidData }) => {
  return ({
    covidData: covidData
  })
};

export default connect(mapStateToProps)(Home);

