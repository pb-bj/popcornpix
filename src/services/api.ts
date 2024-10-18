import { MovieResponse, SeriesResponse } from '../types';
import { TrendingMovie, TrendingSeries } from '../types/Trending';
import { instance } from './instance';

type DataResponse = MovieResponse | SeriesResponse;
type TrendingResponse = TrendingMovie | TrendingSeries;
type EndpointProps = 'movie' | 'series';
type TimeWindowType = 'day' | 'week';

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
