import { supabase } from './supabase-client';

type UserProfileType = {
	user_id: string;
	username?: string | null;
	avatar_url: string;
	created_at: string | Date;
	updated_at: string | Date;
};

export const getUserProfile = async (userId: string): Promise<UserProfileType> => {
	try {
		const { data, error } = await supabase.from('users_profile').select('*').eq('user_id', userId).single();
		if (error) throw error;

		return data;
	} catch (error) {
		console.error('Failed to get users', error);
		throw error;
	}
};

export const insertUserProfile = async (userId: string) => {
	try {
		const { data, error } = await supabase
			.from('users_profile')
			.insert({
				user_id: userId,
			})
			.select()
			.single();

		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Failed to insert user detail', error);
		throw error;
	}
};

export const updateUserProfile = async (userId: string, username: string | null, avatar_url: string) => {
	try {
		const { data, error } = await supabase
			.from('users_profile')
			.update({
				user_id: userId,
				username,
				avatar_url,
				updated_at: new Date().toISOString(),
			})
			.eq('user_id', userId)
			.select()
			.single();

		if (error) throw error;
		return data;
	} catch (error) {
		console.error('Failed to update user', error);
	}
};

export const deleteUserProfile = async (userId: string) => {
	try {
		const { error } = await supabase.from('users_profile').delete().eq('user_id', userId);

		if (error) throw error;
		console.log('deleted user');
	} catch (error) {
		console.error('Failed to delete user profile', error);
		throw error;
	}
};

// export const upsertUserProfile = async (user: User) => {
// 	try {
// 		if (!user) return;

// 		// Fetch existing user data before upsert
// 		const { data: existingUser } = await supabase.from('users').select('username').eq('id', user.id).single();

// 		// Preserve existing username, fallback to metadata or default
// 		const username = existingUser?.username || user.user_metadata.full_name || 'user123';

// 		const { data, error } = await supabase.from('users').upsert({
// 			id: user.id,
// 			username,
// 			avatar_url: user.user_metadata.avatar_url || 'https://web.stremio.com/images/default_avatar.png',
// 		});

// 		if (error) throw error;
// 		return data;
// 	} catch (error) {
// 		console.error('Failed to insert user detail', error);
// 	}
// };
