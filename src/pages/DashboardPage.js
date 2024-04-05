import React from 'react';
import PropertyList from '../components/PropertyList';

function DashboardPage() {
  // Fetch user's properties from backend or mock data
  const properties = [
    { id: 1, name: 'Property 1' },
    { id: 2, name: 'Property 2' },
    { id: 3, name: 'Property 3' },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <PropertyList properties={properties} />
    </div>
  );
}

export default DashboardPage;
