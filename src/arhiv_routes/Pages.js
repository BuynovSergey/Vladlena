import React, { useMemo } from 'react';

function Pages(props){
    const pages = useMemo(() => {
        let pages = [];
        console.log(props.page);
        for(let i = 1; i <= props.countPage; i++){
            pages.push(<div key={i} className={i == props.page ? 'page page-active' : 'page'} onClick={() => props.handlePages(i)}>{i}</div>);
        }
        return (<div className='box-pages'>
            {pages}
        </div>);
    }, [props.page]);

    return pages;
}

export default Pages;