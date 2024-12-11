import { SeriesSeasonDetails } from '../../types/Series';

type EpisodesProps = {
	details: SeriesSeasonDetails | undefined;
};

const Episodes = ({ details }: EpisodesProps) => {
	return (
		<>
			{details?.episodes.map((episode) => (
				<div key={episode.id} className="flex gap-4">
					<img className="mb-2" src={`${import.meta.env.VITE_APP_TMDB_IMAGE_ORIGINAL_URL}/${episode?.still_path}`} width={130} />
					<div className="flex flex-col space-y-3">
						<div>
							<h3 className="font-bold">{episode.name}</h3>
							<p className="text-p2 text-[12px]">{episode.air_date}</p>
						</div>
						<div className="flex gap-3 text-p2 text-[12px]">
							<p>{episode.runtime} min</p>
							<p>{episode.vote_average.toFixed(1)}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Episodes;
