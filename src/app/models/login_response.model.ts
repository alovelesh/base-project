export class LoginResponse {
    profileData: {
    	image : object,
    	token : string
    };
    appMenus : { id: number, name: string, route?: string, iconName?: string, parent?: number }[]
    email: string;
    authToken : string;
    isSideBarExpand ?: boolean;
}