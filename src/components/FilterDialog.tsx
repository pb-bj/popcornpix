import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import FilterSelect from './FilterSelect';

type FilterDialogProps = {
	currentMediaTitle: string;
	currentMediaContent: string;
	currentMediaGenres: string;
	mediaTitle: { id: string; title: string }[];
	mediaContent: { id: string; title: string }[];
	displayGenre: { id: string; title: string }[];
	handleMediaTitle: (value: string) => void;
	handleMediaContent: (value: string) => void;
	handleMediaGenre: (value: string) => void;
	displayContent: string;
};

const FilterDialog = ({
	currentMediaTitle,
	currentMediaContent,
	currentMediaGenres,
	mediaTitle,
	mediaContent,
	displayGenre,
	handleMediaContent,
	handleMediaGenre,
	handleMediaTitle,
	displayContent,
}: FilterDialogProps) => {
	const [open, setOpen] = useState(false);

	const onMediaTitleChange = (value: string) => {
		handleMediaTitle(value);
		handleMediaGenre(value);
		setOpen(false);
	};

	const onMediaContentChange = (value: string) => {
		handleMediaContent(value);
		setOpen(false);
	};

	const onMediaGenreChange = (value: string) => {
		handleMediaGenre(value);
		setOpen(false);
	};
	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger className="backdrop-blur bg-white/5 px-2.5 py-1 rounded-lg border-none">
					<Filter width={15} />
				</DialogTrigger>
				<DialogContent className=" w-[300px] bg-bg4 text-sm text-white border-none shadow-md rounded-lg">
					<DialogHeader>
						<DialogTitle className="text-left">Catalog filters</DialogTitle>
						<div>
							{/* media-content */}
							<FilterSelect
								value={currentMediaTitle}
								onHandleMedia={onMediaTitleChange}
								placeholder={mediaTitle[0].title}
								items={mediaTitle}
							/>
							<FilterSelect
								value={currentMediaContent}
								onHandleMedia={onMediaContentChange}
								placeholder={mediaContent[0].title}
								items={mediaContent}
							/>

							{displayContent === 'popularity.desc' && (
								<FilterSelect
									value={currentMediaGenres}
									onHandleMedia={onMediaGenreChange}
									placeholder={displayGenre[0].title}
									items={displayGenre}
								/>
							)}
						</div>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default FilterDialog;
