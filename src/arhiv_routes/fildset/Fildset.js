import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Fieldset(props){
    const [items, setItem] = useState({title: '', body: ''});

    const onButtonClick = () => {
        props.addArticle({...items, id: props.maxID});
        setItem({title: '', body: ''});
    };

    // const onInputChange = (e) => {
    //     props.addArticle({...items, id: props.maxID});
    //     setItem({...items, title: '', description: ''});
    // };

    return (
        <fieldset className="add-articlas">
            <legend>{props.legend || "Форма добавления"}</legend>
            <Input value={items.title} onChange={e => setItem({...items, title: e.target.value})}>Заголовок</Input>
            <Input value={items.body} onChange={e => setItem({...items, body: e.target.value})}>Описание</Input>
            <Button onClick={onButtonClick}>Добавить</Button>
            <Button onClick={() => props.resetArticle()}>Сбросить</Button>
        </fieldset>
    )
}

export default Fieldset;