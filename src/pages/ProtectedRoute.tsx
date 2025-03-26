import useAuth from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
	const { user, loading } = useAuth();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!user) {
		return <Navigate to={'/login'} replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
