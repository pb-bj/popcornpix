import { BaseVideoType } from './CommonMedia';
import { Movie, MovieDetails } from './Movie';
import { Series, SeriesDetails } from './Series';
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

// Details
export type DetailResponse = MovieDetails | SeriesDetails;

// Videos
export type VideoResponse = {
	id: number;
	results: BaseVideoType[];
};

// multi search response
export type MultiSearchResponse = {
	page: number;
	results: Movie[] | Series[];
	total_pages: number;
	total_results: number;
};
