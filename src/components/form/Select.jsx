export default function Select({ options, onChange, selectedDistrict }) {
    return (
        <>
            {options?.length > 0 && <select onClick={onChange} value={selectedDistrict}>
                {options.map((item, index) => (<option key={index} value={`${item.value}`}>{item.option}</option>))}
            </select>}
        </>
    )
}