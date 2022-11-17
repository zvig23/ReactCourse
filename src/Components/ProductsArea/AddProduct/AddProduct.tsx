import { NotyfArray } from "notyf";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import notifyService from "../../../Services/NotifyService";
import productService from "../../../Services/ProdeuctService";
import ProductModel from "../../Models/ProductModel/ProductModel";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<ProductModel>();
    const navigate = useNavigate();

    const send = async (product:ProductModel) =>{
        try{
            product.image = (product.image as unknown as FileList).item(0);
            await productService.add(product);
            notifyService.success(product.name + " add")
            console.clear()
        }
        catch(err){
            notifyService.error(err);
        }
        finally{
            navigate("/ProductList")
        }
    }

    return (
        <div className="AddProduct Box">
            <h2>Add Product</h2>
			<form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)}></input>
                <br></br>
                <label>Price:  </label>
                <input type="number" {...register("price", ProductModel.priceValidation)}></input>
                <span>{ formState.errors?.price?.message}</span>
                <br></br>
                <label>Stock: </label>
                <input type="number" {...register("stock")}></input>
                <br></br>
                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")}></input>
                <br></br>
                <br></br>

            <button >Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
