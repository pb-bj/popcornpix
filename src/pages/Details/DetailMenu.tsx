import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DetailMenu = () => {
	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate(-1);
	};

	return (
		<nav className="relative w-full text-p7 hover:text-p2 2xl:container 2xl:mx-auto flex items-center justify-between pb-2 shadow-sm z-10 ">
			<div>
				<div className="flex cursor-pointer" onClick={handleNavigation}>
					<ChevronLeft /> <span>back</span>
				</div>
			</div>
		</nav>
	);
};

export default DetailMenu;
