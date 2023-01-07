import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import ArticleItem from './ArticleItem';

function ArticleBox({props, deleteArticle}){
    if(!props.length){
        return <h2>Статей нет!</h2>
    }
    console.log("!");
    return (
        <div className="article-box">
            <h2>Статьи</h2>
            <TransitionGroup>
                {props.map(val => <CSSTransition key={val.id} timeout={500} classNames='article'><ArticleItem props = {val} deleteArticle={deleteArticle} /></CSSTransition>)}
            </TransitionGroup>
        </div>
    )
}

export default ArticleBox;