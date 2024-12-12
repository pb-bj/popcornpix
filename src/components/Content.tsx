import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/Movie';
import { Series } from '../types/Series';

type ContentProps<T extends Movie | Series> = {
	label: string;
	type: 'movie' | 'tv';
	items: T[];
	render: (items: T) => ReactNode;
};

const Content = <T extends Movie | Series>({ label, type, items, render }: ContentProps<T>) => {
	return (
		<div className="mb-8">
			<div className="flex justify-between items-baseline pb-4">
				<div className="text-primary ">{label}</div>
				<div className="flex items-center justify-between w-[80px] text-sm text-p2 cursor-pointer px-1.5 sm:text-secondary sm:hover:text-white sm:hover:bg-p4 sm:hover:rounded-xl sm:hover:shadow-lg">
					<div>See All</div>
					<div>
						<ChevronRight width={20} />
					</div>
				</div>
			</div>
			<ul className="grid gap-4 grid-cols-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
				{items && items?.length > 0 ? (
					items?.slice(0, 6).map((item) => (
						<Link to={`/detail/${type}/${item.id}`} key={item.id}>
							<li className="flex flex-col items-center">{render(item)}</li>
						</Link>
					))
				) : (
					<p>No movies found</p>
				)}
			</ul>
		</div>
	);
};

export default Content;
