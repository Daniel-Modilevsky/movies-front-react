import NavBarComponent from "../navbar/navbar"
import RecomandListComponent from '../recomandations/recomandations-list'
const RecomandPage =()=>{
    return (
        <div>
        <NavBarComponent/>
        <main>
            <header>
                <h1>Recomand Page</h1>
            </header>
            <RecomandListComponent/>
        </main>
    </div>
    );
}

export default RecomandPage;