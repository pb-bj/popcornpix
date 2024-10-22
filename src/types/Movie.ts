import { Genre, ProductionCompany, ProductionCountry } from './CommonDetail';
import { BaseMedia } from './CommonMedia';

export type Movie = BaseMedia & {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
};

// Details
export type MovieDetails = {
	adult: boolean;
	backdrop_path: string | null;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	runtime: number;
	status: string;
	tagline: string;
	title: string;
	vote_average: number;
	vote_count: number;
};
