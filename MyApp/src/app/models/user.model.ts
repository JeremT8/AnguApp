export interface UserDataInterface {
	userName: string;
	login: string;
	password?: string;
}

export interface UserInterface extends UserDataInterface {
	isAuthentificated?: boolean;
	greet(): string;
}


export class User implements UserInterface {
	userName: string = 'Invité';
	login: string = '';
	password?: string | undefined;
	isAuthentificated?: boolean | undefined = false;

	constructor(user: UserDataInterface | null = null) {
		if(user) {
			this.userName = user.userName;
			this.login = user.login;
			this.isAuthentificated = true;
		}
	}

	greet(): string { 
		return `Bonjour ${this.userName}`;
	}
}