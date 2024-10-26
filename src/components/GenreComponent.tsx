type GenreProps = {
	name: string;
};

const GenreComponent = ({ name }: GenreProps) => {
	return <li className="bg-p6 px-4 py-1 rounded-xl text-center cursor-pointer hover:bg-p4">{name}</li>;
};

export default GenreComponent;
