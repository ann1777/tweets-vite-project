import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { selectFilter } from "../../redux/users/user-selectors";

import Select from "react-select";
import { FilterBox, StyledIcon } from "./CardsFilter.styled";
import { filterItems } from "../../redux/users/user-reducer";

const CardsFilter = ({ handleChange }) => {
  const [filterValue, setFilterValue] = useState("");

  const options = [
    { value: "Show All", label: "Show All" },
    { value: "Follow", label: "Follow" },
    { value: "Following", label: "Following" },
  ];

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSelectFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    handleChange(value);
    dispatch(filterItems(e.value));
  };
  return (
    <FilterBox>
      <label htmlFor="filter">
        <StyledIcon />
      </label>
      <Select
        value={filterValue}
        options={options}
        defaultValue={{ value: filter, label: filter }}
        onChange={onSelectFilter}
      />
    </FilterBox>
  );
};

export default CardsFilter;

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
