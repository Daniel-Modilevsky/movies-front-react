import './comments.css'
import React, { useState, useEffect } from 'react';

function CommentMiniComponent(props){
    const [creationByName, setCreationByName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        commentMiniHandler(props.comment)
    });

    function commentMiniHandler(comment){
        setCreationByName(props.comment.creationByName);
        setDescription(props.comment.description);
    }


    return (
        <div className="pid-comment hvr-rectangle-out ">
            <section className="article-body">
                <label>{creationByName}:</label>
                <p> {description} </p>
            </section>
        </div> 
    );
}

export default CommentMiniComponent;

