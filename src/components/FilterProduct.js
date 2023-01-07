import React from 'react'

export default function FilterProduct({product, page, forma, selectProduct, handleProduct}) {
  console.log('?'+forma);
  let filtredProduct = product.filter(item => {
    if(+item.Subsection_ID == page && +item.FormaSobstvennosti == forma){
      return true;
    }
  });
  console.log(filtredProduct);

  return (
    <>
    {product.map(item => {
        if(+item.Subsection_ID == page && +item.FormaSobstvennosti == forma){
            return(<div className='item' key={item.Info_ID}>
                <div className={selectProduct.has(item.Info_ID) ? "shop-box anim active-obj" : "shop-box anim"} pechat={item.Info_ID} onClick={() => handleProduct(item.Info_ID)}>
                    <div className='shop-box-info'>
                        <h3>{item.Name}</h3>
                    </div>
                    <div className='img-el'><img src={'http://new.vladlena.ru/'+item.Image} /></div>
                    <div className='kat-count'>
                      <span onClick={(e) => { e.stopPropagation(); handleProduct(item.Info_ID,-1)}}>-</span>
                      <b>{selectProduct.has(item.Info_ID) ? selectProduct.get(item.Info_ID) : 0}</b>
                      <span onClick={(e) => { e.stopPropagation(); handleProduct(item.Info_ID, 1)}}>+</span>
                    </div>
                    <div className='min-pr'>Цена <span>{item.Price}</span> р.</div>
                </div>
            </div>);
        }
    })}
    </>
  )
}
