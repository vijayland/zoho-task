import { useParams } from "react-router-dom";
import Layout from "../layouts";
import Table from "../components/Table";
import { connect } from "react-redux";
import DetailViewFilter from "../components/DetailViewFilter";
import { useState } from "react";
import { ascending, dscending } from "../utils/sorting";

const Details = ({ covidData }) => {
    let { state } = useParams();
    let [data, setData] = useState(covidData?.timeSeries[state]?.dates);

    //Table headers
    const columns = [
        { name: "Date", field: "date" },
        { name: "Confirmed", field: "confirmed" },
        { name: "Recoverd", field: "recoverd" },
        { name: "Deceased", field: "deceased" },
        { name: "Delta", field: "delta" },
        { name: "Delta7", field: "delta7" }
    ];

    const handleOptionChange = (e) => {
        let { value } = e.target;
        if (value === "confirmedDsc") {
            setData(dscending(data, 'confirmed'));
        } else if (value === "confirmedAsc") {
            setData(ascending(data, 'confirmed'));
        } else if (value === "recDsc") {
            setData(dscending(data, 'recovered'));
        } else if (value === "recAsc") {
            setData(ascending(data, 'recovered'));
        } else if (value === "decAsc") {
            setData(ascending(data, 'deceased'));
        } else if (value === "decDsc") {
            setData(dscending(data, 'deceased'));
        } else {
            setData(covidData?.timeSeries[state]?.dates)
        }
    }

    //Date Filter
    const handleDatePicer = (e) => {
        if (e.target.value == "") {
            setData(covidData?.timeSeries[state]?.dates)
        } else {
            let filter = Object.keys(covidData?.timeSeries[state]?.dates).filter(item => item === e.target.value)
                .reduce((obj, key) => {
                    obj[key] = covidData?.timeSeries[state]?.dates[key];
                    return obj;
                }, {});
            setData(filter)
        }
    };
    return (
        <>
            <Layout />
            <div className="container">
                <DetailViewFilter handleOptionChange={handleOptionChange} handleDatePicer={handleDatePicer} />
                {data !== null && typeof data === 'object'
                    ?
                    <Table columns={columns} data={data} />
                    : <h1>Loading...</h1>}
            </div>
        </>
    )
}

const mapStateToProps = ({ covidData }) => {
    return ({
        covidData: covidData
    })
};


export default connect(mapStateToProps)(Details);

