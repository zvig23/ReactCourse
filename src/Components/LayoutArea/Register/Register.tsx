import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import UserModel from "../../Models/UserModel";
import "./Register.css";

function Register(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate()

    const send = async (user:UserModel) =>{
        try{
            await authService.register(user);
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
        <div className="Register Box">
			            <h2>Add Product</h2>
			<form onSubmit={handleSubmit(send)}>
                <label>lastName: </label>
                <input type="text" {...register("lastName", UserModel.firstNameValidation)}></input>
                <br></br>
                <label>firstName:  </label>
                <input type="text" {...register("firstName", UserModel.lastNameValidation)}></input>
                <br></br>
                <label>username: </label>
                <input type="text" {...register("username", UserModel.userNameValidation)}></input>
                <br></br>
                <label>password: </label>
                <input type="password" {...register("password", UserModel.passwordValidation)}></input>
                <br></br>
                <br></br>

            <button >Add</button>
            </form>
        </div>
    );
}

export default Register;
