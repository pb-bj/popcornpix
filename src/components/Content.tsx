import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/Movie';
import { Series } from '../types/Series';

type ContentProps<T extends Movie | Series> = {
	label?: string;
	items: T[];
	render: (items: T) => ReactNode;
	maxItems?: number; // for maximun items to be display
};

const Content = <T extends Movie | Series>({ label, items, render, maxItems }: ContentProps<T>) => {
	// for maximum items to be displayed
	const displayItems = maxItems ? items.slice(0, maxItems) : items;
	return (
		<div className="mb-8">
			<div className="flex justify-between items-baseline pb-4">
				<div className="text-primary ">{label}</div>
				{maxItems && (
					<>
						<div className="flex items-center justify-between w-[80px] text-sm text-p2 cursor-pointer px-1.5 sm:text-secondary sm:hover:text-white sm:hover:bg-p4 sm:hover:rounded-xl sm:hover:shadow-lg">
							<div>See All</div>
							<div>
								<ChevronRight width={20} />
							</div>
						</div>
					</>
				)}
			</div>
			<ul className="grid gap-4 grid-cols-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
				{displayItems && displayItems?.length > 0 ? (
					displayItems.map((item) => {
						// dynamically determining the type
						let itemType = 'title' in item ? 'movie' : 'tv';
						return (
							<Link to={`/detail/${itemType}/${item.id}`} key={item.id}>
								<li className="flex flex-col items-center">{render(item)}</li>
							</Link>
						);
					})
				) : (
					<p>No movies found</p>
				)}
			</ul>
		</div>
	);
};

export default Content;
