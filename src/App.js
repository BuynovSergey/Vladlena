import React from "react";
import Pechati from "./components/Pechati";

function App(){
    console.log('start');
    return (
    <div className="App">
        <div className="main">
            <div className="text">
                <Pechati />
            </div>
        </div>
    </div>
    )
}

export default App;