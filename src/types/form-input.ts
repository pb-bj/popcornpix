export type FormInputType = {
	username: string;
	email: string;
	password: string;
};

export type FormInputSignInType = Omit<FormInputType, 'username'>;
