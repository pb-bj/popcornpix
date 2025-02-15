import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import MediaProvider from './contexts/MediaProvider.tsx';
import SearchDataProvider from './contexts/SearchDataProvider.tsx';
import './index.css';
import { DetailPage, DiscoverPage, Home, Login, Register, SearchPage, Watchlist } from './pages';
import { ErrorPage } from './routes';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/discover',
				element: <DiscoverPage />,
			},
			{
				path: '/detail/:type/:id',
				element: <DetailPage />,
			},
			{
				path: '/watchlist',
				element: <Watchlist />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<MediaProvider>
				<SearchDataProvider>
					<RouterProvider router={router} />
				</SearchDataProvider>
			</MediaProvider>
		</QueryClientProvider>
	</StrictMode>
);
