import useAuth from '@/hooks/useAuth';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Popcornpix from '../assets/image.png';
import useSearchDetail from '../hooks/useSearchDetail';
import SearchBox from './SearchBox';

export default function Navbar() {
	const { user } = useAuth();
	const { setSearchDetail } = useSearchDetail();

	return (
		<>
			<header className="fixed top-0 left-0 z-50 w-full overflow-hidden bg-bg1">
				<nav className="2xl:container 2xl:mx-auto flex items-center justify-between px-2 py-3 md:px-6 shadow-sm z-10">
					<div>
						<Link to={'/'} className="sm:flex sm:gap-2 sm:items-center">
							<img className="w-[36px]" src={Popcornpix} alt="popcorn" title="popcornpix" />
							<h3 className="hidden sm:block sm:font-bold">Popcornpix</h3>
						</Link>
					</div>
					{/* Search content */}
					<div>
						<SearchBox setSearchDetail={setSearchDetail} />
					</div>
					{/* User profile */}
					<div className="cursor-pointer text-p7">
						{/* <User className="w-8" /> */}
						{user?.email === undefined ? (
							<Link to={'/login'}>
								<User />
							</Link>
						) : (
							<Link to={'/user/profile'}>
								<img src={`${user.user_metadata.avatar_url}`} className="rounded-full" width={40} />
							</Link>
						)}
					</div>
				</nav>
			</header>
		</>
	);
}
