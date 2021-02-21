import NavBarComponent from "../navbar/navbar"
import MoviesListsComponent from "../movies/movies-list"

const ListsPage =()=>{
    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Lists Page</h1>
                </header>
                <div id="pid">  
                    <MoviesListsComponent  type = {'Thriller'}   />
                    <MoviesListsComponent  type = {'Animation'}  />
                    <MoviesListsComponent  type = {'Adventure'}  />
                    <MoviesListsComponent  type = {'Comedy'}     />
                    <MoviesListsComponent  type = {'Action'}     />
                    <MoviesListsComponent  type = {'Drama'}      />
                </div>
            </main>
        </div>
    );
}

export default ListsPage;


