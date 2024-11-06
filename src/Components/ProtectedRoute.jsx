// src/Components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');

    if (isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
