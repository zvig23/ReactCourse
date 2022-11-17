import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import productService from "../../../Services/ProdeuctService";
import ProductModel from "../../Models/ProductModel/ProductModel";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsList.css";

function ProductsList(): JSX.Element {

    const [productsList,setProductsList] = useState<ProductModel[]>([]);
    useEffect(()=>{
        productService.getAll()
        .then(products => setProductsList(products))
        .catch(err => console.log(err.message));
    },[])
    return (
        <div className="ProductsList">
			{productsList.map( product => <ProductsCard productProps = {product} ></ProductsCard>)}
            <br></br>
            <NavLink className="Box" to = "/products/new">Add +</NavLink>

        </div>
    );
}

export default ProductsList;
