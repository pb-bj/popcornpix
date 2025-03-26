import useAuth from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
	const navigate = useNavigate();
	const { user, signOut } = useAuth();

	if (!user?.id) {
		navigate('/login');
		return;
	}

	return (
		<section className="px-4 py-6 ">
			<div className="flex flex-col items-center justify-center mx-auto">
				<img src={`${user.user_metadata.avatar_url}`} width={80} className="rounded-full" />
				<p className="my-3">{user.user_metadata.full_name || user.user_metadata.username}</p>
				<button className="backdrop-blur-md bg-white/5 hover:bg-transparent/20 text-sm px-6 py-3.5 rounded-full" onClick={signOut}>
					Sign out
				</button>
			</div>
		</section>
	);
};

export default UserProfile;
