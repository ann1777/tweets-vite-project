import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/users/user-selectors";

import Select from "react-select";
import { FilterBox, StyledIcon } from "./CardsFilter.styled";
import { filterItems } from "../../redux/users/user-reducer";

const options = [
  { value: "Show All", label: "Show All" },
  { value: "Follow", label: "Follow" },
  { value: "Following", label: "Following" },
];

function CardsFilter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSelectFilter = (e) => dispatch(filterItems(e.value));
  return (
    <FilterBox>
      <label htmlFor="filter">
        <StyledIcon />
      </label>
      <Select
        options={options}
        defaultValue={{ value: filter, label: filter }}
        onChange={onSelectFilter}
      />
    </FilterBox>
  );
}

export default CardsFilter;
