import React, { useEffect}  from "react";
import './recomandations.css'
import $ from 'jquery'; 

const RecomandListComponent =()=>{ 
    useEffect(()=>{
        getPopulars();
    })
    async function getPopulars(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/populars');
            if (response.ok) { 
                let recomands = await response.json();
                // console.log(object);
                // let recomands = object.comments;
                console.log(recomands);
                $("#recommend-pid").empty();
                recomands.forEach(movie => {
                    console.log(movie.name);
                    $('#recommend-pid').append(
                        "<article><aside><img src = '" +'https://movies-smart.herokuapp.com/' +  movie.image + "'></span></li>" +   
                        '</aside><nav><ul><li><label>Name: </label><span class="movie-name">'+  movie.name + '</span></li>'+    
                        '<li><label>Run Time: </label><span>'+ movie.runTime + '</span></li>'+   
                        '<li><label>Categories: </label><span>'+  movie.categories + '</span></li>'+   
                        '<li><label>Release Date: </label><span>'+  movie.releaseDate + '</span></li>'+   
                        '<li><label>Actors: </label><span>'+  movie.actors + '</span></li>'+   
                        '<li><label>Story Line: </label><span>'+  movie.storyline + '</span></li></ul></nav></article>' 
                    );
                });
            }
        }
        catch(error){
            console.log(`error - getPopulars - ${error}`);
        }
    }
    return (
            <div id="recommend-pid">
            </div>
        )
    }

export default RecomandListComponent;

