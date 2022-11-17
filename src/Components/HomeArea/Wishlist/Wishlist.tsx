import { useState } from "react";
import "./Wishlist.css";
import { ChangeEvent} from "react";


function Wishlist(): JSX.Element {
    const [wishlist,setWishlist] =  useState<Array<string>>([]);
    const [item,setItem] =  useState<string>("");

    function handleItem(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setItem(value);
    }

    function handleAdding(): void {
        const copy = wishlist.slice();
        copy.push(item);
        setWishlist(copy);
        setItem("");
    }

    return (
        <div className="Wishlist">
			<h6>Wishlist</h6>
            <input type="search" onChange={handleItem}></input>
            <button onClick={handleAdding}>Add</button>
            <br></br>
            <span>{wishlist.map(product => product.toString() +" |")}</span>
        </div>
    );
}

export default Wishlist;
