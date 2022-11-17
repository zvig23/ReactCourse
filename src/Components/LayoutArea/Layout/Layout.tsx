import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

import "./Layout.css";
import Home from "../Home/Home";
import Discount from "../Discount/Discount";
import Routing from "../Routing/Routing";

const Layout = (): JSX.Element => {
    return (
        <div className="Layout">
			<header><Header/></header>
            <aside><Menu></Menu></aside>
            <main><Routing></Routing></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default Layout;
