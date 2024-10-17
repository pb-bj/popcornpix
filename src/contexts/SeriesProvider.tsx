// import { useQuery } from '@tanstack/react-query';
// import { createContext, ReactNode } from 'react';
// import { getPopularSeries } from '../services/api';
// import { PopularSeriesResponse } from '../types';

// type SeriesProps = {
// 	children: ReactNode;
// };

// type SeriesContextType = {
// 	data: PopularSeriesResponse | undefined;
// 	isLoading: boolean;
// 	error: any;
// };

// export const SeriesContext = createContext<SeriesContextType | undefined>(undefined);

// const SeriesProvider = ({ children }: SeriesProps) => {
// 	const { data, isLoading, error } = useQuery({
// 		queryKey: ['popularSeries'],
// 		queryFn: getPopularSeries,
// 	});

// 	return <SeriesContext.Provider value={{ data, isLoading, error }}>{children}</SeriesContext.Provider>;
// };

// export default SeriesProvider;
