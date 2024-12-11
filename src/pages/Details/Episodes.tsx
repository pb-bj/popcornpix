import { SeriesSeasonDetails } from '../../types/Series';

type EpisodesProps = {
	details: SeriesSeasonDetails | undefined;
};

const Episodes = ({ details }: EpisodesProps) => {
	return (
		<>
			{details?.episodes.map((episode) => (
				<div key={episode.id}>{episode.name}</div>
			))}
		</>
	);
};

export default Episodes;
