import { useParams } from "react-router-dom";
import Layout from "../layouts";
import Table from "../components/Table";
import { connect } from "react-redux";
import DetailViewFilter from "../components/DetailViewFilter";
import { useState } from "react";
import { ascending, dscending } from "../utils/sorting";
import { useEffect } from "react";

const Details = ({ covidData }) => {
    let { state } = useParams();
    let [data, setData] = useState(covidData?.timeSeries[state]?.dates);
    let [districts, setDistricts] = useState([{
        option: "District",
        value: ""
    }]);

    useEffect(() => {
        setDistricts([...districts, ...Object.keys(covidData.covid[state].districts).map((item) => {
            return { option: item, value: item };
        })])
    }, [])

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
        if (e.target.value === "") {
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

    //Districts Filter
    const handleDistrictFilter = (e) => {
        if (e.target.value == "") {
            setData(covidData.covid);
        } else {
            function Obj() {
                this[covidData.covid[state].districts[e.target.value].meta.tested.date] = covidData.covid[state].districts[e.target.value]
            }
            let distObj = new Obj();
            setData(distObj)
        }
    }

    const row = (data) => {
        return (
            Object.keys(data).length > 0 ? Object.keys(data)?.map((item, index) => (
                <tr key={index}>
                    <td>{item}</td>
                    <td>{data[item]?.total?.confirmed ? data[item]?.total?.confirmed : 0}</td>
                    <td>{data[item]?.total?.recovered ? data[item]?.total?.recovered : 0}</td>
                    <td>{data[item]?.total?.deceased ? data[item]?.total?.deceased : 0}</td>
                    <td>
                        <ul>
                            <li>Confirmed: {data[item]?.delta?.confirmed}</li>
                            <li>Recovered: {data[item]?.total?.recovered ? data[item]?.total?.recovered : 0}</li>
                            <li>Deceased: {data[item]?.total?.deceased ? data[item]?.total?.deceased : 0}</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Confirmed: {data[item]?.delta7?.confirmed}</li>
                            <li>Recovered: {data[item]?.total7?.recovered ? data[item]?.total?.recovered : 0}</li>
                            <li>Deceased: {data[item]?.total7?.deceased ? data[item]?.total?.deceased : 0}</li>
                        </ul>
                    </td>
                </tr>
            )) : "Data Not Found")
    }
    console.log(covidData, "**************")
    return (
        <>
            <Layout />
            <div className="container">
                <DetailViewFilter
                    handleOptionChange={handleOptionChange}
                    handleDatePicer={handleDatePicer}
                    districts={districts}
                    handleDistrictFilter={handleDistrictFilter}
                />
                {data !== null && typeof data === 'object'
                    ?
                    <Table columns={columns} data={row(data)} />
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

