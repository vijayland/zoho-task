import { connect } from "react-redux";
import { useEffect, useState } from "react";
import StateLists from "../components/StateLists";
import "../styles.css";
import Layouts from "../layouts";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";

const Home = ({ covidData }) => {
  const [data, setData] = useState(covidData);
  const [delta , setDelta]= useState("Total");
  const location = useLocation();


  useEffect(()=>{
    setData(covidData);
  },[location]);

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
        setData(covidData)
      }
    } else {
      setData(covidData)
    }
  };

  const handleDatePicer = (date) => { };
console.log(data,"data **********")

  return (
    <>
      <Layouts />
      <div className="App">
        <Filter handleSeach={handleSeach} handleDatePicer={handleDatePicer} />
        <div className="flex">
          {Object.keys(data).map((elem, index) => {
            return (
              <StateLists
                key={index}
                state={elem}
                data={data[elem].total}
                delta={delta}
                districts={data[elem]?.districts}
              />
            );
          })}
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

