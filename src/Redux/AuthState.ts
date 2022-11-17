import { create } from "domain";
import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import UserModel from "../Components/Models/UserModel";

export class AuthState{
    public token : string ;
    public user: UserModel= null;
}

export enum AuthActionType {
    Register = "Register",
    Login = "login",
    Logout = "Logout"  
}

export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

export function RegisterAction(token:string):AuthAction{
    return {type: AuthActionType.Register, payload:token}
}
export function LoginAction(token:string):AuthAction{
    return {type: AuthActionType.Login, payload:token}
}
export function LogoutAction():AuthAction{
    return {type: AuthActionType.Logout}
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState{

    const newState = {...currentState};
    
    switch (action.type){
        case AuthActionType.Register:

            break;
        case AuthActionType.Login:
            newState.token = action.payload;
            newState.user = jwtDecode<{user:UserModel}>(action.payload).user;
            break;
        case AuthActionType.Logout:
            newState.token = newState.user = null;
        
            break;
    }

    return newState;
}

export const authStore = createStore(authReducer)
