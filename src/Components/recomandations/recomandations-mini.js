import React, { useState } from 'react';
import './recomandations.css'

const RecomandMiniComponent =(props)=>{
    const [movieName] = useState(props.movie.name);
    const [movieImage] = useState('https://movies-smart.herokuapp.com/'+ props.movie.image);
    const [categories] = useState(props.movie.categories);
    const [releaseDate] = useState(props.movie.releaseDate);
    const [actors] = useState(props.movie.actors);
    const [storyLine] = useState(props.movie.storyLine);
    const [runTime] = useState(props.movie.runTime);

    console.log(movieImage);
    
    return (
        <article>
            <aside>
                <img src = {movieImage} alt="imgg"/>
            </aside>
            <nav>
                <ul>
                    <li><label>Name: </label><span className="movie-name"> {movieName}</span></li>
                    <li><label>Run Time: </label><span> {runTime}  </span></li>
                    <li><label>Categories: </label><span> {categories}  </span></li>
                    <li><label>Release Date: </label><span> {releaseDate}  </span></li>
                    <li><label>Actors: </label><span> {actors} </span></li>
                    <li><label>Story Line: </label><span> {storyLine} </span></li>
                </ul>
            </nav> 
        </article>
    )
}

export default RecomandMiniComponent;

