import appConfig from "../utils/AppConfig";
import axios from "axios";
import ProductModel from "../Components/Models/ProductModel/ProductModel";
import { AddProduct, ProductActionType, productsReducer, store } from "../Redux/ProductsState";

class ProductService {
	public async getAll(): Promise<ProductModel[]>{
        let products = store.getState().products;
        if (products.length ===0){
            const res = await axios.get<ProductModel[]>(appConfig.prodUrl)
            products = res.data;
            store.dispatch({type: ProductActionType.FetchProduct, payload:products})
        }

        return products;
    }

    public async getOne(id: number): Promise<ProductModel>{
        let product = store.getState().products.find(p=> p.id===id);
        if (product){
            const res = await axios.get<ProductModel>(appConfig.prodUrl+"/"+id)
            const product = res.data;
        }
        return product;
    }

    public async add(product: ProductModel):Promise<void>{
        console.log(product)
        const res = await axios.post<ProductModel>(appConfig.prodUrl,product);
        const addedProd = res.data;
        store.dispatch(AddProduct(addedProd))

    }
}


const productService = new ProductService();

export default productService;