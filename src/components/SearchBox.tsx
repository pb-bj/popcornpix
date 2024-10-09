import { Search } from 'lucide-react';

export default function SearchBox() {
	return (
		<form className="flex justify-center items-center   ">
			<input
				type="text"
				placeholder="search movies, tv shows..."
				className="w-[200px] sm:w-[300px] h-[41px] border border-r-0  border-none tracking-normal px-6 py-3 bg-bg2 text-p2 rounded-tl-2xl rounded-bl-2xl focus:outline-none text-[12.5px]"
			/>
			<div className="h-[41px] flex border border-l-0 py-1.5 px-3 rounded-tr-2xl border-none rounded-br-2xl bg-bg2 text-p2">
				<Search className="w-[20px]  cursor-pointer  " />
			</div>
		</form>
	);
}
