import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PropertyPage from './pages/PropertyPage';
import TenantPage from './pages/TenantPage';
import TenantDetailsPage from './pages/TenantDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/tenants" exact component={TenantPage} />
        <Route path="/tenant/:id" component={TenantDetailsPage} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
