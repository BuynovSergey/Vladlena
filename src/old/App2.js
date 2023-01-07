import React, { useRef } from "react";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import './css/owl.theme.default.css';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//mport './css/owl.theme.default.css';
import { useState, useEffect } from "react";
import useFetching from './useHooks/useFetching';
import FilterProduct from './components/FilterProduct';
import Loader from './components/Loader';
import MySelect from "./components/UI/Select";
import Carousel from "./components/Carousel";

function App(){
    let [product, setProduct] = useState([]);
    let [page, setPage] = useState(900); //#номер раздела в котором мы находимся для вывода товаров именного этого раздела
    let [formaSobstvennosti, setFormaSobstvennosti] = useState([]); //Форма собственности все варианты
    let [formaSobstvennostiSelect, setFormaSobstvennostiSelect] = useState(0); //Форма собственности для данного раздела
    let [events, setEvents] = useState({}); //Форма собственности для данного раздела
    let slider = useRef(null);

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

    let [formaFetch, loaderForma, errorForma] = useFetching(async () => {
        let res = await fetch('http://new.vladlena.ru/json/?formasobstvennosti=1')
        .then(responce => {
            return responce.json();
        })
        .then(json => { 
            setFormaSobstvennosti(json);
            setFormaSobstvennostiSelect(json[0]['Forma_ID']);
        })
        .catch(error => {
            throw error;
        });
        return res;
    });

    useEffect(()=> {
        console.log('useEffect');
        formaFetch();
        productFetch();
    },[]);

    

    function changeFromaSob(value){
        console.log('changeFromaSob');
        //slider.current.destory();
        //slider.current.refresh(event, 300);
        
        setFormaSobstvennostiSelect(value);
        //slider.current.next();
        // setEvents({
        //     onRefresh: function(event) {  console.log(event); },
        //     onChanged: function(event) { console.log('2!'); },
        //     onRefreshed: function(event) { console.log('onRefreshed'); },
        // });
    }
    function confirmOrder(){

    }
    const options = {
        dots: false,
        nav: true,
        responsiveClass: true,
        items: 6,
        navText: ['',''],
        responsiveClass: true,
        navElement: 'div',
        responsive: {
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
        }
    }
    useEffect(()=> {
        console.log('refresh');
        if(formaSobstvennostiSelect > 0){ 
            //slider.current.destory();
            // slider.current.create(options);
            // slider.current.render();
        }
        //slider.current.refresh('refresh.owl.carousel', 300);
        // slider.current.create(options);
        // slider.current.initialize();
    },[formaSobstvennostiSelect]);
    console.log('start');
    //<select name='f_FormaSobstvennosti' onChange={event => changeFromaSob(event.target.value)}><option value='1'>ИП</option><option value='2'>ООО (Общество с ограниченной ответственностью)</option><option value='3'>АО (Акционерное общество)</option><option value='4'>НП</option><option value='5'>СГ</option><option value='6'>Другое</option></select>
    //{(loaderForma ? <Loader /> : <MySelect value={formaSobstvennostiSelect} onChange={value => setFormaSobstvennostiSelect(value)} option={formaSobstvennosti.map(item => { return {value: item.Forma_ID, name: item.Forma_Name}})} />)}
    //console.log(formaSobstvennosti.map(item => Object.assign({},{value: item.Forma_ID, name: item.Forma_Name})));
    //console.log((formaSobstvennosti ? formaSobstvennosti.map(item => { return {value: item.Forma_ID, name: item.Forma_Name}}) : 'loaderForma'));
    // <OwlCarousel events={{onRefresh: function(event){ console.log('1!');}, onRefreshed: function(event){ console.log('!');}}} className='owl-theme' id='slider-pechati' dots={false} nav={true} navText={['','']} responsiveClass={true} items='6' navElement='div' responsive={{
    //     0:{
    //         items:2
    //     },
    //     400:{
    //         items:3
    //     },
    //     996:{
    //         items:4
    //     },
    //     1000:{
    //         items:6
    //     }
    // }}>
    
    return (
<div className="App">
    <div className="main">
    <div className="text">
    <div className="box-order"><div className="summ">Итого: <span></span> р.</div><div className="add-cart" onClick={confirmOrder()}>Оформить</div></div>
    <div className='caution-i'></div>
    <h2>Бланк заказа печати негосударственного предприятия</h2>
    <div className='caution'>ВНИМАНИЕ! Пожалуйста будьте предельно внимательны, изготовитель не несет ответственности за допущенные вами ошибки!</div>
    <form name='adminForm' className='form-pechat'>
        <label><b>Форма собственности <span>*</span></b>
        {(loaderForma ? <Loader /> : <MySelect value={formaSobstvennostiSelect} onChange={changeFromaSob} option={formaSobstvennosti.map(item => { return {value: item.Forma_ID, name: item.Forma_Name}})} />)}
        </label>
        <div className='formaover' style={{display: 'none'}}>
            <label><input name='f_FormaSobstvennostiInoe' type='text' placeholder='Другая форма собственности' /></label>
        </div>
        <div className='label-zag'>Выберите макет для изготовления печати</div>
        {loader ? <Loader /> : <OwlCarousel ref={slider} id='sliderPechati' options = {options} events = {events}>
        <FilterProduct forma={formaSobstvennostiSelect} product={product} page={page} />
        </OwlCarousel>}
        
    </form>
    </div>
    </div>
</div>
    )
}

export default App;