import { useFetchPopularData } from '../hooks/useFetchPopularData';
import { Content } from './../components/index';

const Home = () => {
	// const { data, isLoading, error } = useMovie();
	const { moviesData, seriesData, isLoading, error } = useFetchPopularData();

	if (isLoading) return <p>Loading....</p>;
	if (error) return <p>Error </p>;

	// const movieResults = data?.results || [];

	return (
		<section className="px-4 py-6 w-full">
			<Content
				label="Popular - Movie"
				items={moviesData?.results || []}
				render={(item) => (
					<>
						<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
							<img
								src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
								alt={item.title}
								className="w-full h-full object-cover rounded-md shadow-md"
							/>
						</div>
						<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate">{item.title}</p>
					</>
				)}
			/>
			<Content
				label="Popular - Series"
				items={seriesData?.results || []}
				render={(item) => (
					<>
						<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
							<img
								src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
								alt={item.name}
								className="w-full h-full object-cover rounded-md shadow-md"
							/>
						</div>
						<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate">{item.name}</p>
					</>
				)}
			/>
			{/* <Content label="Popular - Series" items={movieResults} /> */}
		</section>
	);
};

export default Home;
