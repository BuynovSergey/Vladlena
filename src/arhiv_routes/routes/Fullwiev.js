import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../useHooks/useFetching';
import Loader from '../Loader';

const Fullwiev = () => {
    let [article, setArticle] = useState([]);
    let { id } = useParams();
    let [jsonPosts, loader, error] = useFetching(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response => { 
                if(!response.ok){
                    return new Error('o-O');
                }
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

    useEffect(() => {
        jsonPosts();
    }, []);

    console.log(article);

    return (
        <div className='full-wiev'>
        {loader ? (
            <Loader />
        ) : error ? (
            <h2>Ошибка {error}</h2>
        ) : (
            <>
            <h1>{ article.title }</h1>
            <div className='full-wiev__text'>{ article.body }</div>
            </>
        )}
        </div>
    )
}

export default Fullwiev