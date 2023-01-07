import React, { useState, useEffect } from 'react';
import Counter from '../Counter';
import articleArr from '../article.js';
import ArticleBox from '../ArticleBox';
import Fieldset from '../fildset/Fildset';
import Filters from '../Filters';
import Modal from '../Modal';
import Button from '../fildset/Button';
import useSearch from '../useHooks/useArticle';
import useFetching from '../useHooks/useFetching';
import Loader from '../Loader';
import Pages from '../Pages';

function Routespage() {
    let [article, setArticle] = useState([]);
    let [filter, setFilter] = useState({sort:'', search:''});
    let [modal, setModal] = useState(false);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(10);
    let [countPage, setCountPage] = useState(0);
    
    let [jsonPosts, loader, error] = useFetching(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit='+limit+'&_page='+page)
        .then(response => { 
                if(!response.ok){
                    return new Error('o-O');
                }
                setCountPage(Math.ceil(+response.headers.get('x-total-count')/limit));
                return response.json();
        })
        .then(json => {
            setArticle(json);
        })
        .catch(err => {
            throw err;
        });

        return res;
    });

    function addArticle(item){
        setArticle([...article, item]);
    }

    function resetArticle(){
        setFilter({sort:'', search:''});
        setArticle(articleArr);
    }

    function deleteArticle(id){
        setArticle([...article].filter(item => item.id !== id));
    }

    function handlePages(item){
        setPage(item);
    }

    useEffect(() => {
        jsonPosts();
        
    }, [page]);

    const searchAndSort = useSearch(article, filter.sort, filter.search);

    return (<div>
        <Counter />
        <hr/>
        <Filters setFilter={setFilter} filter={filter} />
        <hr/>
        <Button onClick={() => setModal(true)}>Добавить статью</Button>
        {modal && <Modal modal={modal} setModal={setModal}>
            <Fieldset legend="Форма добавления статей!" addArticle={addArticle} resetArticle={resetArticle} maxID={+ article.map(item => item.id).sort((a,b) => a-b).slice(-1) + 1} />
        </Modal>}
        <hr/>
        {loader ? (
            <Loader />
        ) : error ? (
            <h2>Ошибка {error}</h2>
        ) : (<>
                <ArticleBox props={searchAndSort} deleteArticle={deleteArticle} />
                <Pages countPage={countPage} page={page} handlePages={handlePages} />
            </>
        )}
    </div>);
}

export default Routespage;