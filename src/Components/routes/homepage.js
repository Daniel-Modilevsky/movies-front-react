// import "../users/user.css"
import NavBarComponent from "../navbar/navbar"
import RecomandationSliderComponent from "../recomandations/recomandations-slider"
import MoviesListsComponent from "../movies/movies-list"

const HomePage =()=>{
    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Home Page</h1>
                </header>
                <RecomandationSliderComponent/>
                <MoviesListsComponent/>
            </main>
        </div>
    );
}

export default HomePage;