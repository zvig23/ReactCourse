import "./Desserts.css";
import dessertImage1 from "../../../Assets/download.jpg";

function Desserts(): JSX.Element {
    const items:{id: number, name:string, image:any}[] = [
        {id: 1 , name: "Waka", image: dessertImage1},
        {id: 2 , name: "Doo", image: dessertImage1},
        {id: 3 , name: "Dele", image: dessertImage1},
    ]
    return (
        <div className="Desserts">
            {items.length===0 && "no food for you"}
            {items.length>0 && "our Desserts:" && items.map(item => <span key={item.id}>{item.name } <br/> <img src={item.image}/></span> )}

        </div>
    );
}

export default Desserts;
