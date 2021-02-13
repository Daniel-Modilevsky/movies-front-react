import NavBarComponent from "../navbar/navbar"
import TopRatedListsComponent from '../movies/toprated-list'

const TopRatedPage =()=>{
    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Top Rated Page</h1>
                </header>
                <div id="pid">  
                    <TopRatedListsComponent/>
                </div>
            </main>
        </div>
    );
}

export default TopRatedPage;