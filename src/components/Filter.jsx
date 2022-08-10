import FilterOption from "../data/form/filter-option.json"
import FormInput from "./form";

export default function Filter({ handleSeach, handleDatePicer, handleOptionChange }) {
  let inputs = [
    {
      type: "text",
      placeholder: "seach..",
      onChange: handleSeach
    },
    {
      type: "date",
      onChange: handleDatePicer
    },
    {
      type: "select",
      onChange: handleOptionChange,
      options: FilterOption
    }
  ];

  return (
    <div className="filter">
      <FormInput inputs={inputs}/>
    </div>
  );
}
