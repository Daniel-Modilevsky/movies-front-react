import NavBarComponent from "../navbar/navbar"
import { writeStorage } from '@rehooks/local-storage';
import React,{useEffect } from 'react';
import $ from 'jquery';



const SmartPage = () => {
    function sendIdToMovie(idMovie) {
        writeStorage("movieID", idMovie);
    }

    async function getSmartVals() {
        try {
            const formData = {
                'Scarlett': $('input[name=Scarlett]').val(),
                'Pet': $('input[name=Pet]').val(),
                'vehicle': $('input[name=vehicle]').val(),
                'Category': $('input[name=Category]').val(),
                'Aliens': $('input[name=Aliens]').val(),
            };

            console.log(formData);
            let response =await fetch('https://movies-smart.herokuapp.com/api/movies/smart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            });
            if (response.ok) {
                let json = await response.json();
                writeStorage("movieName", JSON.stringify(json));
                await sendIdToMovie(json.item.id);
                window.location.replace('/movie');
             }
         }
         catch (error) {
            console.log(`error  ${error}`);
        }
    }
    useEffect(()=>{
         $(document).on('click', '#Search', function (e) {
             getSmartVals();
             e.preventDefault();
         });
      })

        return (
            <div>
                <NavBarComponent />
                <main>
                    <header>
                        <h1>Smart Page</h1>
                    </header>
                    <form data-aos="fade-up" id="search-form" style={{ marginLeft: "80px" }} >
                        <h1 style={{ color: "#1da1f2" }} >Smart Search </h1>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label style={{ color: "#D27E7E" }}>Your name first letter</label>
                                <input type="text" className="form-control" defaultValue="J" placeholder="Just one letter" name="FirstLetter" />
                            </div>
                            <div className="form-group col-md-6">
                                <label style={{ color: "#D27E7E" }}>How much do you like Scarlett Johansson?</label>
                                <br />
                                <input type="number" defaultValue="2" max="10" min="1" name="Scarlett" required />
                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label style={{ color: "#D27E7E" }}>Do you have any pet?</label>
                                <br />
                                <input name="Pet" type="radio" id="Yes" defaultValue="Yes" />
                                <label style={{ color: "white" }} htmlFor="Yes">Yes</label><br />
                                <input name="Pet" type="radio" id="No" defaultValue="No" defaultChecked />
                                <label style={{ color: "white" }} htmlFor="No">No</label><br />
                                <input name="Pet" type="radio" id="Other" defaultValue="Other" />
                                <label style={{ color: "white" }} htmlFor="Other">Wants to but dosent have</label>
                            </div>

                            <div className="form-group col-md-6">
                                <label style={{ color: "#D27E7E" }}>How do you get to work?</label>
                                <br />
                                <input type="radio" id="vehicle1" name="vehicle" defaultValue="Bike" />
                                <label style={{ color: "white" }} htmlFor="vehicle1"> By bike</label><br />
                                <input type="radio" id="vehicle2" name="vehicle" defaultValue="Car" />
                                <label style={{ color: "white" }} htmlFor="vehicle2"> By car</label><br />
                                <input type="radio" id="vehicle3" name="vehicle" defaultValue="Scooter" defaultChecked />
                                <label style={{ color: "white" }} htmlFor="vehicle3"> By scooter</label><br />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label style={{ color: "#D27E7E" }}>Which categories do you like the most?</label>
                                <br />
                                <input type="radio" id="Action" name="Category" defaultValue="Action" defaultChecked />
                                <label style={{ color: "white" }} htmlFor="Action"> Action</label><br />
                                <input type="radio" id="Drama" name="Category" defaultValue="Drama" />
                                <label style={{ color: "white" }} htmlFor="Drama"> Drama</label><br />
                                <input type="radio" id="Horor" name="Category" defaultValue="Horor" />
                                <label style={{ color: "white" }} htmlFor="Horor"> Horor</label><br />
                                <input type="radio" id="Romance" name="Category" defaultValue="Romance" />
                                <label style={{ color: "white" }} htmlFor="Romance"> Romance</label><br />
                                <input type="radio" id="Comedy" name="Category" defaultValue="Comedy" />
                                <label style={{ color: "white" }} htmlFor="Comedy"> Comedy</label><br />
                                <input type="radio" id="Sci-Fi" name="Category" defaultValue="Sci-Fi" />
                                <label style={{ color: "white" }} htmlFor="Sci-Fi"> Sci-Fi</label><br />
                            </div>
                            <div className="form-group col-md-6">
                                <label style={{ color: "#D27E7E" }}>Do you belive in Aliens?</label>
                                <br />
                                <input type="radio" id="astrologyYes" name="Aliens" defaultValue="Yes" />
                                <label style={{ color: "white" }} htmlFor="Yes"> Yes</label><br />
                                <input type="radio" id="astrologyNo" name="Aliens" defaultValue="No" defaultChecked />
                                <label style={{ color: "white" }} htmlFor="No"> No</label><br />
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 center">
                                <button className="btn btn-dark waves-effect waves-light m-r-10"
                                    id="Search">Search</button>
                                <button type="reset" className="btn btn-primary waves-effect waves-light m-r-10">Clear</button>
                            </div>
                        </div>  
                    </form>
                </main>
            </div>
        );
    }

    export default SmartPage;