import './recomandations.css'
import background  from "../../img/background-1.jpg";
import React,{useState,useEffect , useRef} from 'react';
import $ from 'jquery'; 

const RecomandationSliderComponent =()=>{
    let index =0;
    let [count, setCount] = useState(0);
    const [dataa,setDataa]=useState([]);
    async function getPopulars(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/populars');
            if (response.ok) { 
                let json = await response.json();
                setDataa(json);
                displayPreviousImage(json , index);
                index++;
                if(index === 5) index = 0;
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

       function useInterval(callback, delay) {
        // const savedCallback = useRef();
      
        // // Remember the latest callback.
        // useEffect(() => {
        //   savedCallback.current = callback;
        // }, [callback]);
      
        // // Set up the interval.
        // useEffect(() => {
        //   function tick() {
        //     savedCallback.current();
        //   }
        //   if (delay !== null) {
        //     let id = setInterval(tick, delay);
        //     return () => clearInterval(id);
        //   }
        // }, [delay]);
       }




      function displayPreviousImage(movies , index) {
        $("#our-recomandation").empty();
        let movie = movies[index];
        $('#our-recomandation').append("<img src = '" +'https://movies-smart.herokuapp.com/' + movie.image + "' class='img-popular-big' >" );

    }




    
     useInterval(() => {
         setCount(count + 1);
       }, 3000);
    return (
    <div id="our-recomandation">
          <img src={background} alt="background"/>
     </div>
    )
}

export default RecomandationSliderComponent;