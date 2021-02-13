import React, { useState, useEffect } from 'react';
import './comments.css'

function CommentProfileComponent(props){
    const [movieID ] = useState(props.comment.commentOn);
    const [iamge, setImage] = useState("");
    const [creationByName] = useState(props.comment.creationByName);
    const [description] = useState(props.comment.description);

    useEffect(() => {
        getMoviePicture();
    });

    async function getMoviePicture(){
        try{
            await fetch(`https://movies-smart.herokuapp.com/api/movies/${movieID}`)
            .then(function(response){ return response.json(); })
            .then(function(data) {
            const movie = data;
            let image = 'https://movies-smart.herokuapp.com/' + movie.movie.image;
            setImage(image);
            });
        }
        catch(error){
            console.log(`error - getMoviePicture - ${error}`);
        }
    }
    return (
        <div className="pid-comment hvr-rectangle-out ">
            <section className="comment-movie">
                <img src={iamge} alt="iamge"/>
            </section>
            <section className="article-body">
                <label>{creationByName}:</label>
                <p> {description} </p>
            </section>
        </div> 
    );
}

export default CommentProfileComponent;