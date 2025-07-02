import { LucideIcon } from 'lucide-react';

type ButtonProps = {
	label: string;
	onClick: () => void;
	Icon: LucideIcon;
	disabled?: boolean;
};

const Button = ({ label, onClick, Icon, disabled }: ButtonProps) => {
	return (
		<button className="flex items-center gap-2 backdrop-blur-md bg-white/5 hover:bg-transparent/20 text-sm px-6 py-3.5 rounded-full" onClick={onClick} disabled={disabled}>
			<Icon />
			{label}
		</button>
	);
};

export default Button;
