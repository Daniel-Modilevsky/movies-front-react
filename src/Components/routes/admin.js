import NavBarComponent from "../navbar/navbar"
import React, { useState, useEffect } from 'react';
import CommentAdminComponent from '../comments/comments-admin'
import '../comments/comments.css'



const AdminPage =()=>{
    const [comments, setComments] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        getAllAdminComments()
    },[]);
    async function getAllAdminComments(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/admincomments');
            if (response.ok) { 
                let object = await response.json();
                setComments(object.comments);
                let today = new Date();
                let tempDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                setDate(tempDate);
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
                    <section class="header-admin">
                     <h2>Comments - { date }</h2>
                    </section>
                        {comments.map((item,index)=> { return <CommentAdminComponent key = {index} comment = {item} /> })}
                </div>
            </main>
        </div>
    );
}

export default AdminPage;