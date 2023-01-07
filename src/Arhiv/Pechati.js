import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import useFetching from '../useHooks/useFetching';

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

    return (
        <>
            <div className="main">
                <div className="text">
                    <BrowserRouter>
                        <Menu product={product} loader={loader} error={error} />
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}
