import DetailSortOption from "../data/form/detail-sort-option.json"
import FormInput from "./Form";

export default function DetailViewFilter({ handleOptionChange, handleDatePicer, districts, handleDistrictFilter }) {
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
      onChange: handleDistrictFilter,
      options: districts,
    }
  ];

  return (
    <div className="filter">
      <FormInput inputs={inputs} />
    </div>
  );
}
