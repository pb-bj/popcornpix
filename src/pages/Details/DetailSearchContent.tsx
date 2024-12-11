import { Search } from 'lucide-react';

const DetailSearchContent = () => {
	return (
		<div className="flex items-center justify-center mx-auto my-4 text-white ">
			<div>
				<input
					className="w-[280px] sm:w-[450px] md:w-[180px] lg:w-[300px] pl-6 py-2.5 outline-none rounded-s-2xl  shadow-xl backdrop-blur-3xl bg-black/30"
					type="search"
					placeholder="search"
				/>
			</div>
			<div className="px-4 py-2 rounded-e-2xl backdrop-blur-3xl bg-black/30 cursor-pointer">
				<Search width={18} />
			</div>
		</div>
	);
};

export default DetailSearchContent;
