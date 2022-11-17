import "./Discount.css";

function Discount(): JSX.Element {
    const discount : number = 10;
    return (
        <div className="Discount Box" >
            {discount > 0 && <span>{discount}% off</span>}
            {discount === 0 && <span>no discount</span>}

        </div>
    );
}

export default Discount;
