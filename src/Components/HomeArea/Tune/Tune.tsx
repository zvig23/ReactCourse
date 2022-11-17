import "./Tune.css";
import tuneSrc from "../../../Assets/Music/fade-into-you.mp3";
import { RefObject, useRef } from "react";

function Tune(): JSX.Element {
    const audioRef: RefObject<HTMLAudioElement> = useRef(null);

    return (
        <div className="Tune Box">
			<audio src={tuneSrc} ref = {audioRef}></audio>
            <button onClick={()=> audioRef.current?.play()}>play</button>
            <button onClick={()=> audioRef.current?.pause()}>pause</button>
            <button onClick={()=> audioRef.current?.load()}>stop</button>
        </div>
    );
}

export default Tune;
