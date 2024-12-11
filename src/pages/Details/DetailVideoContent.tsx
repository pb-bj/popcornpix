import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useSeasonDetails } from '../../hooks/useFetchMedia';
import { SeriesDetails } from '../../types/Series';
import DetailSearchContent from './DetailSearchContent';

type DetailContentProp = {
	seriesData: SeriesDetails;
};

const DetailVideoContent = ({ seriesData }: DetailContentProp) => {
	const seasonID = seriesData.id;
	const totalNumberOfSeasons = seriesData.number_of_seasons;
	const [selectedSeason, setSelectedSeason] = useState(1);
	const { data } = useSeasonDetails(seasonID, selectedSeason);

	console.log('seson data:', data);
	let seasonArray = [];
	for (let i = 1; i <= totalNumberOfSeasons; i++) {
		seasonArray.push(i);
	}

	// console.log(seasonArray);
	const handleSelectedSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedSeason(Number(e.target.value));
	};

	return (
		<>
			<div className="w-full px-3 py-3 text-[13.5px] md:w-4/12 rounded-xl md:rounded-none md:rounded-l-xl shadow-xl backdrop-blur-3xl bg-black/30 h-[250px] sm:h-[400px] md:h-[605px]">
				{/* top menu */}
				<div className="flex justify-between items-center space-x-4 mt-4">
					<div className="flex justify-center items-center rounded-2xl w-[85px] cursor-pointer hover:bg-transparent/10 px-2 py-1.5 text-center">
						<ChevronLeft width={20} />
						<p>Prev</p>
					</div>
					{/* select option */}
					<div>
						<select className="outline-none px-4 py-3 bg-transparent cursor-pointer text-center" value={selectedSeason} onChange={handleSelectedSeason}>
							{seasonArray.map((season) => (
								<option key={season} value={season} className="text-black cursor-pointer">
									Season {season}
								</option>
							))}
						</select>
					</div>
					<div className="flex justify-center items-center rounded-2xl w-[85px] cursor-pointer hover:bg-transparent/20 px-4 py-1.5 text-center">
						<p>Next</p> <ChevronRight width={20} />
					</div>
				</div>
				{/* Search Content Section*/}
				<DetailSearchContent />
				{/* overflown-content */}
				<div className="overflow-y-auto h-[300px] border">
					{data?.episodes.map((episode) => (
						<div key={episode.id}>{episode.name}</div>
					))}
				</div>
			</div>
		</>
	);
};

export default DetailVideoContent;
