import { useState, useEffect } from 'react';
import testAPI from '../../api/fetch';
import { useNavigate } from 'react-router';

export default function SearchBar(){
    const [inputQuery, setInputQuery] = useState("");
    const nav = useNavigate();

    /** if we want to use some dynamic event */
    useEffect(()=>{
        //ToDo: need to finish this. 
        //testAPI(8,inputQuery).then((response)=>response.json())
    },[inputQuery]);

    /**
     * handleTextChange()
     * -------------------------
     * a function to track changes in the input field, and update it to inputQuery state hook.
     */
    function handleTextChange(){
        const inputField = document.getElementById('search_bar').value;
        setInputQuery(inputField)
    }

    /**
     * handleSubmitSearch()
     * ------------------------------
     * will fire the query to searchIndex.jsx
     */
    function handleSubmitSearch(){
        nav(`/search/${inputQuery}`);
    }

    return(
        <div className="row d-md-block d-none">
            <div className="input-group mb-3 ">
                <input type="text" id="search_bar" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleTextChange}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>handleSubmitSearch()}>🔎</button>
            </div>
        </div>
    )
}