import loginImg from '../assets/login.png';

export default function Watchlist() {
	return (
		<section className="px-4 py-6 ">
			<div className="w-full mt-[50px] flex flex-col gap-y-3 items-center justify-center mx-auto">
				<img src={loginImg} width={150} />
				<h3>Library is only available for logged users</h3>
			</div>
		</section>
	);
}
