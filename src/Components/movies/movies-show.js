import React, { useEffect}  from "react";
import './movies.css'
import movie1  from "../../img/mini/rsz_furious-7.jpg";
import $ from 'jquery'; 


const MovieShowComponent =()=>{
    let movieName = '';
    if(!movieName){
        movieName = 'Furious 7';
    }
    console.log(movieName);
    useEffect(()=>{
        getIMDB('Furious 7');
    })
    async function getIMDB(name){
        try{
            const formData = {
                'name' : name
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/movies/IMDB', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let movie = await response.json();
                console.log(movie);

                $("#movie").empty();
                $("#movie").append(
                "<section id='movie-image'>" + 
                "<img src='" + movie.data.poster + "'></section>"+
                "<div id='movie-details'><div className='movie-left'><ul>"+
                "<li><label>Name</label> : <span className='movie-name'>" +movie.data.title + "</span></li>" +
                "<li><label>Time</label> : <span>"+movie.data.length+"</span></li>" +
                " <li><label>Year</label> : <span>"+movie.data.year+"</span></li>" +
                "<li><label>Rate</label> : <span>"+movie.data.rating+"</span></li></ul></div>" +
                "<aside className='movie-right'><ul></ul></aside>"+       
                // "<li><label>Categories</label> : <span>"+movie.data.categories+"</span></li>"+
                // "<li><label>Actors</label> : <span>"+movie.data.actors+"</span></li>"+ 
                // "<li><label>Writer</label> : <span>"+movie.data.writer+"</span></li>"+ 
                // "<li><label>Director</label> : <span>"+movie.data.director+"</span></li></ul></aside>"+ 
                "<br>"+
                "<br>"+
                "<p><label>Story Line</label> : <span>"+ movie.data.plot+"</span></p></div>"
            );

            }
        }
        catch(error){
            console.log(`error - getIMDB - ${error}`);
        }
    }
    return (
        <div id="movie">
            <section id='movie-image'>
                <img src={movie1} alt="movie1"/>
            </section>

            <div id='movie-details'>
            <div className='movie-left'>
                    <ul>
                        <li><label>Name</label> : <span className='movie-name'> data.title </span></li>
                        <li><label>Time</label> : <span> data.length </span></li>
                        <li><label>Year</label> : <span> data.year </span></li>
                        <li><label>Rate</label> : <span> data.rating </span></li>
                    </ul>
                </div>
                <aside className='movie-right'>
                    <ul>   
                        <li><label>Categories</label> : <span> movie.categories </span></li>
                        <li><label>Actors</label> : <span> movie.actors </span></li> 
                        <li><label>Writer</label> : <span> movie.writer </span></li> 
                        <li><label>Director</label> : <span> movie.director </span></li>
                    </ul>
                </aside>
                <p>
                    <label>Story Line</label> : <span> data.plot </span>
                </p>
            </div>
        </div>
    )
}

export default MovieShowComponent;


