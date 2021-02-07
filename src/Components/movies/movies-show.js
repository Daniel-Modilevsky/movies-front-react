import React, { useEffect}  from "react";
import './movies.css'
import $ from 'jquery'; 


const MovieShowComponent =()=>{
    useEffect(()=>{
        getMovie();
    })

    async function getMovie(){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/movies/${localStorage.getItem("favoriteMovie")}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) { 
                let movie = await response.json();
                await getIMDB(movie.movie.name);
                console.log(movie.movie.name);
                const data = JSON.parse(localStorage.getItem("movieName"));
                console.log(movie);
                console.log(data);
                console.log(data.item.name);
                console.log(data.item.title);
                console.log(data.item.length);
                console.log(data.item.year);
                console.log(data.item.plot);

                $("#movie").empty();
                $("#movie").append(
                "<section id='movie-image'>" + 
                "<img src='" + data.item.poster + "'></section>"+
                "<div id='movie-details'><div className='movie-left'><ul>"+
                "<li><label>Name</label> : <span className='movie-name'>" +data.item.title + "</span></li>" +
                "<li><label>Time</label> : <span>"+data.item.length+"</span></li>" +
                " <li><label>Year</label> : <span>"+data.item.year+"</span></li>" +
                "<li><label>Rate</label> : <span>"+data.item.rating+"</span></li></ul></div>" +
                "<aside className='movie-right'><ul></ul></aside>"+       
                "<li><label>Categories</label> : <span>"+movie.movie.categories+"</span></li>"+
                "<li><label>Actors</label> : <span>"+movie.movie.actors+"</span></li>"+ 
                "<li><label>Writer</label> : <span>"+movie.movie.writer+"</span></li>"+ 
                "<li><label>Director</label> : <span>"+movie.movie.director+"</span></li></ul></aside>"+ 
                "<br>"+
                "<br>"+
                "<p><label>Story Line</label> : <span>"+ data.item.plot+"</span></p></div>"
            );

            }
        }
        catch(error){
            console.log(`error - getIMDB - ${error}`);
        }
    }





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
            }
        }
        catch(error){
            console.log(`error - getIMDB - ${error}`);
        }
    }
    return (
        <div id="movie">
            <section id='movie-image'>
                <img src={{}} alt="movie1"/>
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


