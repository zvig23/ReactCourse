import "./BestSeller.css";

function BestSeller(): JSX.Element {
    let name = "Laffa Falafel";
    let totalItems = 5 ;

    const show = () =>{
        name = "Laffa Falafel2 ";
        totalItems = 52 ;
        alert( name +" "+ totalItems)
    }

    return (
        <div className="BestSeller Box">
			<button onClick={show}>What is the best seller?</button>
            <span> {name},{totalItems}</span>
        </div>
    );
}

export default BestSeller;
