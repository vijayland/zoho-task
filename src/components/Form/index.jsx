import Input from "./Input"
import Select from "./Select"

export default function FormInput({ inputs }) {
    return (
        <>
            {inputs.map((input, index) => {
                return input.type === "text" || input.type === "date" || input.type == "number" ? (
                    <Input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={input.onChange}
                    />
                ) : (
                    <Select options={input.options} onChange={input.onChange} />
                )
            })}
        </>
    )
}