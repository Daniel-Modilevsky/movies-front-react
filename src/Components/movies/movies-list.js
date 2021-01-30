import $ from 'jquery'; 
import React ,{useEffect} from 'react';
import './movies.css'

const MoviesListsComponent =()=>{
        
    
    useEffect(()=>{
        getMoviesByCategory('Comedy', '.list1');
        getMoviesByCategory('Action', '.list2');
        getMoviesByCategory('Drama', '.list3');
        
      })
    
    
    async function getMoviesByCategory(category,list){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/categories/${category}`);
            if (response.ok) { 
                let json = await response.json();
                $(list).empty();
                $(list).append(`<h4>${category}</h4>`);
                json.forEach(movie => {
                    $(list).append(
                    '<article class="movie-mini hvr-curl-top-right hvr-shrink" onClick="sendIdToMovie(\'' + movie._id + '\')" >' +
                    "<img src = '" +'https://movies-smart.herokuapp.com/' + movie.image + "'>" +
                    "</article>"
            );
        });
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getMoviesByCategory - ${error}`);
        }
    }
    
    
    
    
    return (

            <div id="pid">  
            <div class="movies-list list1">
            </div>
             <div class="movies-list list2">
            </div>
             <div class="movies-list list3">
            </div>
        </div>


        )
    }

export default MoviesListsComponent;