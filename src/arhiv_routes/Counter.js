import React, {useState} from "react";

function Counter(){
    let [likes, setLikes] = useState(0);

    return (<><div className="number">{likes}</div>
    <button onClick={() => setLikes(likes + 1)}>in</button>
    <button onClick={() => setLikes(likes - 1)}>de</button></>);
}

export default Counter;