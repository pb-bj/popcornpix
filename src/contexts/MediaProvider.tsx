import { createContext, ReactNode } from 'react';
import { usePopularMovies, usePopularSeries, useTrendingMovie, useTrendingSeries } from '../hooks/useFetchMedia';
import { DataResponse, TrendingResponse } from '../services/api';

type MediaContextProps = {
	children: ReactNode;
};

type MediaContextType = {
	popularMovies: DataResponse | undefined;
	popularSeries: DataResponse | undefined;
	trendingMovies: TrendingResponse | undefined;
	trendingSeries: TrendingResponse | undefined;
	isLoading: boolean;
	error: any;
};

export const MediaContext = createContext<MediaContextType | undefined>(undefined);

const MediaProvider = ({ children }: MediaContextProps) => {
	const { data: popularMovies, isLoading: isPopularMovieLoading, error: popularMovieError } = usePopularMovies(1);
	const { data: popularSeries, isLoading: isPopularSeriesLoading, error: popularSeriesError } = usePopularSeries(1);

	const { data: trendingMovies, isLoading: istrendingMovieLoading, error: trendingMovieError } = useTrendingMovie(1);
	const { data: trendingSeries, isLoading: istrendingSeriesLoading, error: trendingSeriesError } = useTrendingSeries(1);

	const isLoading = isPopularMovieLoading || isPopularSeriesLoading || istrendingMovieLoading || istrendingSeriesLoading;
	const error = popularMovieError || popularSeriesError || trendingMovieError || trendingSeriesError;

	return (
		<MediaContext.Provider value={{ popularMovies, popularSeries, trendingMovies, trendingSeries, isLoading, error }}>{children}</MediaContext.Provider>
	);
};

export default MediaProvider;
