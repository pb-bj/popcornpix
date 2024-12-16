import { useContext } from 'react';
import { SearchDataContext } from '../contexts/SearchDataProvider';

const useSearchDetail = () => {
	const context = useContext(SearchDataContext);

	if (!context) {
		throw new Error('useContext must be inside the provider');
	}
	return context;
};

export default useSearchDetail;
