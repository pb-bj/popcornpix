type SearchContentProps = {
	setSearchEpisodes: React.Dispatch<React.SetStateAction<string>>;
};

const DetailSearchContent = ({ setSearchEpisodes }: SearchContentProps) => {
	const handleSearchContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchEpisodes(e.target.value);
	};

	return (
		<div className="flex items-center justify-center mx-auto my-4 text-white ">
			<div className="relativr">
				<input
					// className="w-[200px] sm:w-[450px] md:w-[180px] lg:w-[300px] pl-6 py-2.5 outline-none rounded-s-2xl  shadow-xl backdrop-blur-3xl bg-black/30"
					className="w-[200px] sm:w-[440px] md:w-[180px] lg:w-[300px] pl-6 py-2.5 outline-none rounded-2xl  shadow-xl backdrop-blur-3xl bg-black/30"
					type="search"
					placeholder="search"
					onChange={handleSearchContent}
				/>
			</div>
		</div>
	);
};

export default DetailSearchContent;
