import './movies.css'
import movie1  from "../../img/mini/rsz_furious-7.jpg";

const MoviesMiniComponent =()=>{
    return (
            <article className="movie-mini hvr-curl-top-right hvr-shrink" onClick="sendIdToMovie(2)" > 
                <img src={movie1} alt="movie1"/>
            </article>
        )
    }

export default MoviesMiniComponent;