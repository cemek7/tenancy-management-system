import React from 'react';
import { Link } from 'react-router-dom';

function TenantList({ tenants }) {
  return (
    <div>
      <h3>List of Tenants</h3>
      <ul>
        {tenants.map(tenant => (
          <li key={tenant.id}>
            <Link to={`/tenant/${tenant.id}`}>{tenant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TenantList;
