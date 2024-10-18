import { BaseMedia } from './CommonMedia';

export type TrendingMovie = BaseMedia & {
	title: string;
	original_title: string;
	release_date: string;
	video: boolean;
};

export type TrendingSeries = BaseMedia & {
	name: string;
	original_name: string;
	first_air_date: string;
	origin_country?: string[];
};
