import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import Popcornpix from '../../assets/image.png';

const Login = () => {
	return (
		<section className="flex flex-col items-center justify-center mx-auto overflow-y-hidden">
			<div className="text-center">
				<Link to={'/'} className="flex gap-1 items-center">
					<img className="w-[36px]" src={Popcornpix} alt="popcorn" title="popcornpix" />
					<h3 className="font-bold">Popcornpix</h3>
				</Link>
			</div>
			<Card className="border-none outline-none bg-bg1 text-white">
				<CardHeader className="text-center text-2xl sm:w-[300px] md:w-[350px]">
					<CardTitle>Welcome Back</CardTitle>
					{/* <CardDescription className="text-xs">Login to your Popcornpix account</CardDescription> */}
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid gap-6">
							<div className="flex flex-col gap-4">
								<Button variant="outline" className="w-full text-black">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
											fill="currentColor"
										/>
									</svg>
									Login with Google
								</Button>
							</div>
							<div className="relative text-center text-sm ">
								<span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
							</div>
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
									Login
								</Button>
							</div>
							<div className="text-center text-sm">
								Don&apos;t have an account?{' '}
								<Link to={'/register'} className="underline underline-offset-4">
									Sign up
								</Link>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Login;
