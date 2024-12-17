import { createContext, useState } from 'react';

type SearchDataProps = {
	children: React.ReactNode;
};

type SearchDataContextType = {
	searchDetail: string;
	setSearchDetail: React.Dispatch<React.SetStateAction<string>>;
	resetSearchDetail: () => void;
};

export const SearchDataContext = createContext<SearchDataContextType | null>(null);

const SearchDataProvider = ({ children }: SearchDataProps) => {
	const [searchDetail, setSearchDetail] = useState('');

	const resetSearchDetail = () => {
		setSearchDetail('');
	};

	return <SearchDataContext.Provider value={{ searchDetail, setSearchDetail, resetSearchDetail }}>{children}</SearchDataContext.Provider>;
};

export default SearchDataProvider;
