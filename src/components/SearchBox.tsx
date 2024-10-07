import { Search } from 'lucide-react';

export default function SearchBox() {
	return (
		<form className="flex justify-center items-center">
			<input
				type="text"
				placeholder="search movies, tv shows..."
				className="w-[220px] border border-r-0  border-gray-300 tracking-tight px-3 py-2 rounded-tl-lg rounded-bl-lg focus:outline-none text-black text-sm"
			/>
			<div className="flex border border-l-0 py-1.5 px-3 rounded-tr-lg rounded-br-lg bg-white text-black ">
				<Search className="w-[20px] cursor-pointer  " />
			</div>
		</form>
	);
}
