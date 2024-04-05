import React from 'react';
import TenantList from '../components/TenantList';

function TenantPage() {
  // Fetch tenants from backend or mock data
  const tenants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '111-222-3333' },
  ];

  return (
    <div>
      <h2>Tenants</h2>
      <TenantList tenants={tenants} />
    </div>
  );
}

export default TenantPage;
