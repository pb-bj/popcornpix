import { Link } from 'react-router-dom';
import Popcornpix from '../assets/popcornpixLogo.png';
import SearchBox from './SearchBox';
import UserProfile from './UserProfile';

export default function Navbar() {
	return (
		<>
			<header className="fixed top-0 left-0 z-50 w-full overflow-hidden bg-blue-600 text-white">
				<nav className="lg:container lg:mx-auto flex items-center justify-between px-2 py-3 shadow-sm z-10">
					<div>
						<Link to={'/'}>
							<img className="w-[36px]" src={Popcornpix} alt="popcorn" title="popcornpix" />
						</Link>
					</div>
					{/* Search content */}
					<div>
						<SearchBox />
					</div>
					{/* User profile  */}
					<div className="cursor-pointer">
						<UserProfile />
					</div>
				</nav>
			</header>
			<div>This is bottom</div>
		</>
	);
}
