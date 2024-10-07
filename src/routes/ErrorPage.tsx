import { useRouteError } from 'react-router-dom';

type RouterErrorType = {
	statusText: string;
	message: string;
};

export default function ErrorPage() {
	const error = useRouteError() as RouterErrorType;

	return (
		<>
			{error.statusText} {error.message}
		</>
	);
}
