import React, { Component}  from "react";
import './recomandations.css'
import background  from "../../img/background-1.jpg";

class RecomandationSliderComponent extends Component{
    render(){
        return (
        <div id="our-recomandation">
              <img src={background} alt="background"/>
         </div>
        )
    }
}

export default RecomandationSliderComponent;