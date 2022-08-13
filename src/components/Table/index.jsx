import "../../styles/table.css";

export default function Table({ columns, data }) {

    return (<>
        <table>
            <tr>
                {columns?.map((element, index) => (<th key={index}>{element.name}</th>))}
            </tr>

            {Object.keys(data).length > 0 ? Object.keys(data)?.map((item, index) => (
                <>
                    <tr>
                        <td key={index}>{item}</td>
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
                </>
            )): "Data Not Found"}

        </table>
    </>)
}
