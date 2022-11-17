import "./Survey.css";

interface resultSurvey{
    handleSuervyAnswer: (answer : string) => void; 
}

function Survey(props: resultSurvey): JSX.Element {
    return (
        <div className="Survey Box">
			<button onClick = {()=>{props.handleSuervyAnswer("good")}}>good</button>
			<button onClick = {()=>{props.handleSuervyAnswer("ok")}}>ok</button>
			<button onClick = {()=>{props.handleSuervyAnswer("bad")}}>bad</button>
        </div>
    );
}

export default Survey;
