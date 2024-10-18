import { Movie } from './Movie';
import { Series } from './Series';
import { TrendingMovie, TrendingSeries } from './Trending';

export type MovieResponse = {
	page?: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

export type SeriesResponse = {
	page?: number;
	results: Series[];
	total_pages: number;
	total_results: number;
};

export type TrendingMovieResponse = {
	page?: number;
	results: TrendingMovie[];
};

export type TrendingSeriesResponse = {
	page?: number;
	results: TrendingSeries[];
};
