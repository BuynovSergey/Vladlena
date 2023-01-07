import React from 'react'
import {Link, NavLink } from 'react-router-dom'


// export function MenuRoute({product, loader, error}) {
//     return (
//         createRoutesFromElements(<Route path='/'>
//                 <Route path='/predpriyatiya/' element={<Predpriyatiya product={product} loader={loader} error={error} />} />
//                 <Route path='/gerb/' element={<Gerb/>} />
//                 <Route path='/vrach/' element={<Vracha/>} />
//                 <Route path='/dublikat/' element={<Dublikat/>} />
//                 <Route path='/info-shtampy/' element={<Stamp/>} />
//                 <Route path='/faksimile/' element={<Faksimile/>} />
//                 <Route path='/other/' element={<Other/>} />
//                 <Route path='*' element={<Page404/>} />
//             </Route>
//             ))
// }

function Menu() {
    return (
        <>
        <nav className="menu-sub2">
            <ul>
                <li><NavLink to='/predpriyatiya/'>Печати предприятий и ИП</NavLink></li>
                <li><NavLink to='/gerb/'>Гербовые печати</NavLink></li>
                <li><NavLink to='/vrach/'>Печати врача</NavLink></li>
                <li><NavLink to='/dublikat/'>Дубликаты печатей</NavLink></li>
                <li><NavLink to='/info-shtampy/'>Штампы</NavLink></li>
                <li><NavLink to='/faksimile/'>Факсимиле</NavLink></li>
                <li><NavLink to='/other/'>Прочее</NavLink></li>
            </ul>
        </nav>
        </>
    )
}
export default Menu;