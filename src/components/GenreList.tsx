import { Genre } from '../types/CommonDetail';

type GenreProps = {
	genres: Genre[];
};

const GenreList = ({ genres }: GenreProps) => {
	return (
		<>
			<div className="uppercase text-xs mt-5 text-p4 font-semibold">Genres</div>
			<ul className="flex items-center space-x-2 text-sm py-2.5">
				{genres?.map((genre) => (
					<li key={genre.id} className="backdrop-blur-xl bg-white/30 px-4 py-1 rounded-xl text-center cursor-pointer hover:bg-p4">
						{genre.name}
					</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
