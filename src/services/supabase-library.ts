import { supabase } from '@/services/supabase-client';
import { LibraryType, MediaType } from '@/types/Library';

type LibraryResponseType = {
	success: boolean;
	message: string;
};

export const addToUserLibrary = async (userId: string, mediaType: MediaType, mediaId: number, label: string, poster: string): Promise<LibraryResponseType> => {
	const { error } = await supabase.from('users_library').insert([
		{
			user_id: userId,
			media_type: mediaType,
			media_id: mediaId,
			label,
			poster,
		},
	]);

	if (error) throw console.error(error);

	return {
		success: true,
		message: 'Added to watchlist',
	};
};

export const chechUserLibrary = async (userId: string, media_type: MediaType, mediaId: number) => {
	const { data, error } = await supabase.from('users_library').select('id').eq('user_id', userId).eq('media_type', media_type).eq('media_id', mediaId).single();

	return { exist: !!data, error }; // sending true or false based on the data being presented
};

export const getUserLibraryLists = async (userId: string): Promise<LibraryType[]> => {
	const { data, error } = await supabase.from('users_library').select('*').eq('user_id', userId).order('created_at', { ascending: false });

	if (error) throw error;
	return data;
};

export const deleteFromUserLibrary = async (userId: string, mediaType: string, mediaId: number): Promise<LibraryResponseType> => {
	const { error } = await supabase.from('users_library').delete().eq('user_id', userId).eq('media_type', mediaType).eq('media_id', mediaId);

	if (error) throw error;
	return {
		success: true,
		message: 'Deleted Successfully',
	};
};
