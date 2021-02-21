import React, { useState, useEffect}  from "react";
import './recomandations.css'
import RecomandMiniComponent from './recomandations-mini'

const RecomandListComponent =()=>{ 
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getPopulars();
    },[])

    async function getPopulars(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/populars');
            if (response.ok) { 
                let recomands = await response.json();
                console.log(recomands);
                setMovies(recomands);
            }
        }
        catch(error){
            console.log(`error - getPopulars - ${error}`);
        }
    }
    return (
            <div id="recommend-pid">
                {movies.map((item,index)=> { return <RecomandMiniComponent key = {index} movie = {item}/> })}
            </div>
        )
    }

export default RecomandListComponent;

