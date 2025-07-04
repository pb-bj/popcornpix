import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FilterSelectProps = {
	value: string;
	onHandleMedia: (value: string) => void;
	placeholder: string;
	items: { id: string; title: string }[];
};

const FilterSelect = ({ value, onHandleMedia, placeholder, items }: FilterSelectProps) => {
	return (
		<>
			<Select value={value} onValueChange={onHandleMedia}>
				<SelectTrigger className="w-[180px] border-none rounded-full bg-bg4 text-xs">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent side="bottom" align="start" avoidCollisions={false} position="item-aligned" className="shadow-xl cursor-pointer border-none">
					{items.map((item) => (
						<SelectItem key={item.id} value={item.title} className="cursor-pointer text-xs">
							{item.title}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	);
};

export default FilterSelect;
