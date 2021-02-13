import NavBarComponent from "../navbar/navbar"
import MovieShowComponent from '../movies/movies-show'
import CommentFormComponent from '../comments/comments-form'
import CommentListComponent from '../comments/comments-list'

const MoviePage =()=>{
    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Movie Page</h1>
                </header>
                <MovieShowComponent/>
                <CommentFormComponent/>
                <CommentListComponent/> 
            </main>
        </div>
    );
}

export default MoviePage;