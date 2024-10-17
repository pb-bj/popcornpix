import { MovieResponse, SeriesResponse } from '../types';
import { instance } from './instance';

type DataResponse = MovieResponse | SeriesResponse;
type EndpointProps = 'movie' | 'series';
type TimeWindowType = 'day' | 'week';

export const getPopularData = async (type: EndpointProps, page: number): Promise<DataResponse> => {
	const endpoint = type === 'movie' ? `/movie/popular?page=${page}` : `/tv/popular?page=${page}`;
	const { data } = await instance.get<DataResponse>(endpoint);
	return data;
};

export const getTrendingData = async (type: EndpointProps, time_window: TimeWindowType, page: number): Promise<DataResponse> => {
	const endpoint = type === 'movie' ? `/trending/movie/${time_window}?page=${page}` : `/trending/tv/${time_window}?page=${page}`;
	const { data } = await instance.get<DataResponse>(endpoint);
	return data;
};
