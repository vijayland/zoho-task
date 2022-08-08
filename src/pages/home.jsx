import { connect } from "react-redux";
import { useEffect, useState } from "react";
import StateLists from "../components/StateLists";
import "../styles.css";
import Layouts from "../layouts";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";

const Home = ({ covidData }) => {
  const [data, setData] = useState(covidData?.covid);
  const location = useLocation();

  useEffect(() => {
    setData(covidData?.covid);
  }, [covidData]);

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

  const handleDatePicer = (date) => { };

  const handleOptionChange = (e) => {
    if (e.target.value === 'confirmedDsc') {
      let sorted = Object.keys(covidData?.covid).sort((a, b) => {
        return covidData.covid[a].total.confirmed - covidData.covid[b].total.confirmed;
      }).reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});
     
      setData(sorted);
    } else if(e.target.value === 'confirmedAsc'){
      let sorted = Object.keys(covidData?.covid).sort((a, b) => {
        return  covidData.covid[b].total.confirmed - covidData.covid[a].total.confirmed;
      }).reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});
     
      setData(sorted);
    }
  }
  return (
    <>
      <Layouts />
      <div className="App">
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
    </>
  )
}

const mapStateToProps = ({ covidData }) => {
  return ({
    covidData: covidData
  })
};

export default connect(mapStateToProps)(Home);

