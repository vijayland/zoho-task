import FilterOption from "../data/form/filter-option.json"
import FormInput from "./form";

export default function DetailViewFilter({ handleDatePicer, handleOptionChange }) {
  let inputs = [
    {
      type: "date",
      onChange: handleDatePicer
    },
    {
      type: "select",
      onChange: handleOptionChange,
      options: FilterOption
    },
    {
      type: "select",
    }
  ];

  return (
    <>
      <FormInput inputs={inputs} />
    </>
  );
}
