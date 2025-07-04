import { LucideIcon } from 'lucide-react';

type ButtonProps = {
	label: string;
	onClick: () => void;
	Icon: LucideIcon;
	disabled?: boolean;
};

const Button = ({ label, onClick, Icon, disabled }: ButtonProps) => {
	return (
		<button
			className="w-[220px] flex items-center justify-center gap-2 backdrop-blur-md bg-white/5 hover:bg-transparent/20 text-sm px-2 py-3.5 rounded-full"
			onClick={onClick}
			disabled={disabled}
		>
			<Icon />
			{label}
		</button>
	);
};

export default Button;
