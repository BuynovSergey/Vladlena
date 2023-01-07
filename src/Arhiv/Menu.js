import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Predpriyatiya from '../routes/Predpriyatiya'
import Gerb from '../routes/Gerb'
import Vracha from '../routes/Vracha'
import Dublikat from '../routes/Dublikat'
import Stamp from '../routes/Stamp'
import Faksimile from '../routes/Faksimile'
import Other from '../routes/Other'
import Page404 from '../routes/Page404'

function Menu({product, loader, error}) {
    return (
        <>
        <nav className="menu-sub2">
            <ul>
                <li><Link to='/predpriyatiya/'>Печати предприятий и ИП</Link></li>
                <li><Link to='/gerb/'>Гербовые печати</Link></li>
                <li><Link to='/vrach/'>Печати врача</Link></li>
                <li><Link to='/dublikat/'>Дубликаты печатей</Link></li>
                <li><Link to='/info-shtampy/'>Штампы</Link></li>
                <li><Link to='/faksimile/'>Факсимиле</Link></li>
                <li><Link to='/other/'>Прочее</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/predpriyatiya/' element={<Predpriyatiya product={product} loader={loader} error={error} />}/>
            <Route path='/gerb/' element={<Gerb/>}/>
            <Route path='/vrach/' element={<Vracha/>}/>
            <Route path='/dublikat/' element={<Dublikat/>}/>
            <Route path='/info-shtampy/' element={<Stamp/>}/>
            <Route path='/faksimile/' element={<Faksimile/>}/>
            <Route path='/other/' element={<Other/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
        </>
    )
}
export default Menu;