import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserProfile } from '../../components';

const DetailMenu = () => {
	return (
		<nav className="relative w-full text-p7 hover:text-p2 2xl:container 2xl:mx-auto flex items-center justify-between px-2 md:px-4 py-3 shadow-sm z-10 ">
			<div>
				<Link to={'/'} className="flex">
					<ChevronLeft /> <span>back</span>
				</Link>
			</div>
			<div>
				<UserProfile />
			</div>
		</nav>
	);
};

export default DetailMenu;
