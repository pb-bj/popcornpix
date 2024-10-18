import { BaseMedia } from './CommonMedia';

export type Movie = BaseMedia & {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
};
