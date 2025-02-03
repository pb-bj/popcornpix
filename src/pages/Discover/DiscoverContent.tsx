import { DiscoveMediaResponse } from '@/types/Response';
import { Link } from 'react-router-dom';

type DiscoverContentProps = {
	content: DiscoveMediaResponse | undefined;
};

const DiscoverContent = ({ content }: DiscoverContentProps) => {
	return (
		<>
			{content?.results.map((item) => {
				let displayLabel = 'title' in item ? item.title : item.name;
				let itemType = 'title' in item ? 'movie' : 'tv';
				return (
					<>
						<Link to={`/detail/${itemType}/${item.id}`} key={item.id}>
							<div key={item.id} className="cursor-pointer  mb-8">
								<img
									className="w-full h-full object-cover rounded-md shadow-md sm:hover:border sm:hover:border-gray-50 sm:hover:rounded-md"
									src={`${import.meta.env.VITE_APP_TMDB_IMAGE_SMALL_URL}/${item.poster_path}`}
									alt={displayLabel}
								/>
								<p className="pt-2 text-[11.5px] sm:text-[13px] text-center truncate w-full">{displayLabel}</p>
							</div>
						</Link>
					</>
				);
			})}
		</>
	);
};

export default DiscoverContent;
