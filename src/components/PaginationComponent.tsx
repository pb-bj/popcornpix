import { ChevronsLeft, ChevronsRight } from 'lucide-react';

type PageComponentProps = {
	page: number;
	totalPages: number | undefined;
	setCurrentPage: (page: number) => void;
};

const PaginationComponent = ({ page, totalPages, setCurrentPage }: PageComponentProps) => {
	const handlePreviousPageChange = () => {
		setCurrentPage(page - 1);
	};

	const handleNextPageChange = () => {
		setCurrentPage(page + 1);
	};

	return (
		<div className="flex items-center gap-4">
			<button onClick={handlePreviousPageChange} disabled={page === 1} className="rounded bg-bg2 px-1.5 py-1 disabled:opacity-50">
				<ChevronsLeft width={15} />
			</button>
			<div className="text-sm">
				{page} / {totalPages}
			</div>
			<button onClick={handleNextPageChange} disabled={page === totalPages} className="rounded bg-bg2 px-1.5 py-1 disabled:opacity-50">
				<ChevronsRight width={15} />
			</button>
		</div>
	);
};

export default PaginationComponent;
