import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Search.css";

function Search(): JSX.Element {
    const [item,setItem] = useState<string>("");

    function handleItem(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setItem(value);
    }

    return (
        <div className="Search">
			<label>ssss</label>
            <input type="search" value={item} onChange={handleItem}></input>
            <button></button>
        </div>
    );
}

export default Search;
