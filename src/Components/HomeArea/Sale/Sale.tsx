import "./Sale.css";

interface SaleProps {
    category: string;
    precenr: number;
}

function Sale(props:SaleProps): JSX.Element {
    return (
        <div className="Sale Box">
			<span>Sale: {props.precenr}% discount on all {props.category}  </span>
        </div>
    );
}

export default Sale;
