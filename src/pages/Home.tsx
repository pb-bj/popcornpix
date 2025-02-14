import { Skeleton } from '@/components/ui/skeleton';
import useMediaData from '../hooks/useMediaData';
import { Movie } from '../types/Movie';
import { Series } from '../types/Series';
import { TrendingMovie, TrendingSeries } from '../types/Trending';
import { Content } from './../components/index';

const Home = () => {
	const { popularMovies, popularSeries, trendingMovies, trendingSeries, isLoading, error } = useMediaData();

	if (isLoading) {
		return (
			<ul className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4 lg:grid-cols-8 ">
				{Array.from({ length: 16 }).map((_, index) => (
					<div key={index} className="space-y-2">
						<Skeleton className="w-full h-[220px] rounded-md bg-gray-500" />
						<Skeleton className="h-4 w-3/4 mx-auto bg-gray-500" />
					</div>
				))}
			</ul>
		);
	}
	if (error) return <p>Error </p>;

	return (
		<section className="px-4 py-6 w-full">
			{/* use of generic contenxt component (Content) */}
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
				maxItems={16}
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
				maxItems={16}
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
				maxItems={16}
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
				maxItems={16}
			/>
		</section>
	);
};

export default Home;
