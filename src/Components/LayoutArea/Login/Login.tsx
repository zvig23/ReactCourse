import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import CredentialModel from "../../Models/CredentialModel";
import UserModel from "../../Models/UserModel";
import "./Login.css";

function Login(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CredentialModel>();
    const navigate = useNavigate()

    const send = async (user:CredentialModel) =>{
        try{
            await authService.login(user);
            notifyService.success(user.username + " add")
            console.clear()
        }
        catch(err){
            notifyService.error(err);
        }
        finally{
            navigate("/About")
        }
    }
    return (
        <div className="Login Box">
			            <h2>Login</h2>
			<form onSubmit={handleSubmit(send)}>
                <label>username: </label>
                <input type="text" {...register("username")}></input>
                <br></br>
                <label>password: </label>
                <input type="password" {...register("password")}></input>
                <br></br>
                <br></br>

            <button >Add</button>
            </form>
        </div>
    );
}

export default Login;
