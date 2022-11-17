import { Routes , Route } from "react-router-dom";
import About from "../../AboutArea/About/About";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import Home from "../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import LoadableExport from "react-loadable";
import Spinner from "../../SharedArea/Spinner/Spinner";
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Routing(): JSX.Element {
    const LazyAbout = LoadableExport({
        loader: () => import("../../AboutArea/About/About"),
        loading: Spinner
    });
    const LazyProductList = LoadableExport({
        loader: () => import("../../ProductsArea/ProductsList/ProductsList"),
        loading: Spinner
    });
    return (
<>
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/About" element={<LazyAbout/>}/>
<Route path="/ProductList" element={<LazyProductList/>}/>
<Route path="/products/details/:id" element={<ProductDetails/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="Employees" element={<EmployeesList/>}/>
<Route path="/products/new" element={<AddProduct/>}/>
<Route path="*" element={<PageNotFound/>}/>

</Routes>
</>
    );
}

export default Routing;
