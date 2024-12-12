import unavailableImg from '../../assets/unavailableImg.png';
import { SeriesSeasonDetails } from '../../types/Series';
import { isUpcoming } from '../../utils';

type EpisodesProps = {
	details: SeriesSeasonDetails | undefined;
	loading: boolean;
};

const Episodes = ({ details, loading }: EpisodesProps) => {
	if (loading) return <p>Loading...</p>;
	return (
		<>
			{details?.episodes.map((episode) => (
				<div key={episode.id} className="flex gap-2 mb-3 py-1.5 rounded-md cursor-pointer hover:bg-black/20">
					<img
						className="mb-2"
						src={episode.still_path ? `${import.meta.env.VITE_APP_TMDB_IMAGE_ORIGINAL_URL}/${episode?.still_path}` : unavailableImg}
						alt={episode.name || 'Episode image'}
						width={100}
					/>
					<div className="flex flex-col space-y-5">
						<div>
							<h3 className="font-bold">{episode.name || 'TBA'}</h3>
						</div>
						<div className="flex space-x-4 text-p2 text-[12px] ">
							{isUpcoming(episode.air_date) ? (
								<>
									<p className="text-p2 text-[12px]">{episode?.air_date || 'TBA'}</p>
									<p className="bg-green-700 p-1 uppercase text-[11px] rounded-sm text-white">Upcoming</p>
								</>
							) : (
								<>
									<div className="flex justify-end gap-3">
										<p className="text-p2 text-[12px]">{episode?.air_date || 'TBA'}</p>
										<p>{episode?.runtime} min</p>
										<p>{episode?.vote_average.toFixed(1)}</p>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Episodes;
