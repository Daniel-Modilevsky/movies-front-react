import React ,{useEffect, useState} from 'react';
import './movies.css'
import MoviesMiniComponent from './movies-mini'

const MoviesListsComponent =(props)=>{
    const [type] = useState(props.type);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getMoviesByCategory(props.type);
    },[])
    async function getMoviesByCategory(category){
        try{
            await fetch(`https://movies-smart.herokuapp.com/api/categories/${category}`)
                .then(function(response){ return response.json(); })
                .then(function(data) {
                setMovies(data);
                console.log(data);
            });
        }
        catch(error){
            console.log(`error - getMoviesByCategory - ${error}`);
        }
    }
    return (
            <div className ={`movies-list`}>
                <h4>{type}</h4>
                    {movies.map((item,index)=> { return <MoviesMiniComponent key = {index} movieID = {item._id} image = {item.image} /> })}
            </div>
        )
    }

export default MoviesListsComponent;