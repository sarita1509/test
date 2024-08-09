import React from 'react';

const ResourceList = ({ resources }) => {
  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <p><strong>Date of Register:</strong> {resource.dateOfRegister}</p>
            <p><strong>Vendor Score:</strong> {resource.vendorScore}</p>
            <p><strong>Status:</strong> {resource.status}</p>
            <p><strong>Type of Business:</strong> {resource.businessType}</p>
            <p><strong>Location:</strong> {resource.location}</p>
            <p><strong>Assign To:</strong> {resource.assignTo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;