// src/Components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const PatientProtect = ({ children }) => {
    const isAuthenticated = localStorage.getItem('PatientToken');

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/patientlogin" />;
    }
};

export default PatientProtect;
