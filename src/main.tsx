import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import DataProvider from './contexts/DataProvider.tsx';
import './index.css';
import { DetailPage, DiscoverPage, Home, Watchlist } from './pages';
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
				path: '/:type/:id',
				element: <DetailPage />,
			},
			{
				path: '/watchlist',
				element: <Watchlist />,
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* <MovieProvider>
				<SeriesProvider> */}
			<DataProvider>
				<RouterProvider router={router} />
			</DataProvider>
			{/* </SeriesProvider>
			</MovieProvider> */}
		</QueryClientProvider>
	</StrictMode>
);
