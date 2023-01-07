import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../routes/About';
import Home from '../routes/Home';
import Page404 from '../routes/Page404';
import Routespage from '../routes/Routespage';
import Fullwiev from '../routes/Fullwiev';

function Menu() {
    return (
        <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route exact path='/posts' element={<Routespage/>}/>
            <Route exact path='/posts/:id' element={<Fullwiev/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
        </>
    );
}

export default Menu;