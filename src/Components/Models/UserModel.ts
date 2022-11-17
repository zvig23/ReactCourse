import { RegisterOptions } from "react-hook-form";

class UserModel {
    public lastName: string;
    public firstName: string;
    public username: string;
    public password: string;

    public static firstNameValidation: RegisterOptions = {
        required : {value: true, message: "require"},
        minLength : {value:1, message: "name too sssss"},
        maxLength : {value:50, message: "name too llllllll"},
    }
    public static lastNameValidation: RegisterOptions = {
        required : {value: true, message: "require"},
        minLength : {value:1, message: "name too sssss"},
        maxLength : {value:50, message: "name too llllllll"},
    }
    public static userNameValidation: RegisterOptions = {
        required : {value: true, message: "require"},
        minLength : {value:1, message: "name too sssss"},
        maxLength : {value:50, message: "name too llllllll"},
    }
    public static passwordValidation: RegisterOptions = {
        required : {value: true, message: "require"},
        min : {value: 0, message: "min value error"},
        max : {value:50, message: "max value error"},
    }

}

export default UserModel;
