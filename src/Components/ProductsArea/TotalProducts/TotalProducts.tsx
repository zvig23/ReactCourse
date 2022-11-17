import { useEffect, useState } from "react";
import { store } from "../../../Redux/ProductsState";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {
    const [total, setTotal] = useState<number>(0);
    useEffect(()=>{
        setTotal(store.getState().products.length)
        store.subscribe(()=>{
            setTotal(store.getState().products.length)
        });
    },[] )
    return (
        <div className="TotalProducts Box">
			total: {total}
        </div>
    );
}

export default TotalProducts;
