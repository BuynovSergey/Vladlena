import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './css/owl.theme.default.css';
import { useState, useEffect } from "react";
import useFetching from './useHooks/useFetching';
import FilterProduct from './components/FilterProduct';

function New(){
    let [product, setProduct] = useState([]);
    let [page, setPage] = useState(900);
    let [formaSobstvennosti, setFormaSobstvennosti] = useState(1);

    let [productFetch, loader, error] = useFetching(async () => {
        let res = await fetch('http://new.vladlena.ru/json/')
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
        productFetch();
    },[]);
    
    function changeFromaSob(value){
        console.log(value);
    }
    console.log(product);

    return (
<div className="App">
    <div className="main">
    <div className="text">
    <div className="box-order"><div className="summ">Итого: <span></span> р.</div><div className="add-cart" onClick="confirmOrder();">Оформить</div></div>
    <div className='caution-i'></div>
    <h2>Бланк заказа печати негосударственного предприятия</h2>
    <div className='caution'>ВНИМАНИЕ! Пожалуйста будьте предельно внимательны, изготовитель не несет ответственности за допущенные вами ошибки!</div>
    <form name='adminForm' className='form-pechat'>
        <label><b>Форма собственности <span>*</span></b>
            <select name='f_FormaSobstvennosti' onChange={event => changeFromaSob(event.target.value)}><option value='1'>ООО (Общество с ограниченной ответственностью)</option><option value='2'>АО (Акционерное общество публичное)</option><option value='3'>АО (Акционерное общество не публичное)</option><option value='4'>ЗАО (Закрытое акционерное общество)</option><option value='5'>ОАО (Открытое акционерное общество)</option><option value='6'>Другое</option></select>
        </label>
        <div className='formaover' style={{display: 'none'}}>
            <label><input name='f_FormaSobstvennostiInoe' type='text' placeholder='Другая форма собственности' /></label>
        </div>
        <div className='label-zag'>Выберите макет для изготовления печати</div>
        <OwlCarousel className='owl-theme' id='slider-pechati' dots={false} nav={true} navText={['','']} responsiveClass={true} items='6' navElement='div' responsive={{
              0:{
                  items:2
              },
              400:{
                  items:3
              },
              996:{
                  items:4
              },
              1000:{
                  items:6
              }
          }}>
            <FilterProduct product={product} page={page} />
        </OwlCarousel>
    </form>
    </div>
    </div>
</div>
    )
}

export default New;