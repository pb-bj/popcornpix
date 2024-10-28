import { Clapperboard, FolderClock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button, GenreList } from '../../components';
import { useMediaDetails } from '../../hooks/useFetchMedia';
import { EndpointProps } from '../../services/api';
import ImdbImage from './../../assets/imdb.png';
import { isMovieDetails, isSeriesDetails } from './../../utils/typeGuards';
import DetailMenu from './DetailMenu';
import DetailVideoContent from './DetailVideoContent';

type DetailsParams = {
	type: EndpointProps;
	id: string;
};

export default function DetailPage() {
	const { type, id } = useParams<DetailsParams>();
	const mediaId = parseInt(id);
	const mediaType = type === 'movie' ? 'movie' : 'tv';
	const { data, isLoading, error } = useMediaDetails(mediaType, mediaId);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	if (!data) return null;
	const backgroundImage = `${import.meta.env.VITE_APP_TMDB_IMAGE_ORIGINAL_URL}/${data?.backdrop_path}`;

	return (
		<>
			<div
				className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-0 opacity-45"
				style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.15)), url(${backgroundImage})` }}
			></div>
			{/* Menu */}
			<DetailMenu />

			{/* Detail Content */}
			<div className="relative flex flex-col md:flex-row items-start justify-between px-2 md:pl-7 md:px-0 py-3 gap-4 w-full">
				<div className="w-full px-3 md:w-8/12 md:pl-3 md:px-0 ">
					{isMovieDetails(data) ? (
						<>
							<div className="flex space-x-2">
								<h1 className="flex items-center justify-center mx-auto leading-8 sm:leading-[45px] mb-4 md:mt-3 font-extrabold text-center text-[30px] md:items-start md:justify-start md:mx-0 md:text-[48px] tracking-tight uppercase">
									{data.title}
								</h1>
							</div>
							<div className="flex items-center justify-center mx-auto text-sm md:text-[16px] md:items-baseline md:justify-start md:mx-0 space-x-4 font-semibold">
								<div>{data?.runtime} min</div>
								<div>{new Date(data.release_date).getFullYear()}</div>
								<div>{(data?.vote_average).toFixed(1)}</div>
								<div>
									<Link to={`https://www.imdb.com/title/${data?.imdb_id}/?ref_=hm_tpten_tt_i_1`} target="_blank">
										<img className="rounded-sm cursor-pointer w-[30px]" src={ImdbImage} alt="" />
									</Link>
								</div>
							</div>
							<p className="pt-4 py-2.5 text-sm font-light text-gray-300 italic">{data?.tagline}</p>

							{/* genre */}
							<GenreList genres={data?.genres} />

							<div>
								<div className="uppercase text-xs mt-4 text-p4 font-semibold">production</div>
								<ul className="flex flex-wrap items-baseline space-x-3 text-xs md:text-sm py-2.5">
									{data?.production_companies?.slice(0, 2).map((company) => (
										<p className="py-0.5 text-sm mb-3.5" key={company.id}>
											{company.name}
										</p>
									))}
								</ul>
							</div>
							{/* summary */}
							<div className="uppercase text-xs mt-4 text-p4 font-semibold">summary</div>
							<p className="py-2.5 text-xs md:text-sm  text-gray-300 text-justify ">{data?.overview}</p>
						</>
					) : isSeriesDetails(data) ? (
						<>
							<div className="flex space-x-2">
								<h1 className="flex text-center items-center justify-center mx-auto leading-8 sm:leading-[45px] mb-4 font-extrabold text-[30px] md:text-[48px] md:m-0 tracking-tight uppercase">
									{data.name}
								</h1>
							</div>
							<div className="flex items-center justify-center mx-auto text-sm md:text-[16px] pt-2 md:items-baseline md:justify-start md:mx-0 space-x-4 font-semibold">
								<div>{data?.last_episode_to_air?.runtime || 0} min</div>
								<div>{new Date(data.first_air_date).getFullYear()}</div>
								<div>{(data?.vote_average).toFixed(1)}</div>
								<div>
									<Link to={`https://www.imdb.com/title/${data?.id}/?ref_=hm_tpten_tt_i_1`} target="_blank">
										<img className="rounded-sm cursor-pointer w-[30px]" src={ImdbImage} alt="" />
									</Link>
								</div>
							</div>
							<p className="py-2.5 text-sm font-light text-gray-300 italic">{data?.tagline}</p>

							{/* facts */}
							<div className="flex items-baseline space-x-4 mt-4">
								<div>
									<div className="uppercase text-xs mt-4 text-p4 font-semibold">Seasons</div>
									<div className="text-sm text-center">{data?.number_of_seasons}</div>
								</div>
								<div>
									<div className="uppercase text-xs mt-4 text-p4 font-semibold">Episodes</div>
									<div className="text-sm text-center">{data?.number_of_episodes}</div>
								</div>
								<div>
									<div className="uppercase text-xs mt-4 text-p4 font-semibold">Status</div>
									<div className="text-sm">{data?.status}</div>
								</div>
							</div>

							{/* genres */}
							<GenreList genres={data?.genres} />
							{/* Networks */}

							<div>
								<div className="uppercase text-xs mt-4 text-p4 font-semibold">Networks </div>
								<ul className="flex items-baseline space-x-4 text-sm py-2.5">
									{data?.networks.slice(0, 2)?.map((network) => (
										<img src={`${import.meta.env.VITE_APP_TMDB_IMAGE_ORIGINAL_URL}/${network?.logo_path}`} width={80} />
									))}
								</ul>
							</div>
							{/* summary */}
							<div className="">
								<div className="uppercase text-xs mt-4 text-p4 font-semibold">summary</div>
								<p className="py-2.5 text-xs md:text-sm text-gray-300 text-justify">{data?.overview}</p>
							</div>
						</>
					) : null}

					{/* buttons */}
					<div className="flex items-center justify-center space-x-3 mt-8 mb-3 md:items-start md:justify-start md:mx-0">
						<Button label="Add to Library" onClick={() => alert('clicked')} Icon={FolderClock} />
						<Button label="Trailer" onClick={() => alert('clicked')} Icon={Clapperboard} />
					</div>
				</div>
				<DetailVideoContent />
			</div>
		</>
	);
}
