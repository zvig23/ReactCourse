import { ChangeEvent, useState } from "react";
import monetaryService from "../../../Services/MonetaryService";
import "./Vat.css";

interface VatProps{
    prece: number;
}
function Vat(props:VatProps): JSX.Element {
    const [price, setPrice] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);

    const handlePrice= (args:ChangeEvent<HTMLInputElement>) : void=>{
            const price =+ args.target.value;
            setPrice(price);
            const vat = monetaryService.getVal(price, props.prece);
            setVat(vat);
    }

    const handleClear= () : void=>{
        setPrice(0);
        setVat(0);
}
    return (
        <div className="Vat Box">
			<h4>Vat</h4>
            <label title= "Calc vat">
                price:
                <input type="number" placeholder="number here kuli alma" onChange={handlePrice} value={price}></input>
            </label>
            <p>${price} X {props.prece} % = $</p><p role="results">{vat}</p>
            <button onClick={handleClear}>clear</button>
        </div>
    );
}

export default Vat;
