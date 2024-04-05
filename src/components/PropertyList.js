import React from 'react';
import { Link } from 'react-router-dom';

function PropertyList({ properties }) {
  return (
    <div>
      <h3>My Properties</h3>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <Link to={`/property/${property.id}`}>{property.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
