import { MovieDetails } from '../types/Movie';
import { DetailResponse } from '../types/Response';
import { SeriesDetails } from '../types/Series';

export const isMovieDetails = (data: DetailResponse | undefined): data is MovieDetails => {
	return data !== undefined && 'title' in data;
};

export const isSeriesDetails = (data: DetailResponse | undefined): data is SeriesDetails => {
	return data !== undefined && 'name' in data;
};
