import { CastCredit } from '../types/CastCredit';
import {
	DetailResponse,
	DiscoveMediaResponse,
	MovieResponse,
	MultiSearchResponse,
	SeriesResponse,
	TrendingMovieResponse,
	TrendingSeriesResponse,
	VideoResponse,
} from '../types/Response';
import { SeriesSeasonDetails } from '../types/Series';
import { instance } from './instance';

export type DataResponse = MovieResponse | SeriesResponse;
export type TrendingResponse = TrendingMovieResponse | TrendingSeriesResponse;

export type EndpointProps = 'movie' | 'tv';
export type TimeWindowType = 'day' | 'week';

// POPULAR MOVIE | TV SERIES
export const getPopularData = async (type: EndpointProps, page: number): Promise<DataResponse> => {
	const { data } = await instance.get<DataResponse>(`/${type}/popular?page=${page}`);
	return data;
};

// TRENDING MOVIE | TV SERIES
export const getTrendingData = async (
	type: EndpointProps,
	time_window: TimeWindowType,
	page: number
): Promise<TrendingResponse> => {
	const { data } = await instance.get<TrendingResponse>(`/trending/${type}/${time_window}?page=${page}`);
	return data;
};

// DETAILS
export const getDetailData = async (type: EndpointProps, id: number): Promise<DetailResponse> => {
	const { data } = await instance.get<DetailResponse>(`/${type}/${id}`);
	return data;
};

// VIDEOS
export const getVideos = async (type: EndpointProps, id: number): Promise<VideoResponse> => {
	const { data } = await instance.get<VideoResponse>(`/${type}/${id}/videos`);
	return data;
};

// SEASON DETAILS
export const getSeasonDetails = async (series_id: number, series_number: number): Promise<SeriesSeasonDetails> => {
	const { data } = await instance.get<SeriesSeasonDetails>(`/tv/${series_id}/season/${series_number}`);
	return data;
};

// MULTI-SEARCH
export const getSearchResults = async (searchedQueries: string): Promise<MultiSearchResponse> => {
	const { data } = await instance.get<MultiSearchResponse>(`/search/multi?query=${searchedQueries}`);
	return data;
};

// CAST CREDITS
export const getCastCreditDetail = async (type: EndpointProps, id: number): Promise<CastCredit> => {
	const { data } = await instance.get<CastCredit>(`/${type}/${id}/credits`);
	return data;
};

// DISCOVER MOVIES | SERIES
export const getDiscoverMedia = async (
	type: string,
	pages: number,
	sort_by: string,
	genres_no: string
): Promise<DiscoveMediaResponse> => {
	let endpoint = '';

	if (sort_by === 'popularity.desc') {
		endpoint += `/discover/${type}?page=${pages}&sort_by=${sort_by}&with_genres=${genres_no}`;
	} else {
		endpoint += `/${type}/top_rated?page=${pages}`;
	}

	const { data } = await instance.get<DiscoveMediaResponse>(endpoint);
	return data;
};
