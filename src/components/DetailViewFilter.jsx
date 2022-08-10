import DetailSortOption from "../data/form/detail-sort-option.json"
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
      options: DetailSortOption
    },
    {
      type: "select",
      options: []
    }
  ];

  return (
    <div className="filter">
      <FormInput inputs={inputs} />
    </div>
  );
}
