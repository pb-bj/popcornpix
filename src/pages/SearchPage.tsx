import { Clapperboard } from 'lucide-react';
import { useEffect } from 'react';
import { Content } from '../components';
import { useQueryParams } from '../hooks/useFetchMedia';
import useSearchDetail from '../hooks/useSearchDetail';
import { Movie } from '../types/Movie';
import { Series } from '../types/Series';

const SearchPage = () => {
	const { searchDetail, resetSearchDetail } = useSearchDetail();
	const { data, isLoading } = useQueryParams(searchDetail);

	useEffect(() => {
		resetSearchDetail();
	}, []);

	return (
		<section className="px-4 py-6 w-full">
			{searchDetail !== null && data && data.results.length > 0 ? (
				<>
					<p>Search</p>
					<Content<Movie | Series>
						items={data.results}
						render={(item) => (
							<>
								<div className="cursor-pointer sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md">
									<img
										src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
										alt={'title' in item ? item.title : item.name}
										className="w-full h-full object-cover rounded-md shadow-md"
									/>
								</div>
								<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{'title' in item ? item.title : item.name}</p>
							</>
						)}
					/>
				</>
			) : (
				<div className="flex flex-col justify-center items-center mx-auto mt-[150px] text-p5">
					<Clapperboard className="w-[120px] h-[150px]" />
					<p>Search for any movies or series</p>
				</div>
			)}
		</section>
	);
};

export default SearchPage;
