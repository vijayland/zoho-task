import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Select from "./form/Select";

export default function StateLists({ state, districts, data, delta }) {
  const [list, setList] = useState({});
  let [count, setCount] = useState(null);
  const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   if (count !== null) {
  //     Object.keys(districts).forEach((item, index) => {
  //       if (index === count - 1) {
  //         setList(districts[item].delta);
  //       }
  //     });
  //   }
  // }, [count]);

  const leftArrowClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const rightArrowClick = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const handleDistrictChange = (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    if(districts !== undefined && typeof districts == 'object'){
      let final = Object.keys(districts).map(district => {
        return { option: district, value: district };
      })
      setOptions(final);
    }
  },[districts])
  console.log(options,"districs")
  return (
    <>
      <Card>
        <Link to={`/details/${state}`}>
          <h4>{state}</h4>
          <div>
            <Select options={options} onChange={handleDistrictChange} />
          </div>

          <h4>{delta}</h4>
          {/* {count !== null && count > 1 && (
            <button onClick={rightArrowClick}>{"<"}</button>
          )} */}
          {/* {Object.keys(districts).map((item, index)=>(
            <h4>{item}</h4>
          ))} */}
          <ul>
            <li>confirmed: {data?.confirmed ? data?.confirmed : 0}</li>
            <li>recovered: {data?.recovered ? data?.recovered : 0}</li>
            <li>deceased: {data?.deceased ? data?.deceased : 0}</li>
          </ul>
{/* 
          {districtsSelect && Object.keys(districtsSelect).length !== count && (
            <button onClick={leftArrowClick}>{">"}</button>
          )} */}
        </Link>
      </Card>
    </>
  );
}
