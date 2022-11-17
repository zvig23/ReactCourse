import "./Spinner.css";
import imgSource from "../../../Assets/loading-girls.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={imgSource}></img>
        </div>
    );
}

export default Spinner;
