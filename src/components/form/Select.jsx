export default function Select({ options, onChange, defaultValue }) {
    return (
        <>
            {options?.length > 0 && <select onClick={onChange} value={defaultValue}>
                {options.map((item, index) => (<option key={index} value={`${item.value}`}>{item.option}</option>))}
            </select>}
        </>
    )
}