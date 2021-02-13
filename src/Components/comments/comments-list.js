import './comments.css'
import React, { useState, useEffect } from 'react';
import CommentMiniComponent from './comments-mini'


const CommentListComponent =(props)=>{ 
    const [comments, setComments] = useState([]);
    const [movieId] = useState(localStorage.getItem("movieID"));

    useEffect(()=>{
        getMovieComments();
    },[])
    async function getMovieComments(){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/moviecomments/${movieId}`);
            if (response.ok) { 
                let object = await response.json();
                console.log(object);
                setComments(object.comments);
            }
        }
        catch(error){
            console.log(`error - getMovieComments - ${error}`);
        }
    }
    return (
            <div id="pid2">
                {comments.map((item,index)=> { return <CommentMiniComponent key = {index} comment = {item} /> })}
            </div>
        )
    }

export default CommentListComponent;

