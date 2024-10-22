import { Genre, ProductionCompany, ProductionCountry } from './CommonDetail';
import { BaseMedia } from './CommonMedia';

export type Series = BaseMedia & {
	original_name: string;
	first_air_date: string;
	name: string;
	origin_country?: string[];
};

//Details

type Episode = {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number | null;
	season_number: number;
	show_id: number;
	still_path: string | null;
};

type Network = {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
};

type Season = {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string | null;
	season_number: number;
	vote_average: number;
};

export type SeriesDetails = {
	adult: boolean;
	backdrop_path: string | null;
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: Episode;
	name: string;
	next_episode_to_air: Episode | null;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	seasons: Season[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};
