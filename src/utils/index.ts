import { isFuture } from 'date-fns';

export const isUpcoming = (airDate: string | null) => {
	return airDate ? isFuture(new Date(airDate)) : true;
};
