import './recomandations.css'
import background  from "../../img/background-1.jpg";
import React,{useState,useEffect , useRef} from 'react';
import useInterval from '@use-it/interval';
import $ from 'jquery'; 

const RecomandationSliderComponent =()=>{
    let index =0;
    let data = [];


    async function getPopulars(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/populars');
            if (response.ok) { 
                let json = await response.json();
                data = json;
                displayPreviousImage(json , index);
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getPopulars - ${error}`);
        }
    }
    useEffect(()=>{
         getPopulars()
  
    })

      function displayPreviousImage(movies , index) {
        $("#our-recomandation").empty();
        let movie = movies[index];
        $('#our-recomandation').append("<img src = '" +'https://movies-smart.herokuapp.com/' + movie.image + "' class='img-popular-big' >" );
    }




    
     useInterval(() => {
         index++;
         if(index === 5) index = 0;
        displayPreviousImage(data,index);
       }, 3000);
    return (
    <div id="our-recomandation">
          <img src={background} alt="background"/>
     </div>
    )
}

export default RecomandationSliderComponent;