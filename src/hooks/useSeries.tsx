import { useContext } from 'react';
import { SeriesContext } from '../contexts/SeriesProvider';

const useSeries = () => {
	const context = useContext(SeriesContext);

	if (!context) {
		throw new Error('useSeries must be within the provider');
	}

	return context;
};

export default useSeries;
