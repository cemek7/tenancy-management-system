import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';

function PropertyPage() {
  const { id } = useParams();

  // Fetch property details from backend based on id
  const property = { id: id, name: `Property ${id}`, address: '123 Main St' };

  return (
    <div>
      <h2>Property Details</h2>
      <PropertyDetails property={property} />
    </div>
  );
}

export default PropertyPage;
