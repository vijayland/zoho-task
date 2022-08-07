export default function Select({ options, onChange }) {
    return (
        <>
            {options?.length > 0 && <select onClick={onChange}>
                {options.map((item, index) => (<option key={index} value={`${item.value}`}>{item.option}</option>))}
            </select>}
        </>
    )
}