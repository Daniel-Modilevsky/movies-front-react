import './movies.css'
import React, { useState, useEffect } from 'react';

const MoviesMiniComponent =(props)=>{
    const [movieID, setMovieID] = useState("");
    const [movieImage, setMovieImage] = useState(props.image);

    useEffect(()=>{
        movieMiniHandler()
    },[])
    function movieMiniHandler(){
        setMovieID(props.movieID);
        setMovieImage('https://movies-smart.herokuapp.com/' + props.image)
    }

    function sendIdToMovie(e){
        try{
            e.preventDefault();
            localStorage.setItem('movieID',movieID );
            window.location.replace('/movie');
        }
        catch(error){
            window.location.replace('/404');
        }
    }

    return (
            <article className="movie-mini hvr-curl-top-right hvr-shrink" onClick={sendIdToMovie} > 
                <img src={movieImage} alt="movieImage" style={{width:"200px", height:"125px"}}/>
            </article>
        )
    }

export default MoviesMiniComponent;