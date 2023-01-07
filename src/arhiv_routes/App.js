import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './menu/Menu';

function App() {

    return (<div>
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    </div>);
}

export default App;