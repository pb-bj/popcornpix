import { Movie } from './Movie';
import { Series } from './Series';

export type MovieResponse = {
	page?: number;
	results: Movie[];
};

export type SeriesResponse = {
	page?: number;
	results?: Series[];
};
