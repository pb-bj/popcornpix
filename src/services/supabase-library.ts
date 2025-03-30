import { supabase } from '@/services/supabase-client';

type MediaType = 'movie' | 'tv';

export type UserLibraryItem = {
	id: string;
	user_id: string;
	media_type: MediaType;
	media_id: number;
	created_at: string;
};

export const addToUserLibrary = async (userId: string, mediaType: MediaType, mediaId: number) => {
	const { data, error } = await supabase
		.from('users_library')
		.insert([{ user_id: userId, media_type: mediaType, media_id: mediaId }]);
	if (error) throw error;
	return data;
};

export const fetchUserLibrary = async (): Promise<UserLibraryItem[]> => {
	const { data, error } = await supabase.from('users_library').select('*').order('created_at', { ascending: false });

	if (error) throw error;
	return data || [];
};

export const deleteFromUserLibrary = async (libraryItemId: string) => {
	const { data, error } = await supabase.from('users_library').delete().eq('id', libraryItemId);

	if (error) throw error;
	return data;
};
