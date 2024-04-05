import React from 'react';

function PropertyDetails({ property }) {
  return (
    <div>
      <h3>{property.name}</h3>
      <p>Address: {property.address}</p>
      {/* Additional property details */}
    </div>
  );
}

export default PropertyDetails;
