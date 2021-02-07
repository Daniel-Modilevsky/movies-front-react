import NavBarComponent from "../navbar/navbar"
import React, { useEffect } from 'react';
import $ from 'jquery'; 
import '../comments/comments.css'
import img from '../../img/profile-demo.png'
import '../users/user.css'

const ProfilePage =()=>{
    const userName = localStorage.getItem('userName');
    let userMail = localStorage.getItem('userMail');;
    let userID = localStorage.getItem('userID');;
    let userComments = 0;
    useEffect(()=>{
        getUserTrains();
        setTimeout(function(){ getUser(); }, 1000);
    })

    async function getUser(){
        try{
            $('#my-profile').empty();
            $('#my-profile').append(
                '<article><aside><img src = "'+img+'"></aside>'+
                '<nav><ul><li><label>Name: </label><span class="movie-name"> '+ userName +' </span></li>'+
                '<li><label>Email: </label><span> '+userMail +' </span></li>'+
                '<li><label>Total Comments: </label><span> '+ userComments +'</span></li></ul></nav>'+
                '</article></div>'
            );  
        }
        catch(error){
            console.log(`error - getUser - ${error}`);
        }
    }
    async function getUserTrains(){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/usercomments/${userID}`);
            if (response.ok) { 
                let object = await response.json();
                let comments = object.comments;
                userComments = comments.length;
                comments.forEach(comment => {
                    getComment(comment);
                });
            }
        }
        catch(error){
            console.log(`error - getUserTrains - ${error}`);
        }
    }
    async function getComment(comment){
        try{
            let image = '';
            console.log(comment)
            await fetch(`https://movies-smart.herokuapp.com/api/movies/${comment.commentOn}`)
            .then(function(response){ return response.json(); })
            .then(function(data) {
            const movie = data;
            image = 'https://movies-smart.herokuapp.com/' + movie.movie.image;
            console.log(image)
        })
            $('#my-profile-list').append(
            '<article class="pid-comment hvr-rectangle-out ">'+
            '<section class="comment-movie">'+
            '<img src = "'+image+'"></img>'+
            '</section><div class="article-body">' + 
            '<label>'+comment.creationByName+':</label>'+
            '<p>'+comment.description+'</p></div></article>'  
        );}
        catch(error){
            console.log(`error - getComment - ${error}`);
        }
    }

    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Profile Page</h1>
                </header>
                <div id="my-profile"></div>
                <div id="my-profile-list"></div>
            </main>
        </div>
    );
}

export default ProfilePage;