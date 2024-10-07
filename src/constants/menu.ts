import { Compass, House, LibraryBig } from 'lucide-react';
import { MenuType } from '../types';

export const menus: MenuType[] = [
	{
		id: 'home',
		title: 'Board',
		icon: House,
	},
	{
		id: 'discover',
		title: 'Discover',
		icon: Compass,
	},
	{
		id: 'watchlist',
		title: 'Watchlist',
		icon: LibraryBig,
	},
];
