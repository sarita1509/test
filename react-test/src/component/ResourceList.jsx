import React from "react";

const ResourceList = ({resource}) => {
    return(
        <div>
            <h2>Resource</h2>
            <ul>
                {resource.map((resource,index) => (
                    <li key={index}>
                        <p><strong>Date of registertion:</strong> {resource.dateOfRegistertaion}</p>
                        
                        <p><strong>vender Score:</strong> {resource.venderScore}</p>
                        <p><strong>status:</strong> {resource.status}</p>
                        <p><strong>Type of Buiness:</strong> {resource.typeOfBuiness}</p>
                        <p><strong>Location:</strong> {resource.location}</p>
                        <p><strong>assign to:</strong> {resource.assignTo}</p>
                        
                    
                    </li>
                ))}
            </ul>

        </div>
    );
};
export default ResourceList;
