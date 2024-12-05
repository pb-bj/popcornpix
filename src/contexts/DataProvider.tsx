import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode } from 'react';
import { getPopularData } from '../services/api';
import { MovieResponse, SeriesResponse } from '../types/Response';

type DataContextProps = {
	children: ReactNode;
};

type DataContextType = {
	moviesData: MovieResponse | undefined;
	seriesData: SeriesResponse | undefined;
	isLoading: boolean;
	error: any;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({ children }: DataContextProps) => {
	const {
		data: moviesData,
		isLoading: isMovieLoading,
		error: movieError,
	} = useQuery<MovieResponse>({
		queryKey: ['popular-data', 'movies', 1],
		queryFn: () => getPopularData('movie', 1) as Promise<MovieResponse>,
	});

	const {
		data: seriesData,
		isLoading: isSeriesLoading,
		error: seriesError,
	} = useQuery<SeriesResponse>({
		queryKey: ['popular-series', 'series', 1],
		queryFn: () => getPopularData('tv', 1) as Promise<SeriesResponse>,
	});

	// Consolidate loading and error states
	const isLoading = isMovieLoading || isSeriesLoading;
	const error = movieError || seriesError;

	return <DataContext.Provider value={{ moviesData, seriesData, isLoading, error }}>{children}</DataContext.Provider>;
};

export default DataProvider;
