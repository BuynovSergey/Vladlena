import React, { useRef }  from 'react'
import Loader from '../components/Loader';
import MySelect from "../components/UI/Select";
import CSSTransition from 'react-transition-group/CSSTransition';
import FilterProduct from '../components/FilterProduct';
import useFetching from '../useHooks/useFetching';
import { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import '../css/owl.theme.default.css';

export default function Predpriyatiya({product, loader, error}) {
  
  let [selectProduct, setSelectProduct] = useState(new Map()); //Выбранные товары из слайдера
  let [page, setPage] = useState(900); //#номер раздела в котором мы находимся для вывода товаров именного этого раздела
  let [formaSobstvennosti, setFormaSobstvennosti] = useState([]); //Форма собственности все варианты
  let [formaSobstvennostiSelect, setFormaSobstvennostiSelect] = useState(0); //Форма собственности для данного раздела
  let [showFade, setShowFade] = useState(false);
  let slider = useRef(null);
  let boxOrder = useRef(null);

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

  function changeFromaSob(value){ //обновляем состояние из выпадающего списка Формы собственности
      console.log('changeFromaSob');
      setFormaSobstvennostiSelect(value);
  }

  function handleProduct(id, count=0){ //управление состоянием и кол-вом выбранных товаров
      console.log('handleProduct');
      const newSet = new Map(selectProduct);
      const countPrev = newSet.get(id)+count;
      if(newSet.has(id)){
          if(count!=0 && countPrev > 0){ //если счетчик кол-ва доходит до 0, удаляем товар из выбранных, а иначе обновляем его кол-во
              newSet.set(id, countPrev);
          } else {
              newSet.delete(id);
          }
      } else {
          newSet.set(id,1); //если товар ниразу не выбран, то выбираем его и ставим счетчик в 1
      }
      setSelectProduct(newSet); //обновляем состояние  выбранных товаров
      if(newSet.size > 0){ // если есть выбранные товары обновляем стостояние показа блока суммы
          setShowFade(true);
      } else {
          setShowFade(false);
      }
  }

  function confirmOrder(){

  }

  useEffect(()=> {
      console.log('useEffect forma');
      formaFetch();
  },[]);

  const options = {
    dots: false,
    nav: true,
    items: 6,
    navText: ['',''],
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
  
  console.log('Predpriyatie'+loader);
{/* <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div>
        <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div>
        <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div>
        <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div>
        <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div>
        <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div>
        <div className="item"><div className="shop-box anim" pechat="190"><div className="shop-box-info"><h3>ИП 01</h3></div><div className="img-el"><img src="http://new.vladlena.ru//ext_images/900/778234c0cd7197d9ac3424b497839aa0" /></div><div className="kat-count"><span>-</span><b>0</b><span>+</span></div><div className="min-pr">Цена <span>1100</span> р.</div></div></div> */}
  return (
    <>
    {showFade && <CSSTransition nodeRef={boxOrder} in={showFade} timeout={3700} classNames="fade">
        <div ref={boxOrder} className="box-order"><div className="summ">Итого: <span>{product.reduce((prev,item) => {
        return (selectProduct.has(item.Info_ID) ? (parseInt(item.Price)*selectProduct.get(item.Info_ID)+prev) : prev);
    },0)}</span> р.</div><div className="add-cart" onClick={confirmOrder()}>Оформить</div></div>
    </CSSTransition>}
    <h2>Бланк заказа печати негосударственного предприятия</h2>
    <div className='caution'>ВНИМАНИЕ! Пожалуйста будьте предельно внимательны, изготовитель не несет ответственности за допущенные вами ошибки!</div>
    <form name='adminForm' className='form-pechat'>
        <label><b>Форма собственности <span>*</span></b>
        {(loaderForma ? <Loader /> : <MySelect value={formaSobstvennostiSelect} onChange={changeFromaSob} option={formaSobstvennosti.map(item => { return {value: item.Forma_ID, name: item.Forma_Name}})} />)}
        </label>
        {formaSobstvennostiSelect == 6 && <div className='formaover'>
            <label><input name='f_FormaSobstvennostiInoe' type='text' placeholder='Другая форма собственности' /></label>
        </div>}
        <div className='label-zag'>Выберите макет для изготовления печати</div>
        {loader ? <Loader /> : <OwlCarousel ref={slider} id='sliderPechati' options={options}>
        <FilterProduct
            forma={formaSobstvennostiSelect}
            product={product}
            page={page}
            selectProduct={selectProduct}
            handleProduct={handleProduct}  />
        </OwlCarousel>}
    </form>
    </>
  )
}
