import React from 'react';

function TenantDetails({ tenant }) {
  return (
    <div>
      <h3>{tenant.name}</h3>
      <p>Email: {tenant.email}</p>
      <p>Phone: {tenant.phone}</p>
      {/* Additional tenant details */}
    </div>
  );
}

export default TenantDetails;
