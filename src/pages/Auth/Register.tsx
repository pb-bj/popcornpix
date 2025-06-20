import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useAuth from '@/hooks/useAuth';
import { FormInputType } from '@/types/form-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthError } from '@supabase/supabase-js';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import * as yup from 'yup';
import Popcornpix from '../../assets/image.png';

const validationSchema = yup.object().shape({
	email: yup.string().required('Please enter an email address for signup').email('Please enter a valid email address for signup'),
});

const Register = () => {
	const { sendMagicLink, loading } = useAuth();
	const [transitionToEmail, setTransitionToEmail] = useState(false);
	const [emailAddress, setEmailAddress] = useState('');
	const [checkEmailSend, setCheckEmailSend] = useState(false);
	const [isDisabled, setIsDisable] = useState(false);

	const handleClickOnEmail = () => setTransitionToEmail(!transitionToEmail);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormInputType>({
		resolver: yupResolver(validationSchema),
	});

	// const handleSignInWithGoogle = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	// 	e.preventDefault();
	// 	// await signWithGoogle();
	// 	// reset();
	// 	console.log('sign');
	// };
	if (loading) return <p>Loading...</p>;

	const onSubmit: SubmitHandler<FormInputType> = async (data) => {
		try {
			const { email } = data;

			if (email) {
				await sendMagicLink(email);
				setIsDisable(true);
				setEmailAddress(emailAddress);
				setCheckEmailSend(true);
				reset();
			}
		} catch (error) {
			const authError = error as AuthError;
			toast.error(authError.message || 'Failed to sign up', {
				position: 'top-right',
				style: { backgroundColor: '#ef4444', color: '#ffffff', borderStyle: 'none' },
			});
		}
	};

	return (
		<section className="w-full flex flex-col items-center justify-center mx-auto mt-16">
			<div className="text-center mb-6">
				<Link to={'/'} className="flex items-center justify-center">
					<img className="w-[58px]" src={Popcornpix} alt="popcorn" title="popcornpix" />
				</Link>
			</div>
			<h3 className="mb-6 font-semibold text-[18px]">
				{transitionToEmail && checkEmailSend ? 'Check your email' : transitionToEmail && !checkEmailSend ? "What's your email address?" : 'Create your account'}
			</h3>
			<form className={`flex flex-col gap-y-6 w-full ${checkEmailSend ? 'max-w-[500px]' : 'max-w-[288px]'}`} onSubmit={handleSubmit(onSubmit)}>
				{!transitionToEmail && (
					<>
						<Button className="w-full h-[48px] px-4 text-[#1E2025] bg-gray-200 text-[14px] hover:bg-gray-50">Continue with google</Button>
						<Button onClick={handleClickOnEmail} className="w-full h-[48px] px-4 text-[#1E2025] bg-gray-200 text-[14px] hover:bg-gray-50">
							Continue with email
						</Button>
						<div className="text-center text-sm text-gray-500">
							Already have an account?{' '}
							<Link to={'/login'} className="underline underline-offset-4 text-white">
								Log in
							</Link>
						</div>
					</>
				)}
				{transitionToEmail && !checkEmailSend && (
					<>
						<Input
							type="email"
							{...register('email')}
							value={emailAddress}
							onChange={(e) => setEmailAddress(e.target.value)}
							id="email"
							className="w-full h-[48px] text-[14px] px-4 border-gray-600 hover:border-gray-300 transition delay-75"
							placeholder="Enter your email address..."
							autoComplete="off"
							disabled={isDisabled}
						/>
						{errors?.email && <span className="text-xs text-red-400 font-semibold">{errors.email?.message}</span>}
						<Button disabled={isDisabled} className={`w-full h-[48px] px-4 text-[#1E2025] ${isDisabled ? 'bg-gray-500' : 'bg-gray-200'} text-[14px] hover:bg-white transition delay-75`}>
							Continue with email
						</Button>
						<p
							onClick={() => {
								setTransitionToEmail(false);
								setCheckEmailSend(false);
								setEmailAddress('');
							}}
							className="cursor-pointer underline text-center"
						>
							Back to login
						</p>
					</>
				)}

				{transitionToEmail && checkEmailSend && (
					<div className="w-full text-gray-400 text-[13px] text-center">
						<p className="mb-1">We've sent you a temporary login link.</p>
						<p>
							Please check your inbox at <span className="text-gray-100">{emailAddress}</span>
						</p>
					</div>
				)}
			</form>
		</section>
	);
};

export default Register;
