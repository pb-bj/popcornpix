import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuth from '@/hooks/useAuth';
import { FormInputType } from '@/types/form-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as yup from 'yup';
import Popcornpix from '../../assets/image.png';

const validationSchema = yup.object().shape({
	username: yup.string().required('* Username is required'),
	email: yup.string().required('* Email is required').email('* Email is invalid'),
	password: yup.string().min(6, '* Password must be at least 6 characters').required('* Password is required'),
});

const Register = () => {
	const { signUpNewUser, signWithGoogle } = useAuth();
	let navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputType>({
		resolver: yupResolver(validationSchema),
	});

	const handleSignInWithGoogle = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		reset();
		await signWithGoogle();
	};

	const onSubmit: SubmitHandler<FormInputType> = async (data) => {
		try {
			const { username, email, password } = data;

			if (email && password) {
				await signUpNewUser(username, email, password);
				navigate('/login');
			}
		} catch (error: any) {
			toast.error(error.message, {
				position: 'top-right',
				style: { backgroundColor: 'red', color: 'white', borderStyle: 'none' },
			});
		}
	};

	return (
		<section className="flex flex-col items-center justify-center mx-auto">
			<div className="text-center">
				<Link to={'/'} className="flex gap-1 items-center">
					<img className="w-[36px]" src={Popcornpix} alt="popcorn" title="popcornpix" />
					<h3 className="font-bold">Popcornpix</h3>
				</Link>
			</div>
			<Card className="border-none outline-none shadow-none bg-bg1 text-white">
				<CardHeader className="text-2xl sm:w-[300px] md:w-[350px]">
					<CardTitle>Sign up </CardTitle>
				</CardHeader>
				<CardContent className="mt-5">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid gap-6">
							<div className="flex flex-col gap-4">
								<Button
									variant="outline"
									className="w-full p-5 flex items-center justify-center text-black"
									onClick={handleSignInWithGoogle}
								>
									<FcGoogle />
									<div>Sign in with Google</div>
								</Button>
							</div>
							<div className="relative text-center text-sm ">
								<span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with email</span>
							</div>
							<div className="grid gap-6">
								<div className="grid gap-2">
									<Label htmlFor="email">Username</Label>
									<Input className="p-5 border-gray-500" {...register('username')} id="username" type="text" autoComplete="off" />
									<span className="text-xs text-red-400">{errors.username?.message}</span>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input className="p-5 border-gray-500" {...register('email')} id="email" type="email" autoComplete="off" />
									<span className="text-xs text-red-400">{errors.email?.message}</span>
								</div>
								<div className="grid gap-2">
									<div className="flex items-center">
										<Label htmlFor="password">Password</Label>
									</div>
									<Input
										className="p-5 border-gray-500"
										{...register('password')}
										id="password"
										type="password"
										placeholder="6+ characters"
										autoComplete="off"
									/>
									<span className="text-xs text-red-400">{errors.password?.message}</span>
								</div>
								<Button type="submit" variant="outline" className="w-full text-black">
									Sign Up
								</Button>
							</div>
							<div className="text-center text-sm text-gray-500">
								Already have an account?{' '}
								<Link to={'/login'} className="underline underline-offset-4 text-white">
									Sign in
								</Link>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Register;
