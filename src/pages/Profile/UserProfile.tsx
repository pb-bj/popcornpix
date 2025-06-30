import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';

const UserProfile = () => {
	const { user, signOut, isGoogleAuthProvider } = useAuth();

	const userProfileInitial = user?.email ? user?.email?.charAt(0).toUpperCase() : null;

	return (
		<section className="px-4 py-6">
			<div className="flex  items-center justify-center gap-x-8 mx-auto">
				<div>
					{isGoogleAuthProvider && user?.user_metadata.avatar_url ? (
						<img src={user?.user_metadata.avatar_url} className="rounded-full w-20 h-20" />
					) : (
						<p className="border bg-white text-black rounded-full text-3xl p-2 w-20 h-20 flex items-center justify-center font-semibold">{userProfileInitial}</p>
					)}
				</div>
				<div className="flex flex-col">
					<p className="my-3 ">{user?.email}</p>
					<div className="flex gap-x-2">
						<Button onClick={signOut} className="backdrop-blur-md bg-white/5 hover:bg-transparent/20 text-sm rounded-full">
							Logout
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserProfile;
