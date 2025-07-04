import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchBoxProps = {
	setSearchDetail: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBox({ setSearchDetail }: SearchBoxProps) {
	const navigate = useNavigate();

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchDetail(e.target.value);
	};

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		navigate('/search');
	};

	return (
		<form className="flex justify-center items-center" onClick={handleSearchSubmit}>
			<div className="relative">
				<input
					type="text"
					placeholder="search movies, tv shows..."
					className="w-[175px] sm:w-[300px] h-[41px] tracking-normal px-3 py-1.5 sm:px-6 sm:py-3 bg-bg2 text-p2 rounded-tl-2xl rounded-bl-2xl focus:outline-none text-[12.5px] shadow-md"
					onChange={handleSearch}
				/>
			</div>
			<button type="button" className="flex items-center justify-center h-[41px] border border-l-0 py-1.5 px-3 rounded-tr-2xl border-none rounded-br-2xl bg-bg2 text-p2">
				<Search className="w-[18px] h-[18px] cursor-pointer" />
			</button>
		</form>
	);
}
