import { Compass, House, LibraryBig } from 'lucide-react';

export const menus = [
	{
		id: 'home',
		title: 'Board',
		icon: House,
		route: '/',
	},
	{
		id: 'discover',
		title: 'Discover',
		icon: Compass,
		route: '/discover',
	},
	{
		id: 'watchlist',
		title: 'Watchlist',
		icon: LibraryBig,
		route: '/watchlist',
	},
	// {
	// 	id: 'account',
	// 	title: 'Account',
	// 	icon: User,
	// 	route: '/user',
	// },
];
