import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductState } from "../../../Redux/ProductsState";
import "./OutOfStockProducts.css";

function OutOfStockProducts(): JSX.Element {  
    const count = + useSelector<ProductState>( productState=>{
        return productState.products.filter(p => p.stock === 0).length
    })
    return (
        <div className="OutOfStockProducts Box">
                Out Of Stock Products: {count}

        </div>
    );
}

export default OutOfStockProducts;
