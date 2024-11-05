import { useQuery } from '@tanstack/react-query';
import { EndpointProps, getDetailData, getPopularData, getTrendingData, getVideos } from '../services/api';

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

// DETAIL
export const useMediaDetails = (type: EndpointProps, id: number) => {
	return useQuery({
		queryKey: ['media-details', type, id],
		queryFn: () => getDetailData(type, id),
	});
};

export const useVideos = (type: EndpointProps, id: number) => {
	return useQuery({
		queryKey: ['video', type, id],
		queryFn: () => getVideos(type, id),
	});
};
