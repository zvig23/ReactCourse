import { NavLink } from "react-router-dom";
import OutOfStockProducts from "../../ProductsArea/OutOfStockProducts/OutOfStockProducts";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <ul>
			<li><NavLink to="/Home">1</NavLink></li>
			<li><NavLink to="/Employees">Employees</NavLink></li>
			<li><NavLink to="/About">About</NavLink></li>
			<li><NavLink to="/ProductList">ProductList</NavLink></li>
            <li><NavLink to="/Register">Register</NavLink></li>

            <li><TotalProducts/></li>
            <li><OutOfStockProducts/></li>
            </ul>
        </div>
    );
}

export default Menu;
