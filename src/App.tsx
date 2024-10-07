import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

export default function App() {
	return (
		<>
			<Navbar />
			<main className="flex w-full pt-[64px]  bg-gray-100 text-black min-h-screen">
				<div className="hidden bg-gray-400 md:flex">
					<ul className="flex-col">
						<li>Board</li>
						<li>Discover</li>
						<li>Library</li>
					</ul>
				</div>
				<div className="flex-1 overflow-auto">
					<Outlet />
				</div>
			</main>
			{/* bottom navbar */}
			<nav className="fixed bottom-0 left-0 z-50  md:hidden bg-green-600 text-white w-full">
				<ul className="flex justify-around p-2">
					<li>Board</li>
					<li>Discover</li>
					<li>Library</li>
				</ul>
			</nav>
		</>
	);
}
