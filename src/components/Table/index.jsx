import "../../styles/table.css";

export default function Table({ columns, data }) {
    return (
        <table>
            <tr>
                {columns?.map((element, index) => (<th key={index}>{element.name}</th>))}
            </tr>
            {data}
        </table>
    )
}
