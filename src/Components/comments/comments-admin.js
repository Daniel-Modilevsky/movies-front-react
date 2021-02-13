import React, { useState, useEffect } from 'react';
import './comments.css'
import { BiCheckCircle } from 'react-icons/bi';
import { BiXCircle } from 'react-icons/bi';
//import { withSwalInstance } from 'sweetalert2-react';
//import swal from 'sweetalert2';
//const SweetAlert = withSwalInstance(swal);
import Swal from 'sweetalert2';

function CommentAdminComponent(props){
    const [commentID, setCommentID] = useState("");
    const [movieID, setMovieID] = useState("");
    const [iamge, setImage] = useState("");
    const [creationByName, setCreationByName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        adminCommentHandler(props.comment)
        getMoviePicture(props.comment.commentOn);
    });
    function adminCommentHandler(comment){
        setCommentID(props.comment._id)
        setCreationByName(props.comment.creationByName);
        setDescription(props.comment.description);
        setMovieID(props.comment.commentOn);
    }
    async function approveComment(e){
        e.preventDefault();
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/approvecomments/${commentID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) { 
                Swal.fire(
                    'Success!',
                    'The comment is approved!',
                    'success'
                ).then(()=>{window.location.replace('/admin')})    
            }
        }
        catch(error){
            console.log(`error - approveComment - ${error}`);
        }
    }
    async function rejectComment(e){
        e.preventDefault();
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/comments/${commentID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) { 
                Swal.fire(
                    'Success!',
                    'The comment is deleted!',
                    'success'
                ).then(()=>{window.location.replace('/admin')}) 
            }
        }
        catch(error){
            console.log(`error - rejectComment - ${error}`);
        }
    }
    async function getMoviePicture(movieID){
        try{
            await fetch(`https://movies-smart.herokuapp.com/api/movies/${movieID}`)
            .then(function(response){ return response.json(); })
            .then(function(data) {
            const movie = data;
            let image = 'https://movies-smart.herokuapp.com/' + movie.movie.image;
            setImage(image);
            });
        }
        catch(error){
            console.log(`error - getMoviePicture - ${error}`);
        }
    }
    return (
        <div className="pid-comment hvr-rectangle-out ">
            <section className="comment-movie">
                <img src={iamge} alt="iamge"/>
            </section>
            <section className="article-body">
                <label>{creationByName}:</label>
                <p> {description} </p>
            </section>
            <section className="comment-buttons">
                <BiCheckCircle className="button-ok"  onClick={approveComment}/>
                <BiXCircle className="button-cancel" onClick={rejectComment}/>
            </section>
        </div> 
    );
}

export default CommentAdminComponent;