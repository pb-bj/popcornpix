import { Cast } from '../types/CastCredit';
import { Genre } from '../types/CommonDetail';

type InfoPanelProps<T extends Genre | Cast> = {
	label: string;
	items: T[] | undefined;
	isCast: boolean;
};

const InfoPanel = <T extends Genre | Cast>({ label, items, isCast }: InfoPanelProps<T>) => {
	const renderData = isCast ? items?.slice(0, 5) : items;

	return (
		<>
			<div className="uppercase text-xs mt-2 text-p4 font-semibold">{label}</div>
			<ul className="flex flex-wrap items-baseline space-x-2 text-xs py-2.5">
				{renderData?.map((item) => {
					return (
						<li key={item.id} className="mb-3.5 backdrop-blur-md bg-white/5 shadow-md px-4 py-1 rounded-xl text-center cursor-pointer hover:bg-p4">
							{item.name}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default InfoPanel;
