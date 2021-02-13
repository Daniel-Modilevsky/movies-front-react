import React, { useEffect, useState}  from "react";
import './movies.css'

const MovieShowComponent =()=>{
    const [movieID] = useState(localStorage.getItem('movieID'));
    const [movieName, setMovieName] = useState('');
    
    const [image, setMovieImage] = useState('');
    const [time, setMovieTime] = useState('');
    const [rate, setMovieRate] = useState('');
    const [year, setMovieYear] = useState('');
    const [categories, setMovieCategories] = useState('');
    const [actors, setMovieActors] = useState('');
    const [writer, setMovieWriter] = useState('');
    const [director, setMovieDirector] = useState('');
    const [plot, setPlot] = useState('');

    useEffect(()=>{
        getMovie();
        getIMDB();
    },[])
    async function getMovie(){
        try{
                await fetch(`https://movies-smart.herokuapp.com/api/movies/${movieID}`)
                .then(function(response){ return response.json(); })
                .then(function(data) {
                    console.log(data.movie);
                    setMovieName(data.movie.name);
                    setMovieYear(data.movie.year);
                    setMovieCategories(data.movie.categories);
                    setMovieActors(data.movie.actors);
                    setMovieWriter(data.movie.writer);
                    setMovieDirector(data.movie.director);
            });
        }
        catch(error){
            console.log(`error - getMovie - ${error}`);
        }
    }
    async function getIMDB(){
        try{
            const formData = {
                'name' : movieName
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/movies/IMDB', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                await response.json().then(async function(movie) {
                    console.log(movie);
                    setMovieImage(movie.data.poster);
                    setMovieRate(movie.data.rating);
                    setPlot(movie.data.plot);
                    setMovieTime(movie.data.length);
                })
            }
        }
        catch(error){
            console.log(`error - getIMDB - ${error}`);
        }
    }
    return (
        <div id="movie">
            <section id='movie-image'>
                <img src={image} alt="images"/> 
            </section>

            <div id='movie-details'>
            <div className='movie-left'>
                    <ul>
                        <li><label>Name</label> : <span className='movie-name'> {movieName} </span></li>
                        <li><label>Time</label> : <span> {time} </span></li>
                        <li><label>Year</label> : <span> {year} </span></li>
                        <li><label>Rate</label> : <span> {rate} </span></li>
                    </ul>
                </div>
                <aside className='movie-right'>
                    <ul>   
                        <li><label>Categories</label> : <span> {categories} </span></li>
                        <li><label>Actors</label> : <span> {actors} </span></li> 
                        <li><label>Writer</label> : <span> {writer} </span></li> 
                        <li><label>Director</label> : <span> {director} </span></li>
                    </ul>
                </aside>
                <p>
                    <label>Story Line</label> : <span> {plot} </span>
                </p>
            </div>
        </div>
    )
}

export default MovieShowComponent;


