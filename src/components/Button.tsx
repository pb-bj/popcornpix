import { LucideIcon } from 'lucide-react';

type ButtonProps = {
	label: string;
	onClick: () => void;
	Icon: LucideIcon;
};

const Button = ({ label, onClick, Icon }: ButtonProps) => {
	return (
		<button
			className="flex items-center gap-2 backdrop-blur-3xl bg-white/10 hover:bg-transparent/20 text-sm px-6 py-3.5 rounded-full"
			onClick={onClick}
		>
			<Icon />
			{label}
		</button>
	);
};

export default Button;
