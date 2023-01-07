import Button from "./fildset/Button";
import { useNavigate } from 'react-router-dom';

function ArticleItem({deleteArticle, props}){
    const navigate = useNavigate();
    return (
        <div className='article-item' style={{marginBottom:40}}>
            <h3>{`${props.id} ${props.title}`}</h3>
            {props.body}
            <Button onClick={() => navigate("/posts/"+props.id, { replace: true })}>Открыть</Button>
            <Button onClick={() => deleteArticle(props.id)}>Удалить</Button>
        </div>
    );
}

export default ArticleItem;