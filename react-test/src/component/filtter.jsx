import React, { useState } from 'react';

const FilterButton = ({ onFilter, onClear }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    dateOfRegister: '',
    vendorScore: '',
    status: '',
    businessType: '',
    location: '',
    assignTo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value
    });
  };

  const handleFilterClick = () => {
    onFilter(filterCriteria);
  };

  const handleClearClick = () => {
    setFilterCriteria({
      dateOfRegister: '',
      vendorScore: '',
      status: '',
      businessType: '',
      location: '',
      assignTo: ''
    });
    onClear();
  };

  return (
    <div>
      <input
        type="date"
        name="dateOfRegister"
        value={filterCriteria.dateOfRegister}
        onChange={handleInputChange}
        placeholder="Date of Register"
      />
      <input
        type="number"
        name="vendorScore"
        value={filterCriteria.vendorScore}
        onChange={handleInputChange}
        placeholder="Vendor Score"
      />
      <input
        type="text"
        name="status"
        value={filterCriteria.status}
        onChange={handleInputChange}
        placeholder="Status"
      />
      <input
        type="text"
        name="businessType"
        value={filterCriteria.businessType}
        onChange={handleInputChange}
        placeholder="Type of Business"
      />
      <input
        type="text"
        name="location"
        value={filterCriteria.location}
        onChange={handleInputChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="assignTo"
        value={filterCriteria.assignTo}
        onChange={handleInputChange}
        placeholder="Assign To"
      />
      <button onClick={handleFilterClick}>Filter</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};

export default FilterButton;