import { useMediaData } from '../contexts/MediaProvider';
import { Movie } from '../types/Movie';
import { Series } from '../types/Series';
import { TrendingMovie, TrendingSeries } from '../types/Trending';
import { Content } from './../components/index';

const Home = () => {
	const { popularMovies, popularSeries, trendingMovies, trendingSeries, isLoading, error } = useMediaData();
	if (isLoading) return <p>Loading....</p>;
	if (error) return <p>Error </p>;

	return (
		<section className="px-4 py-6 w-full">
			<Content<TrendingMovie>
				label="Trending - Movie"
				items={(trendingMovies?.results ?? []) as TrendingMovie[]}
				render={(item) => (
					<>
						<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
							<img
								src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
								alt={item.title}
								className="w-full h-full object-cover rounded-md shadow-md"
							/>
						</div>
						<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{item.title}</p>
					</>
				)}
			/>
			<Content<TrendingSeries>
				label="Trending - Series"
				items={(trendingSeries?.results ?? []) as TrendingSeries[]}
				render={(item) => (
					<>
						<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
							<img
								src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
								alt={item.name}
								className="w-full h-full object-cover rounded-md shadow-md"
							/>
						</div>
						<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{item.name}</p>
					</>
				)}
			/>
			<Content<Movie>
				label="Popular - Movie"
				items={(popularMovies?.results || []) as Movie[]}
				render={(item) => (
					<>
						<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
							<img
								src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
								alt={item.title}
								className="w-full h-full object-cover rounded-md shadow-md"
							/>
						</div>
						<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{item.title}</p>
					</>
				)}
			/>

			<Content<Series>
				label="Popular - Series"
				items={(popularSeries?.results ?? []) as Series[]}
				render={(item) => (
					<>
						<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
							<img
								src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
								alt={item.name}
								className="w-full h-full object-cover rounded-md shadow-md"
							/>
						</div>
						<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{item.name}</p>
					</>
				)}
			/>
		</section>
	);
};

export default Home;
