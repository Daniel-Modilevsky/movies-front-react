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
                comments.forEach(comment => {
                    console.log(comment.creationByName);
                     $('#Recomandation-pid').append(
                    //     <CommentAdminComponent creationByName={comment.creationByName} description={comment.description}></CommentAdminComponent>
                    // ===================================
                        '<article class="pid-comment hvr-rectangle-out ">'+
                        '<section class="comment-movie">'+
                            '<img src="../../img/mini/rsz_furious-7.jpg" alt="minipic"/>'+
                        '</section><section class="article-body">' + 
                        '<label>'+comment.creationByName+':</label>'+
                        '<p>'+comment.description+'</p></div>'+
                        '<section class="comment-buttons">'+
                        '<box-icon name="check-circle" class="button-ok" onClick="okComment(\'' + comment._id + '\')" ></box-icon>'+
                        '<box-icon name="x-circle" class="button-cancel" onClick="cancelComment(\'' + comment._id + '\')" ></box-icon></section></article>'   
                    );
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