import useAuth from '@/hooks/useAuth';
import { addToUserLibrary, chechUserLibrary, deleteFromUserLibrary } from '@/services/supabase-library';
import { Clapperboard, FolderClock, FolderX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Button, InfoPanel } from '../../components';
import { useCastCredits, useMediaDetails } from '../../hooks/useFetchMedia';
import { EndpointProps } from '../../services/api';
import ImdbImage from './../../assets/imdb.png';
import { isMovieDetails, isSeriesDetails } from './../../utils/typeGuards';
import DetailMenu from './DetailMenu';
import DetailVideoContent from './DetailVideoContent';
import Trailer from './Trailer';

type DetailsParams = {
	type: EndpointProps;
	id: string;
};

export default function DetailPage() {
	const { type, id } = useParams<DetailsParams>();
	const { user } = useAuth();

	const [isInLibrary, setIsInLibrary] = useState(false);
	const [isLoadingLibrary, setIsLoadingLibrary] = useState(false);
	const [isUpdatingLibrary, setIsUpdatingLibrary] = useState(false);
	const [showTrailer, setShowTrailer] = useState(false);

	const navigate = useNavigate();
	const mediaId = parseInt(id ?? '');
	const mediaType = type === 'movie' ? 'movie' : 'tv';
	const { data, isLoading, error } = useMediaDetails(mediaType, mediaId);

	const { data: castInfo } = useCastCredits(mediaType, mediaId);

	// for checking the user-library based on medias
	useEffect(() => {
		const checkLibraryStatus = async () => {
			if (!user?.id) {
				setIsInLibrary(false);
				setIsLoadingLibrary(false);
				return;
			}

			setIsLoadingLibrary(true);
			try {
				const { exist } = await chechUserLibrary(user.id, mediaType, mediaId);
				setIsInLibrary(exist);
			} catch (error) {
				console.error('Error checking library', error);
				setIsInLibrary(false);
			} finally {
				setIsLoadingLibrary(false);
			}
		};

		checkLibraryStatus();
	}, [user?.id, mediaType, mediaId]);

	const handleAddToLibrary = async () => {
		if (!user || !user.id) {
			navigate('/login');
			return;
		}

		setIsUpdatingLibrary(true);
		try {
			const label = isMovieDetails(data) ? data.title : isSeriesDetails(data) ? data.name : 'Unknown Title';
			const poster = data?.poster_path ?? '';

			const { success, message } = await addToUserLibrary(user.id, mediaType, mediaId, label, poster);
			if (success) {
				setIsInLibrary(true);
				toast.success(message);
			}
		} catch (error) {
			console.error('Error adding to library', error);
		} finally {
			setIsUpdatingLibrary(false);
		}
	};

	const handleRemoveFromLibrary = async () => {
		if (!user?.id) {
			return;
		}

		setIsUpdatingLibrary(true);
		try {
			const { success, message } = await deleteFromUserLibrary(user?.id, mediaType, mediaId);
			if (success) {
				setIsInLibrary(false);
				toast.info(message);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsUpdatingLibrary(false);
		}
	};

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
			{showTrailer && <Trailer trailerId={mediaId} trailerType={mediaType} onClose={() => setShowTrailer(false)} />}

			{/* Detail Content */}
			<div className="w-full relative flex flex-col md:flex-row items-start justify-between gap-4">
				<div className="md:w-11/12  ">
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
							<InfoPanel label="Genres" items={data.genres} isCast={false} />

							{/* cast */}
							<InfoPanel label="Cast" items={castInfo?.cast} isCast={true} />

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
							<InfoPanel label="Genres" items={data.genres} isCast={false} />

							{/* Cast */}
							<InfoPanel label="Casts" items={castInfo?.cast} isCast={true} />
							{/* Networks */}
							<div>
								<div className="uppercase text-xs mt-4 text-p4 font-semibold">Networks </div>
								<ul className="flex items-baseline space-x-4 text-sm py-2.5">
									{data?.networks.slice(0, 2)?.map((network) => (
										<img key={network.id} src={`${import.meta.env.VITE_APP_TMDB_IMAGE_ORIGINAL_URL}/${network?.logo_path}`} width={80} />
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
					<div className="w-full flex flex-col  space-y-3 lg:space-y-0 lg:flex-row items-center justify-center space-x-3 mt-8 mb-3 md:items-start md:justify-start md:mx-0">
						{isLoadingLibrary ? (
							<div className="h-[40px] w-[160px] bg-p2/20 animate-pulse rounded-md" />
						) : isInLibrary ? (
							<Button label="Remove from watchlist" onClick={handleRemoveFromLibrary} Icon={FolderX} disabled={isUpdatingLibrary} />
						) : (
							<Button label="Add to watchlist" onClick={handleAddToLibrary} Icon={FolderClock} disabled={isUpdatingLibrary || !user?.id} />
						)}

						<Button label="Trailer" onClick={() => setShowTrailer(!showTrailer)} Icon={Clapperboard} />
					</div>
				</div>
				{isSeriesDetails(data) && <DetailVideoContent seriesData={data} />}
			</div>
		</>
	);
}
