import Input from "./form/Input";
import FilterOption from "../data/form/filter-option.json"
import Select from "./form/Select";

export default function Filter({ handleSeach, handleDatePicer }) {
  let inputs = [
    {
      type: "text",
      placeholder: "seach..",
      onChange: handleSeach
    },
    {
      type: "date",
      onChange: handleDatePicer
    }
  ];
  const handleOptionChange = (e) => {

  }
  return (
    <>
      {inputs.map((input, index) => (
        <Input
          key={index}
          type={input.type}
          placeholder={input.placeholder}
          onChange={input.onChange}
        />
      ))}

      <Select options={FilterOption} onChange={handleOptionChange} />
    </>
  );
}
