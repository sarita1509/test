import { useState } from 'react'

import './App.css'
import ResourceList from './component/ResourceList';

const App = ()=> {
  const [resource, setResource] = useState(initialResource);
  const [filteredResources, setFilterResource] =useState(initialResource);

  const handleFilter = (criteria) =>{
    const filtered = resource.filter((resource)=>{
      return(
        (!criteria.dateOfRegistration || Resource.dateOfRegistration === criteria.dateOfRegistration
         ) &&
         (!criteria.venderScore || Resource.venderScore >= criteria.venderScore
         ) &&
         (!criteria.status || Resource.status.toLowerCase() === criteria.status.toLowerCase()
         ) &&
         (!criteria.typeOfBusiness || Resource.typeOfBusiness.toLowerCase() === criteria.typeOfBusiness.toLowerCase()
         ) &&
         (!criteria.location || Resource.location.toLowerCase() === criteria.location.toLowerCase()
         ) &&
         (!criteria.assignTo || Resource.assignTo.toLowerCase() === assignTo.toLowerCase()
         ) &&
      );

    });
    setFilterResource(filtered);
  };
  const handleclear (resources);
};
return(
  <div>
    <h1>filter</h1>
    <filterButton onFiler={handlefiler} onclear={handleclear} />
    <ResourceList resources= {filteredResources}/>
  </div>
)


export default App;
