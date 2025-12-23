import { useParams } from "react-router";
import { useState, useEffect } from "react";

/**
 * CommentsForm()
 * ----------------------------------
 * a component to submit comment.
 * 
 * @param {*} param0 
 * @returns 
 */
export default function CommentsForm({comments, setComments}){

    const {id} = useParams();
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");

    function handleAuthorChange(e){
        setAuthor(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    useEffect(()=>{},[author]);
    useEffect(()=>{},[comment]);

    function updateComments(e){
        const form = document.getElementById(e.target.id);
        const date = new Date();
        if(author.length != 0 && comment.length != 0){
            setComments([{author:author,comment:comment,date:date.toString()}, ...comments]); 
        }
        else{
            alert("The comment & the writer fields cannot be empty.")
        }
        form.reset();
    }
    /**
     * submitHandler()
     * -----------------------------------
     * submit event handler for a form. 
     * @param {event} e 
     */
    function submitHandler(e){
        e.preventDefault();
        updateComments(e);
    }

    return(
        <div className="input-group">
            <form id={`form_${id}`} onSubmit={(e)=>submitHandler(e)}>
                <input type="text" className="form-control" id={`author${id}`} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>handleAuthorChange(e)} ></input>
                <textarea className="form-control" id={`comment${id}`} aria-label="With textarea" onChange={(e)=>handleCommentChange(e)}></textarea>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}