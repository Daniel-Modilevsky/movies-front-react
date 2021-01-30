// import "../users/user.css"
import NavBarComponent from "../navbar/navbar"
import RecomandationSliderComponent from "../recomandations/recomandations-slider"
import MoviesListsComponent from "../movies/movies-list"
import MoviesMiniComponent from "../movies/movies-mini"



const HomePage =()=>{
    return (
        <div>
            <NavBarComponent/>
            <RecomandationSliderComponent/>
            <MoviesListsComponent/>
            <MoviesMiniComponent/>
        </div>


    );
}

export default HomePage;