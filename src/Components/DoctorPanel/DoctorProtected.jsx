// src/Components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const DoctorProtect = ({ children }) => {
    const isAuthenticated = localStorage.getItem('DoctorToken');

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/doctor/doctorlogin" />;
    }
};

export default DoctorProtect;
