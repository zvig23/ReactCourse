import axios from "axios";
import CredentialModel from "../Components/Models/CredentialModel";
import UserModel from "../Components/Models/UserModel";
import { authStore, LoginAction, LogoutAction, RegisterAction } from "../Redux/AuthState";
import appConfig from "../utils/AppConfig";

class AuthService {
    public async register(user:UserModel): Promise<void>{
        const res = await axios.post<string>(appConfig.registerUrl,user);
        const  token = res.data;
        authStore.dispatch(RegisterAction(token))
    }
    public async login(cred:CredentialModel): Promise<void>{
        const res = await axios.post<string>(appConfig.registerUrl,cred);
        const  token = res.data;
        authStore.dispatch(LoginAction(token))
    }
    public logout():void{
        authStore.dispatch(LogoutAction());
    }
    public get isLoggedIn(): boolean{
        return true;
    }
}
const authService = new AuthService();
export default authService;