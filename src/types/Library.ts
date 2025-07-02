export type MediaType = 'movie' | 'tv';

export type LibraryType = {
	id: string;
	user_id: string;
	media_type: MediaType;
	media_id: number;
	label: string;
	poster: string;
	created_at: string;
	updated_at: string;
};
