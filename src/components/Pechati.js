import React from 'react'
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import useFetching from '../useHooks/useFetching';
import PechatiRoute from "../components/PechatiRoute";
import Predpriyatiya from '../routes/Predpriyatiya'
import Gerb from '../routes/Gerb'
import Vracha from '../routes/Vracha'
import Dublikat from '../routes/Dublikat'
import Stamp from '../routes/Stamp'
import Faksimile from '../routes/Faksimile'
import Other from '../routes/Other'
import Page404 from '../routes/Page404'

export default function Pechati() {
    let [product, setProduct] = useState([]);
    let [productFetch, loader, error] = useFetching(async () => {
        let res = await fetch('http://new.vladlena.ru/json/?product=1')
        .then(responce => {
            return responce.json();
        })
        .then(json => {
            setProduct(json);
        })
        .catch(error => {
            throw error;
        });
        return res;
    });

    useEffect(()=> {
        console.log('useEffect product');
        productFetch();
    },[]);

    let route = createBrowserRouter(
        createRoutesFromElements(<Route path='/' element={<PechatiRoute/>}>
                <Route path='/predpriyatiya/' element={<Predpriyatiya product={product} loader={loader} error={error}/>} />
                <Route path='/gerb/' element={<Gerb/>} />
                <Route path='/vrach/' element={<Vracha/>} />
                <Route path='/dublikat/' element={<Dublikat/>} />
                <Route path='/info-shtampy/' element={<Stamp/>} />
                <Route path='/faksimile/' element={<Faksimile/>} />
                <Route path='/other/' element={<Other/>} />
                <Route path='*' element={<Page404/>} />
            </Route>
            )
    );

    return (
        <>
            <h3>Печати</h3>
            <RouterProvider router={route}>
                <PechatiRoute />
            </RouterProvider>
        </>
    )
}
