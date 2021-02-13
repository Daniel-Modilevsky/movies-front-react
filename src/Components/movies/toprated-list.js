import React ,{useEffect, useState} from 'react';
import './movies.css'
import TopRatedMiniComponent from './toprated-mini'

const TopRatedListsComponent = ()=>{
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        getTopRated();
    },[])
    async function getTopRated(){
        try{
            await fetch(`https://movies-smart.herokuapp.com/api/toprated`)
                .then(function(response){ return response.json(); })
                .then(function(data) {
                    console.log(data);
                    let ratedmovies = data.ratedMovies;
                    setMovies(ratedmovies);
            });
        }
        catch(error){
            console.log(`error - getMoviesByCategory - ${error}`);
        }
    };

    return (
        <div className ={`top-rated-list`}>
            {movies.map((item,index)=> { return <TopRatedMiniComponent key = {index} movie = {item} /> })}
        </div>
    )
}

export default TopRatedListsComponent;