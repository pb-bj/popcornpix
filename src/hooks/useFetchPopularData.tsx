import { useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

export const useFetchPopularData = () => {
	const context = useContext(DataContext);

	if (!context) {
		throw new Error('useFetchPopularData must be with the context');
	}

	return context;
};
