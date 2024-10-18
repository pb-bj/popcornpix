import { BaseMedia } from './CommonMedia';

export type Series = BaseMedia & {
	original_name: string;
	first_air_date: string;
	name: string;
	origin_country?: string[];
};
