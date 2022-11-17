import { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import productService from "../../../Services/ProdeuctService";
import appConfig from "../../../utils/AppConfig";
import ProductModel from "../../Models/ProductModel/ProductModel";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {
    const [product, setProduct] = useState<ProductModel>(null);
    const params = useParams();

    useEffect(()=>{
        const id =+ params.id;
        productService.getOne(id)
        .then(product => setProduct(product))
        .catch(err => alert(err.message))
    },[] )

    return (
        <div className="ProductDetails Box">
            <h3>{product?.name}</h3>
            <h3>Id: {product?.id}</h3>
            <h3>Stock: {product?.stock}</h3>
            <h3>Price: {product?.price}</h3>
            <img src={appConfig.prodImageUrl+product?.imageName}></img>
        </div>
    );
}

export default ProductDetails;
