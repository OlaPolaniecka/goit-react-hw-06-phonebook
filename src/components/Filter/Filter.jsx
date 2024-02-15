import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
