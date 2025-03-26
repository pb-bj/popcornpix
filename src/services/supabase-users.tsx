import useAuth from '@/hooks/useAuth';
import { supabase } from './supabase-client';

export const fetchUserProfile = async () => {
	const { user } = useAuth();
	try {
		if (!user) return null;

		const { data, error } = await supabase.from('users').select('*').single();
		if (error) throw error;

		return data;
	} catch (error) {
		console.error('Failed to get users', error);
	}
};

// taking data from the google auth then insert to table and default value;
// export const insertUserProfile = async (user: User) => {
// 	try {
// 		if (!user) return;

// 		const { data, error } = await supabase.from('users').upsert({
// 			id: user.user_metadata.id,
// 			username: user.user_metadata.full_name || 'user123',
// 			avatar_url: user.user_metadata.avatar_url || 'https://web.stremio.com/images/default_avatar.png',
// 		});

// 		if (error) throw error;
// 		return data;
// 	} catch (error) {
// 		console.error('Failed to insert user detail', error);
// 	}
// };
