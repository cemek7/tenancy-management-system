import React from 'react';
import { useParams } from 'react-router-dom';
import TenantDetails from '../components/TenantDetails';

function TenantDetailsPage() {
  const { id } = useParams();

  // Fetch tenant details from backend based on id
  const tenant = { id: id, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' };

  return (
    <div>
      <h2>Tenant Details</h2>
      <TenantDetails tenant={tenant} />
    </div>
  );
}

export default TenantDetailsPage;
