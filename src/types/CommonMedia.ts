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
