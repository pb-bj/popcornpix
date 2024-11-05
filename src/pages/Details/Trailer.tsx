// import { useVideos } from '../../hooks/useFetchMedia';
// import { EndpointProps } from '../../services/api';

// type TrailerProps = {
// 	trailerId: number;
// 	trailerType: EndpointProps;
// };

// const Trailer = ({ trailerType, trailerId }: TrailerProps) => {
// 	const { data } = useVideos(trailerType, trailerId);

// 	const videoType = data?.id === trailerId ? data?.results.filter((video) => video.type === 'Trailer') : [];
// 	const videoKey = videoType.map((video) => video.key);
// 	return (
// 		<div className="absolute inset-0 flex items-center justify-center z-[50] ">
// 			{videoKey.length > 0 && (
// 				<iframe
// 					className="w-[950px] h-[500px]"
// 					// width="560"
// 					// height="315"
// 					src={`https://www.youtube.com/embed/${videoKey[0]}`}
// 					// frameBorder="0"
// 					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 					allowFullScreen
// 					title="Embedded youtube"
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default Trailer;

import { X } from 'lucide-react';
import { useVideos } from '../../hooks/useFetchMedia';
import { EndpointProps } from '../../services/api';

type TrailerProps = {
	trailerId: number;
	trailerType: EndpointProps;
	onClose: () => void;
};

const Trailer = ({ trailerType, trailerId, onClose }: TrailerProps) => {
	const { data } = useVideos(trailerType, trailerId);
	const videoType = data?.id === trailerId ? data?.results.filter((video) => video.type === 'Trailer') : [];
	const videoKey = videoType.map((video) => video.key);

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
			<div className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-video">
				{/* Close Button */}
				<button onClick={onClose} className="absolute top-3 right-3 text-white bg-black  p-1 rounded-full">
					<X size={34} />
				</button>
				{videoKey.length > 0 && (
					<iframe
						className="w-full h-full rounded-md"
						src={`https://www.youtube.com/embed/${videoKey[0]}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Embedded YouTube"
					/>
				)}
			</div>
		</div>
	);
};

export default Trailer;
