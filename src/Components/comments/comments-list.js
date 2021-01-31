import React, { useEffect}  from "react";
import './comments.css'
import $ from 'jquery'; 


const CommentListComponent =()=>{ 
    let movieId = '';
    if(!movieId){
        movieId = '5fe392b1056d0822ecc9f3f8';
    }
    useEffect(()=>{
        getMovieComments('5fe392b1056d0822ecc9f3f8');
    })
    async function getMovieComments(movieID){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/moviecomments/${movieID}`);
            if (response.ok) { 
                let object = await response.json();
                console.log(object);
                let comments = object.comments;
                console.log(comments);
                $("#pid2").empty();
                comments.forEach(comment => {
                     $("#pid2").append(
                        '<article className="pid-comment hvr-rectangle-out" coment>'+
                         '<div className="article-body">'+
                         '<label>'+comment.creationByName+':</label>'+
                         '<p>'+comment.description+'</p></div></article>'
                     )
                });
            }
        }
        catch(error){
            console.log(`error - getMovieComments - ${error}`);
        }
    }
    return (
            <div id="pid2">
            </div>
        )
    }

export default CommentListComponent;

