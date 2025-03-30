import { supabase } from '@/services/supabase-client';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

type AuthResponse = {
	user: User | null;
	session: Session | null;
};

type AuthContextType = {
	user: User | null;
	loading: boolean;
	signUpNewUser: (email: string, password: string) => Promise<AuthResponse>;
	signInUser: (email: string, password: string) => Promise<AuthResponse>;
	signWithGoogle: () => Promise<void>;
	signOut: () => Promise<void>;
};

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
	signUpNewUser: async () => ({ user: null, session: null }),
	signInUser: async () => ({ user: null, session: null }),
	signWithGoogle: async () => {},
	signOut: async () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const signUpNewUser = async (email: string, password: string) => {
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
			});
			if (error) throw error;

			if (data.user) {
				console.log(data.user.id);
				setUser(data.user);
			}
			toast.success('Account Created! Check your email to verify');

			return { user: data.user, session: data.session };
		} catch (error) {
			console.error('Signup error', error);
			throw error;
		}
	};

	useEffect(() => {
		const fetchSession = async () => {
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession(); // return promise so need async function or use .then
			if (error) {
				console.error('Failed to fetch session');
			}

			setUser(session?.user ?? null); // session can be null.
			setLoading(false);
		};

		fetchSession();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_IN' && session?.user) {
				setUser(session?.user);
				// try {
				// 	await insertUserProfile(session.user.id);
				// } catch (error) {
				// 	console.log('Profile creation failed', error);
				// }
				// await insertUserProfile(session?.user.id);
			} else if (event === 'SIGNED_OUT') {
				setUser(null);
			}
		});

		return () => {
			subscription?.unsubscribe(); // to prevent memory leaks
		};
	}, []);

	const signInUser = async (email: string, password: string) => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({ email, password });
			if (error) throw error;

			setUser(data.user);
			toast.success('Sign in successfull', {
				position: 'top-right',
				style: { backgroundColor: '#22c55e', color: '#ffffff', borderStyle: 'none' },
			});
			return { user: data.user, session: data.session };
		} catch (error: any) {
			throw error;
		}
	};

	const signWithGoogle = async () => {
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
			});

			if (error) throw error;
		} catch (error: any) {
			toast.error(error.message);
			throw error;
		}
	};

	const signOut = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			setUser(null);
			setLoading(false);
		} catch (error: any) {
			toast.error(error.message);
			throw error;
		}
	};

	return (
		<AuthContext.Provider value={{ user, loading, signUpNewUser, signInUser, signWithGoogle, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
