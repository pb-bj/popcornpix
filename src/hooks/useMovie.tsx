import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieProvider';

const useMovie = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error('useMovies should be within movie-context!');
	}
	return context;
};

export default useMovie;
