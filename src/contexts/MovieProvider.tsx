// import { useQuery } from '@tanstack/react-query';
// import { createContext, ReactNode } from 'react';
// import { getPopularMovies } from '../services/api';
// import { PopularMovieResponse } from '../types';

// type MovieContextProps = {
// 	children: ReactNode;
// };

// type MovieContextType = {
// 	data: PopularMovieResponse | undefined;
// 	isLoading: boolean;
// 	error: any;
// };

// export const MovieContext = createContext<MovieContextType | undefined>(undefined);

// const MovieProvider = ({ children }: MovieContextProps) => {
// 	const { data, isLoading, error } = useQuery({
// 		queryKey: ['popularMovies'],
// 		queryFn: getPopularMovies,
// 	});
// 	return <MovieContext.Provider value={{ data, isLoading, error }}>{children}</MovieContext.Provider>;
// };

// export default MovieProvider;
