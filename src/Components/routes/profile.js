import NavBarComponent from "../navbar/navbar"
import React, { useEffect, useState } from 'react';
import '../comments/comments.css'
import '../users/user.css'
import user  from "../../img/profile-demo.png";
import admin  from "../../img/profile-demo2.jpg";
import CommentProfileComponent from '../comments/comments-profile'

const ProfilePage =()=>{    
    const [image, setMovieImage] = useState('');
    const [userName] = useState(localStorage.getItem('userName'));
    const [userMail] = useState(localStorage.getItem('userMail'));
    const [userID] = useState(localStorage.getItem('userID'));
    const [userComments, setUserComments] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('isAdmin') === 'user'){
            setMovieImage(user);
        }
        else{
            setMovieImage(admin);
        }
        getUserComments();
    },[])

    async function getUserComments(){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/usercomments/${userID}`);
            if (response.ok) { 
                let object = await response.json();
                setComments(object.comments);
                setUserComments(object.comments.length)
            }
        }
        catch(error){
            console.log(`error - getUserTrains - ${error}`);
        }
    }
    return (
        <div>
            <NavBarComponent/>
            <main>
                <header>
                    <h1>Profile Page</h1>
                </header>
                <div id="my-profile">
                    <article>
                        <aside>
                            <img src={image} alt="images"/> 
                        </aside>
                        <nav>
                            <ul>
                                <li><label>Name: </label><span className="movie-name"> {userName} </span></li>
                                <li><label>Email: </label><span> {userMail} </span></li>
                                <li><label>Total Comments: </label><span> {userComments}</span></li>
                            </ul>
                        </nav>
                    </article>
                </div>
                <div id="my-profile-list">
                    {comments.map((item,index)=> { return <CommentProfileComponent key = {index} comment = {item} /> })}
                </div>
            </main>
        </div>
    );
}

export default ProfilePage;