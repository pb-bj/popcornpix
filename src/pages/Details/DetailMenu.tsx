import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import { UserProfile } from '../../components';

const DetailMenu = () => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate(-1);
	};

	return (
		<nav className="relative w-full text-p7 hover:text-p2 2xl:container 2xl:mx-auto flex items-center justify-between px-2 md:px-4 py-3 shadow-sm z-10 ">
			<div>
				<div className="flex cursor-pointer" onClick={handleNavigation}>
					<ChevronLeft /> <span>back</span>
				</div>
			</div>
			{/* <div>
				<UserProfile />
			</div> */}
		</nav>
	);
};

export default DetailMenu;
