import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import { useParams } from "react-router";

export default function CommentsSection(){
    const {id} = useParams();
    const [comments, setComments] = useState(()=> localStorage[`${id}`] ? JSON.parse(localStorage.getItem(`${id}`)) : []);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const localComments = JSON.parse(localStorage.getItem(`${id}`));
        console.log(localComments);
        if(localComments){
            setComments(localComments);
        }
    },[id]);

    useEffect(() => {
        localStorage.setItem(`${id}`, JSON.stringify(comments));
        if(comments){
            setLoaded(true);
        }
        else{
            setLoaded(false);
        }
    },[comments]);

    return(
        <div>
            <CommentsForm comments={comments} setComments={setComments}/>
            { loaded ? (
                <ul className="list-group">
                    {comments.map((comment,index)=>(
                        <li className="list-group-item" key={`${id}index${index}`}>
                            <CommentsList comment={comment} />
                        </li>
                    ))}
                </ul>) 
                : (<p>the comment section is not loaded</p>)}
        </div>
    )
}