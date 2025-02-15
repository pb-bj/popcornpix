import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components';
import { menus } from './constants/menu';

export default function App() {
	const { pathname } = useLocation();

	const hiddenItemsDetailPage = pathname.startsWith('/detail');
	const hiddenItemsLoginPage = pathname.startsWith('/login');
	const hiddenItemsRegisterPage = pathname.startsWith('/register');

	return (
		<>
			{!hiddenItemsDetailPage && !hiddenItemsLoginPage && !hiddenItemsRegisterPage && <Navbar />}
			<main className={`flex flex-col w-full h-screen ${hiddenItemsDetailPage ? '' : 'pt-[40px]'} bg-bg1 text-p3`}>
				{/* larger screen */}
				{!hiddenItemsDetailPage && !hiddenItemsLoginPage && !hiddenItemsRegisterPage && (
					<div className="hidden sm:mt-5 sm:h-full sm:flex sm:flex-col sm:fixed sm:items-center sm:top-10 sm:bottom-0 bg-bg1 z-10">
						<ul className="sm:pt-5 sm:pl-2">
							{menus.map((menu) => {
								const isActive = pathname === menu.route;
								return (
									<li key={menu.id} className="sm:px-1.5 sm:mt-5 sm:py-2">
										<Link
											to={menu.route}
											className={`sm:flex sm:flex-col sm:items-center sm:space-y-1 sm:w-full sm:h-full sm:text-center text-p7 cursor-pointer ${
												isActive ? 'text-white' : 'text-p7'
											}`}
										>
											<menu.icon />
											<p className="text-[11px] font-medium">{menu.title}</p>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				)}
				<div
					className={`overflow-auto pb-[75px] ${
						hiddenItemsDetailPage && hiddenItemsLoginPage && hiddenItemsRegisterPage
							? 'w-full h-screen bg-bg1'
							: 'px-3 mt-9 sm:px-11 sm:ml-10 sm:mt-7 '
					} `}
				>
					<Outlet />
				</div>
			</main>
			{/*bottom navbar */}
			{!hiddenItemsDetailPage && !hiddenItemsLoginPage && !hiddenItemsRegisterPage && (
				<nav className="fixed bottom-0 left-0 z-50 w-full h-[75px] bg-bg1 px-6 shadow-lg sm:hidden">
					<ul className="flex items-baseline space-y-2 justify-around">
						{menus.map((menu) => {
							const isActive = pathname === menu.route;
							return (
								<li key={menu.id}>
									<Link
										to={menu.route}
										className={`flex flex-col items-center text-center px-3.5 py-2 cursor-pointer ${isActive ? 'text-white' : 'text-p7'}`}
									>
										<menu.icon />
										<span className="text-[11px] ">{menu.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			)}
		</>
	);
}
