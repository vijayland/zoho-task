import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Select from "./form/Select";

export default function StateLists({ state, districts }) {
  const [count, setCount] = useState(null);
  const [options, setOptions] = useState([]);
  const [delta, setDelta] = useState("Total");
  const [data, setData] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    if (count !== null) {
      if (count == 0) {
        setData(districts[selectedDistrict].total)
      } else if (count == 1) {
        setData(districts[selectedDistrict].delta)
      } else if (count == 2) {
        setData(districts[selectedDistrict].delta7)
      }
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
    setSelectedDistrict(e.target.value);
    setData(districts[e.target.value].total)
  }

  useEffect(() => {
    if (districts !== undefined && typeof districts == 'object') {
      let final = Object.keys(districts).map(district => {
        return { option: district, value: district };
      })
      setOptions(final);
      setSelectedDistrict(Object.keys(districts)[0]);
      setData(districts[Object.keys(districts)[0]].total)
    }
  }, [districts, delta])

  return (
    <>
      <Card>
        <Link to={`/details/${state}`}>
          <h4>{state}</h4>
          <div>
            <Select options={options} onChange={handleDistrictChange} value={selectedDistrict} />
          </div>


          {count !== null && count > 1 && (
            <button onClick={rightArrowClick}>{"<"}</button>
          )}
          <h4>{delta}</h4>
          {typeof data == 'object' ? <ul>
            <li>confirmed: {data?.confirmed ? data?.confirmed : 0}</li>
            <li>recovered: {data?.recovered ? data?.recovered : 0}</li>
            <li>deceased: {data?.deceased ? data?.deceased : 0}</li>
          </ul> : "Loading.."}

          {districts && Object.keys(districts).length !== count && (
            <button onClick={leftArrowClick}>{">"}</button>
          )}
        </Link>
      </Card>
    </>
  );
}
