import notifyService from "../../../Services/NotifyService";
import BestSeller from "../../HomeArea/BestSeller/BestSeller";
import Sale from "../../HomeArea/Sale/Sale";
import Search from "../../HomeArea/Search/Search";
import Survey from "../../HomeArea/Survey/Survey";
import Tune from "../../HomeArea/Tune/Tune";
import Wishlist from "../../HomeArea/Wishlist/Wishlist";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Vat from "../Vat/Vat";
import "./Home.css";

function Home(): JSX.Element {
    
    return (
        <div className="Home">
            <Discount></Discount>

            <Desserts></Desserts>

            <Sale category="cheap movies" precenr={69}></Sale>

            <Survey handleSuervyAnswer={(str: string) => notifyService.success(str)}></Survey>

            <BestSeller></BestSeller>

            <Tune></Tune>

            <Wishlist></Wishlist>

            <Vat prece = {0.17}></Vat>
        </div>
    );
}

export default Home;
