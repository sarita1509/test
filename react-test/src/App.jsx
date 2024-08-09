import React, { useState } from 'react';
import FilterButton from './FilterButton';
import ResourceList from './ResourceList';

const initialResources = [
  {
    dateOfRegister: '',
    vendorScore: '',
    status: 'Active',
    businessType: 'Retail',
    location: 'New York',
    assignTo: 'sarita'
  },
  
]

const App = () => {
  const [resources, setResources] = useState(initialResources);
  const [filteredResources, setFilteredResources] = useState(initialResources);

  const handleFilter = (criteria) => {
    const filtered = resources.filter((resource) => {
      return (
        (!criteria.dateOfRegister || resource.dateOfRegister === criteria.dateOfRegister) &&
        (!criteria.vendorScore || resource.vendorScore >= criteria.vendorScore) &&
        (!criteria.status || resource.status.toLowerCase() === criteria.status.toLowerCase()) &&
        (!criteria.businessType || resource.businessType.toLowerCase() === criteria.businessType.toLowerCase()) &&
        (!criteria.location || resource.location.toLowerCase() === criteria.location.toLowerCase()) &&
        (!criteria.assignTo || resource.assignTo.toLowerCase() === criteria.assignTo.toLowerCase())
      );
    });
    setFilteredResources(filtered);
  };

  const handleClear = () => {
    setFilteredResources(resources);
  };

  return (
    <div>
      <h1>Filter Resources</h1>
      <FilterButton onFilter={handleFilter} onClear={handleClear} />
      <ResourceList resources={filteredResources} />
    </div>
  );
};

export default App;