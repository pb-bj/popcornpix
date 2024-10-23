import { DetailResponse, MovieResponse, SeriesResponse, TrendingMovieResponse, TrendingSeriesResponse } from '../types/Response';
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
export const getTrendingData = async (type: EndpointProps, time_window: TimeWindowType, page: number): Promise<TrendingResponse> => {
	const { data } = await instance.get<TrendingResponse>(`/trending/${type}/${time_window}?page=${page}`);
	return data;
};

// DETAILS
export const getDetailData = async (type: EndpointProps, id: number): Promise<DetailResponse> => {
	const { data } = await instance.get<DetailResponse>(`/${type}/${id}`);
	return data;
};
