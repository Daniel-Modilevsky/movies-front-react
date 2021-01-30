import React, { Component}  from "react";
import './movies.css'
import movie1  from "../../img/mini/rsz_furious-7.jpg";


class MovieShowComponent extends Component{
    render(){
        return (
            <div id="movie">
                <section id='movie-image'>
                    <img src={movie1} alt="movie1"/>
                </section>

                <div id='movie-details'>
                <navbar class='movie-left'>
                        <ul>
                            <li><label>Name</label> : <span class='movie-name'> data.title </span></li>
                            <li><label>Time</label> : <span> data.length </span></li>
                            <li><label>Year</label> : <span> data.year </span></li>
                            <li><label>Rate</label> : <span> data.rating </span></li>
                        </ul>
                    </navbar>
                    <aside class='movie-right'>
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
}

export default MovieShowComponent;