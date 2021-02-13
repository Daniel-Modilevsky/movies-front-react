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
                <div id="pid">  
                    <MoviesListsComponent  type = {'Comedy'}  />
                    <MoviesListsComponent  type = {'Action'}  />
                    <MoviesListsComponent  type = {'Drama'}   />
                </div>
            </main>
        </div>
    );
}

export default HomePage;