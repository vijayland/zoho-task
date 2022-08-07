import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layouts";
import Table from "../components/Table";
import DetailViewFilter from "../components/DetailViewFilter";
import Card from "../components/Card";
import { connect } from "react-redux";

const Details=({covidData})=> {
    let { state } = useParams();

    //Table headers
    const columns = [
        { name: "Date", field: "date" },
        { name: "Confirmed", field: "confirmed" },
        { name: "Recoverd", field: "recoverd" },
        { name: "Deceased", field: "deceased" },
        { name: "Delta", field: "delta" },
        { name: "Delta7", field: "delta7" }
    ];

    return (
        <>
            <Layout />
            {covidData?.timeSeries !== null && typeof covidData?.timeSeries === 'object' ? <Table columns={columns} data={covidData?.timeSeries[state]?.dates} />: <h1>Loading...</h1>}
        </>
    )
}

const mapStateToProps = ({ covidData }) => {
    return ({
      covidData: covidData
    })
  };
  
  
  export default connect(mapStateToProps)(Details);
  
  