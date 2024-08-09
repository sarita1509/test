import React, {useState} from 'react';

 const FilterButton = ({onFilter, onclear}) => {
    const [ filterCriteria, setFilterCriteria] = useState({
        dateOfRegistertion: "",
        venderScore: "",
        status: "",
        typeOfBusiness: "",
        location: "",
        assingTo: "",

    });

 
 const handleInputeChange = (e) =>
    const { name , value}= e.target;
    setFilterCriteria({
        filterCriteria,
        [name]: value
    });
 };

 const handleClearClick = () => {
    setFilterCriteria({
        dateOfRegistertion: '',
        venderScore: '',
        status:'',
        typeOfBusiness: '',
        location: '',
        assingTo: '',
   })
  onClear();
 }
return(
    <div>
        <input
        type="date"
        name="dateOfRegistertion"
        value={filtercriteria.dateOfRegistertion}
        onChange={handleInputchange}
        placeholder='date of registertion'
        />
        <input 
        type="number"
        name="venderScore"
        value={filtercriteria.venderScore}
        onChange={handleInputchange}
        placeholder='vender score'
        />
         <input 
        type="text"
        name="status"
        value={filtercriteria.status}
        onChange={handleInputchange}
        placeholder='status'
        />
         <input 
        type="text"
        name="typeOfBusiness"
        value={filtercriteria.typeOfBusiness}
        onChange={handleInputchange}
        placeholder='type of business'
        />
         <input 
        type="text"
        name="location"
        value={filtercriteria.location}
        onChange={handleInputchange}
        placeholder='location'
        />
        <input 
        type="text"
        name="assingto"
        value={filtercriteria.assingTo}
        onChange={handleInputchange}
        placeholder='assign to '
        />       
<button onClick={handlefilterclick}>filter</button>
<button onClick={handleClearClick}>clear</button>

    </div>
)

export default filterButton;