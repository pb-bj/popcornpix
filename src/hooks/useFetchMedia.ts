import { useQuery } from '@tanstack/react-query';
import { getPopularData, getTrendingData } from '../services/api';

// POPULAR
export const usePopularMovies = (page: number) => {
	return useQuery({
		queryKey: ['popular-movies', page],
		queryFn: () => getPopularData('movie', page),
	});
};

export const usePopularSeries = (page: number) => {
	return useQuery({
		queryKey: ['popular-series', page],
		queryFn: () => getPopularData('tv', page),
	});
};

// TRENDING
export const useTrendingMovie = (page: number) => {
	return useQuery({
		queryKey: ['teending-movie', page],
		queryFn: () => getTrendingData('movie', 'week', page),
	});
};

export const useTrendingSeries = (page: number) => {
	return useQuery({
		queryKey: ['trending-series', page],
		queryFn: () => getTrendingData('tv', 'week', page),
	});
};
