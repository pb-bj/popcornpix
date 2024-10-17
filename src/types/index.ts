import { LucideIcon } from 'lucide-react';

export type MenuType = {
	id: string;
	title: string;
	icon: LucideIcon;
	route: string;
};

export type Movie = {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids?: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TrendingMovie = {
	backdrop_path: string | null;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string | null;
	media_type: 'movie' | 'tv';
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type MovieResponse = {
	page?: number;
	results: Movie[];
};

export type Series = {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	origin_country?: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
};

export type SeriesResponse = {
	page?: number;
	results: Series[];
};
