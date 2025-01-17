import { FilterDialog } from '@/components';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const DiscoverPage = () => {
	return (
		<section className="px-4 py-6 w-full">
			<div className="flex justify-between items-center sm:justify-normal sm:items-start gap-2">
				<Select>
					<SelectTrigger className="w-[180px] border-none rounded-full bg-bg4 text-xs">
						<SelectValue placeholder="Movie" />
					</SelectTrigger>
					<SelectContent className="shadow-xl cursor-pointer border-none">
						<SelectItem value="movie" className="cursor-pointer text-xs ">
							Movie
						</SelectItem>
						<SelectItem value="series" className="cursor-pointer text-xs">
							Series
						</SelectItem>
					</SelectContent>
				</Select>
				{/* second option */}
				<div className="sm:hidden">
					<FilterDialog />
				</div>
				<div className="hidden sm:flex sm:gap-2">
					<Select>
						<SelectTrigger className="w-[180px] border-none rounded-full bg-bg4 text-xs">
							<SelectValue placeholder="Popular" />
						</SelectTrigger>
						<SelectContent className="shadow-xl cursor-pointer">
							<SelectItem value="movie" className="cursor-pointer text-xs">
								Popular
							</SelectItem>
							<SelectItem value="series" className="cursor-pointer text-xs">
								Top rated
							</SelectItem>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className="w-[180px] border-none rounded-full bg-bg4 text-xs">
							<SelectValue placeholder="None" />
						</SelectTrigger>
						<SelectContent className="shadow-xl cursor-pointer">
							<SelectItem value="movie" className="cursor-pointer text-xs">
								Action
							</SelectItem>
							<SelectItem value="series" className="cursor-pointer text-xs">
								Adventure
							</SelectItem>
							<SelectItem value="series" className="cursor-pointer text-xs">
								Horror
							</SelectItem>
							<SelectItem value="series" className="cursor-pointer text-xs">
								History
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</section>
	);
};

export default DiscoverPage;
