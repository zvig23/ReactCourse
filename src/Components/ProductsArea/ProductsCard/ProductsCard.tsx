import { NavLink } from "react-router-dom";
import appConfig from "../../../utils/AppConfig";
import ProductModel from "../../Models/ProductModel/ProductModel";
import "./ProductsCard.css";

interface ProductCardProps{
    productProps: ProductModel
}

function ProductsCard(props : ProductCardProps): JSX.Element {


    return (
        <div className="ProductsCard Box">
			<h2>{props.productProps.name}</h2>
            <h2>Price: {props.productProps.price}</h2>
            <h2>In stock:{props.productProps.stock}</h2>
            <div>
                <NavLink to={"/products/details/"+props.productProps.id}>
            <img src={appConfig.prodImageUrl+props.productProps.imageName}></img>
            </NavLink>
            </div>
        </div>
    );
}

export default ProductsCard;
