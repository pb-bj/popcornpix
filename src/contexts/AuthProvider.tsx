import { supabase } from '@/services/supabase-client';
import { User } from '@supabase/supabase-js';
import { createContext, ReactNode, useEffect, useState } from 'react';

type AuthContextType = {
	user: User | null;
	loading: boolean;
	signOut: () => Promise<void>;
	sendMagicLink: (email: string) => Promise<void>;
};

type AuthProviderType = {
	children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderType) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getUser = async () => {
			const { data, error } = await supabase.auth.getUser();

			if (error) {
				console.error('error getting users');
			}
			setUser(data.user ?? null);
			setLoading(false);
		};

		getUser();

		// for session updated!
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
		});

		return () => subscription.unsubscribe();
	}, []);

	const signOut = async () => {
		await supabase.auth.signOut();
		setUser(null);
	};

	const sendMagicLink = async (email: string) => {
		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: `http://localhost:5173`,
			},
		});

		if (error) {
			console.error(error);
		}
	};

	return <AuthContext.Provider value={{ user, loading, signOut, sendMagicLink }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
