import { AuthContext } from '@/contexts/AuthProvider';
import { useContext } from 'react';

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth needed to be inside the provider');
	}
	return context;
};

export default useAuth;
