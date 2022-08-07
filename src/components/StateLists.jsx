import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Select from "./form/Select";

export default function StateLists({ state, districtsSelect, districts, data, delta }) {
  console.log(districts, "*************8")
  const [list, setList] = useState({

  });
  let [count, setCount] = useState(null);

  useEffect(() => {
    if (count !== null) {
      Object.keys(districts).forEach((item, index) => {
        if (index === count - 1) {
          setList(districts[item].delta);
        }
      });
    }
  }, [count]);

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

  return (
    <>
      <Card>
        <Link to={`/details/${state}`}>
          <h4>{state}</h4>
          <div>
            <Select options={districtsSelect} onChange={handleDistrictChange} />
          </div>

          <h4>{delta}</h4>
          {count !== null && count > 1 && (
            <button onClick={rightArrowClick}>{"<"}</button>
          )}
          {/* {Object.keys(districts).map((item, index)=>(
            <h4>{item}</h4>
          ))} */}
          <ul>
            <li>confirmed: {data?.confirmed ? data?.confirmed : 0}</li>
            <li>recovered: {data?.recovered ? data?.recovered : 0}</li>
            <li>deceased: {data?.deceased ? data?.deceased : 0}</li>
          </ul>

          {districtsSelect && Object.keys(districtsSelect).length !== count && (
            <button onClick={leftArrowClick}>{">"}</button>
          )}
        </Link>
      </Card>
    </>
  );
}
