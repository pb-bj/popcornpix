import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
import { getUserLibraryLists } from '@/services/supabase-library';
import { LibraryType } from '@/types/Library';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/login.png';

export default function Watchlist() {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [watchlists, setWatchlists] = useState<LibraryType[]>([]);

	useEffect(() => {
		const fetchMedia = async () => {
			if (!user?.id) return;

			const response = await getUserLibraryLists(user?.id);
			setWatchlists(response);
		};
		fetchMedia();
	}, [user?.id]);

	return (
		<section className="px-4 py-6 ">
			{!user?.id && (
				<div className="w-full mt-[50px] flex flex-col gap-y-6 items-center justify-center text-center mx-auto">
					<img src={loginImg} width={120} />
					<p className="text-sm text-gray-300">Watchlist is only available for logged users</p>
					<Button onClick={() => navigate('/login')} className="backdrop-blur-md bg-white/5 hover:bg-transparent/20 text-sm rounded-full ">
						Sign in
					</Button>
				</div>
			)}
			{user?.id && watchlists && <h1 className="text-2xl font-semibold mb-6">Your Watchlist</h1>}
			{user?.id && watchlists && watchlists.length === 0 && <div className="text-center mt-8 text-gray-300">Currently nothing on watchlist</div>}

			<div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols md:grid-cols-6 md:gap-4 lg:grid-cols-8">
				{watchlists.map((watchlist) => (
					<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md mb-8" key={watchlist.id}>
						<Link to={`/detail/${watchlist.media_type}/${watchlist.media_id}`} key={watchlist.id}>
							<img src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${watchlist.poster}`} alt={watchlist.label} className="w-full h-full object-cover rounded-md shadow-md" />
							<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{watchlist.label}</p>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
