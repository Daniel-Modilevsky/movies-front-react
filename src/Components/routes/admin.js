import NavBarComponent from "../navbar/navbar"
//import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import $ from 'jquery'; 
//import CommentAdminComponent from '../comments/comments-admin'
import '../comments/comments.css'

//const [comments, setComments] = useState(0);


const AdminPage =()=>{

    useEffect(() => {
        getAllAdminComments();
    });
    async function approveComment(commentID){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/approvecomments/${commentID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - approveComment - ${error}`);
        }
    }
    async function rejectComment(commentID){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/comments/${commentID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - rejectComment - ${error}`);
        }
    }
    // $(function() {
    //     $('#showBtn').click(function() {
    //       $('#output').text('');
          
    //       myComponent.show('Hello World!', function(text) {
    //         $('#output').text(text);
    //       });
    //     });
        
    //     $('#hideBtn').click(function() {
    //       myComponent.hide();
    //     });
    //   });
    async function getAllAdminComments(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/admincomments');
            if (response.ok) { 
                let object = await response.json();
                let comments = object.comments;
                let today = new Date(),
                date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                $('#Recomandation-pid').empty();
                $('#Recomandation-pid').append(
                    '<section class="header-admin"><h2>Comments - ' +  date + '</h2></section>'
                );
                let image = '';
                comments.forEach(comment => {
                    console.log(comment)
                    fetch(`https://movies-smart.herokuapp.com/api/movies/${comment.commentOn}`)
                    .then(function(response){ return response.json(); })
                    .then(function(data) {
                    const movie = data;
                    image = 'https://movies-smart.herokuapp.com/' + movie.movie.image;
                    console.log(image)
                    $('#Recomandation-pid').append(
                        //     <CommentAdminComponent creationByName={comment.creationByName} description={comment.description}></CommentAdminComponent>
                        // ===================================
                            '<article class="pid-comment hvr-rectangle-out ">'+
                            '<section class="comment-movie">'+
                            '<img src = "'+image+'"></img>'+
                            '</section><section class="article-body">' + 
                            '<label>'+comment.creationByName+':</label>'+
                            '<p>'+comment.description+'</p></div>'+
                            '<section class="comment-buttons">'+
                            '<box-icon name="check-circle" class="button-ok" onClick="approveComment(\'' + comment._id + '\')" ></box-icon>'+
                            '<box-icon name="x-circle" class="button-cancel" onClick="rejectComment(\'' + comment._id + '\')" ></box-icon></section></article>'   
                        );
                })


                    
                });
            }
        }
        catch(error){
            console.log(`error - getAllUsers - ${error}`);
        }
    }



    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Admin Page</h1>
                </header>
                <div id="Recomandation-pid">  
                </div>
            </main>
        </div>
    );
}

export default AdminPage;