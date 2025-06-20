import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App.tsx';
import AuthProvider from './contexts/AuthProvider.tsx';
import MediaProvider from './contexts/MediaProvider.tsx';
import SearchDataProvider from './contexts/SearchDataProvider.tsx';
import './index.css';
import { DetailPage, DiscoverPage, Home, Login, ProtectedRoute, Register, SearchPage, UserAccountSetting, UserProfile, Watchlist } from './pages';
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
				path: '/signup',
				element: <Register />,
			},
			{
				path: '/user',
				element: <ProtectedRoute />,
				children: [
					{
						path: '/user/profile',
						element: <UserProfile />,
					},
					{
						path: '/user/profile/setting',
						element: <UserAccountSetting />,
					},
				],
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Toaster />
				<MediaProvider>
					<SearchDataProvider>
						<RouterProvider router={router} />
					</SearchDataProvider>
				</MediaProvider>
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>,
);
