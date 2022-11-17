import { RegisterOptions } from "react-hook-form";

class ProductModel {
        public id: number;
        public name: string;
        public price: string;
        public stock: number;
        public imageName: string;
        public image: File;

        public static nameValidation: RegisterOptions = {
            required : {value: true, message: "require"},
            minLength : {value:3, message: "name too sssss"},
            maxLength : {value:50, message: "name too llllllll"},
        }
        public static priceValidation: RegisterOptions = {
            required : {value: true, message: "require"},
            min : {value: 0, message: "min value error"},
            max : {value:1000, message: "max value error"},
        }

}

export default ProductModel;

