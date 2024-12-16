import { useContext } from 'react';
import { MediaContext } from '../contexts/MediaProvider';

const useMediaData = () => {
	const context = useContext(MediaContext);

	if (!context) {
		throw new Error('useMediaData should be inside the provider');
	}
	return context;
};

export default useMediaData;
