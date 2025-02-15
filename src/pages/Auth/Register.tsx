import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import Popcornpix from '../../assets/image.png';

const Register = () => {
	return (
		<section className="flex flex-col items-center justify-center mx-auto">
			<div className="text-center">
				<Link to={'/'} className="flex gap-1 items-center">
					<img className="w-[36px]" src={Popcornpix} alt="popcorn" title="popcornpix" />
					<h3 className="font-bold">Popcornpix</h3>
				</Link>
			</div>
			<Card className="border-none outline-none bg-bg1 text-white">
				<CardHeader className="text-2xl sm:w-[300px] md:w-[350px]">
					<CardTitle>Get Started</CardTitle>
					<CardDescription className="text-xs">Let's create your account </CardDescription>
				</CardHeader>
				<CardContent className="mt-5">
					<form>
						<div className="grid gap-6">
							<div className="grid gap-6">
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" placeholder="m@example.com" required />
								</div>
								<div className="grid gap-2">
									<div className="flex items-center">
										<Label htmlFor="password">Password</Label>
									</div>
									<Input id="password" type="password" required />
								</div>
								<Button type="submit" variant="outline" className="w-full text-black">
									Sign Up
								</Button>
							</div>
							<div className="text-center text-sm">
								Already have an account?{' '}
								<Link to={'/login'} className="underline underline-offset-4">
									Login
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
