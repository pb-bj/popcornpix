import { FilterDialog, FilterSelect } from '@/components';
import { mediaContent, mediaMovieGenre, mediaSeriesGenre, mediaTitle } from '@/constants/FilterMenu';
import { useDiscoverMedia } from '@/hooks/useFetchMedia';
import { useEffect, useState } from 'react';
import DiscoverContent from './DiscoverContent';

const DiscoverPage = () => {
	const [currentMediaTitle, setCurrentMediaTitle] = useState(mediaTitle[0].title);
	const [currentMediaContent, setCurrentMediaContent] = useState(mediaContent[0].title);
	const [currentMediaGenres, setCurrentMediaGenres] = useState(mediaMovieGenre[0].title);

	useEffect(() => {
		// for dynamically changing the state value depending on media title
		const initialGenre = currentMediaTitle.toLowerCase() === 'movie' ? mediaMovieGenre[0].title : mediaSeriesGenre[0].title;
		setCurrentMediaGenres(initialGenre);
	}, [currentMediaTitle]);

	const handleMediaTitle = (value: string) => {
		setCurrentMediaTitle(value);
	};

	const handleMediaContent = (value: string) => {
		setCurrentMediaContent(value);
	};

	const handleMediaGenre = (value: string) => {
		setCurrentMediaGenres(value);
	};

	const displayGenre = currentMediaTitle?.toLowerCase() === 'movie' ? mediaMovieGenre : mediaSeriesGenre;
	const displayContent = currentMediaContent?.toLowerCase() === 'popular' ? 'popularity.desc' : 'top_rated';

	const genre_no = displayGenre.find((genre) => genre.title === currentMediaGenres)?.id || '0';

	// TODO: loading state
	// TODO: add the page query in discover api
	// TODO: filter option on smaller device : need to close the filter option on every render.
	//TODO: adding pagination

	//FIXME: Need to fix the back routing when from going grom detail -> going direct home instead fo prevoius visited route

	const { data } = useDiscoverMedia(currentMediaTitle.toLowerCase(), displayContent, genre_no);
	// console.log(data);

	return (
		<section className="px-4 py-6 w-full relative">
			<div className="sticky top-0 z-50 h-[45px] bg-bg1 w-full flex justify-between items-center sm:justify-normal sm:items-start gap-2">
				{/* media-title-filter */}
				<FilterSelect
					value={currentMediaTitle}
					onHandleMedia={handleMediaTitle}
					placeholder={mediaTitle[0].title}
					items={mediaTitle}
				/>

				{/* smaller device based filter-menu */}
				<div className="sm:hidden">
					<FilterDialog
						currentMediaTitle={currentMediaTitle}
						currentMediaContent={currentMediaContent}
						currentMediaGenres={currentMediaGenres}
						mediaTitle={mediaTitle}
						mediaContent={mediaContent}
						displayGenre={displayGenre}
						handleMediaTitle={handleMediaTitle}
						handleMediaContent={handleMediaContent}
						handleMediaGenre={handleMediaGenre}
						displayContent={displayContent}
					/>
				</div>

				<div className="hidden sm:flex sm:gap-2">
					{/* media-content-filter */}
					<FilterSelect
						value={currentMediaContent}
						onHandleMedia={handleMediaContent}
						placeholder={mediaContent[0].title}
						items={mediaContent}
					/>

					{/* media-genre-filter */}
					{displayContent === 'popularity.desc' && (
						<div>
							<FilterSelect
								value={currentMediaGenres}
								onHandleMedia={handleMediaGenre}
								placeholder={displayGenre[0].title}
								items={displayGenre}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4 lg:grid-cols-8 mt-3">
				<DiscoverContent content={data} />
			</div>
		</section>
	);
};

export default DiscoverPage;
