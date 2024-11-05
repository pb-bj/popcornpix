export type BaseMedia = {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids?: number[];
	id: number;
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	vote_average: number;
	vote_count: number;
};

export type BaseVideoType = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
};
