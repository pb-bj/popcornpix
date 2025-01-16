import { useQuery } from '@tanstack/react-query';
import {
	EndpointProps,
	getCastCreditDetail,
	getDetailData,
	getPopularData,
	getSearchResults,
	getSeasonDetails,
	getTrendingData,
	getVideos,
} from '../services/api';

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

// VIDEO
export const useVideos = (type: EndpointProps, id: number) => {
	return useQuery({
		queryKey: ['video', type, id],
		queryFn: () => getVideos(type, id),
	});
};

// SERIES SEASON DETAIL
export const useSeasonDetails = (season_id: number, season_number: number) => {
	return useQuery({
		queryKey: ['season-details', season_id, season_number],
		queryFn: () => getSeasonDetails(season_id, season_number),
	});
};

// SEARCHED QUERIES
export const useQueryParams = (searchedQueries: string) => {
	return useQuery({
		queryKey: ['searched', searchedQueries],
		queryFn: () => getSearchResults(searchedQueries),
	});
};

// CAST CREDIT
export const useCastCredits = (type: EndpointProps, id: number) => {
	return useQuery({
		queryKey: ['cast', type, id],
		queryFn: () => getCastCreditDetail(type, id),
	});
};
