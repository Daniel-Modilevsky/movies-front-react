import React from 'react';
function ServiceAll() {
    async function getAllUsers(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/users');
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getAllUsers - ${error}`);
        }
    }
    async function getAllMovies(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/movies');
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getAllMovies - ${error}`);
        }
    }
    async function getAllComments(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/comments');
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getAllComments - ${error}`);
        }
    }
    async function getAllAdminComments(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/admincomments');
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getAllUsers - ${error}`);
        }
    }
    async function postLogin(user_name, password){
        try{
            const formData = {
                'user_name' : user_name,
                'password': password
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - postLogin - ${error}`);
        }
    }
    async function postRegister(user_name, email,password, password2){
        try{
            const formData = {
                'user_name' : user_name,
                'email': email,
                'password': password,
                'password2': password2
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/authentication/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - postRegister - ${error}`);
        }
    }
    async function getPopulars(){
        try{
            let response = await fetch('https://movies-smart.herokuapp.com/api/populars');
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getPopulars - ${error}`);
        }
    }
    async function getMoviesByCategory(category){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/categories/${category}`);
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getMoviesByCategory - ${error}`);
        }
    }
    async function getIMDB(name){
        try{
            const formData = {
                'name' : name
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/movies/IMDB', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getIMDB - ${error}`);
        }
    }
    async function postComment(description, creationBy, commentOn, creationByName ){
        try{
            const formData = {
                'description' : description,
                'creationBy': creationBy,
                'commentOn': commentOn,
                'creationByName': creationByName
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - postComment - ${error}`);
        }
    }
    async function getMovieComments(movieID){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/moviecomments/${movieID}`);
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getMovieComments - ${error}`);
        }
    }
    async function getMovie(movieID){
        try{
            let response = await fetch(`https://movies-smart.herokuapp.com/api/movies/${movieID}`);
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - getMovie - ${error}`);
        }
    }
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
    const handleClick1 = e =>{
        e.preventDefault();
        getAllUsers();
    }
    const handleClick2 = e =>{
        e.preventDefault();
        getAllMovies();
    }
    const handleClick3 = e =>{
        e.preventDefault();
        getAllComments();
    }
    const handleClick4 = e =>{
        e.preventDefault();
        getAllAdminComments();
    }
    const handleClick5 = e =>{
        e.preventDefault();
        postLogin('susu', 'susu1234');
    }
    const handleClick6 = e =>{
        e.preventDefault();
        postRegister('david2', 'david2@gmail.com','david123','david123'  );
    }
    const handleClick7 = e =>{
        e.preventDefault();
        getPopulars();
    }
    const handleClick8 = e =>{
        e.preventDefault();
        getMoviesByCategory('Comedy');
    }
    const handleClick9 = e =>{
        e.preventDefault();
        getIMDB('Lucy');
    }
    const handleClick10 = e =>{
        e.preventDefault();
        let description = "Awsomeee :)";
        let creationBy = "5fdf1c51968be632f0b3c60a";
        let commentOn = "5fe3a38b154ccf347419c1ab";
        let creationByName = "anar";
        postComment(description, creationBy, commentOn, creationByName);
    }
    const handleClick11 = e =>{
        e.preventDefault();
        let movieID = "5fe3a38b154ccf347419c1ab";
        getMovieComments(movieID);
    }
    const handleClick12 = e =>{
        e.preventDefault();
        let movieID = "5fe3a38b154ccf347419c1ab";
        getMovie(movieID);
    }
    const handleClick13 = e =>{
        e.preventDefault();
        let commentID = "601503d7e01ac00017d410f0";
        approveComment(commentID);
    }
    const handleClick14 = e =>{
        e.preventDefault();
        let commentID = "601503d7e01ac00017d410f0";
        rejectComment(commentID);
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick1}>GET All Users</button>
            <button className="btn btn-primary" onClick={handleClick2}>GET All Movies</button>
            <button className="btn btn-primary" onClick={handleClick3}>GET All Comments</button>
            <button className="btn btn-primary" onClick={handleClick4}>GET All Admin Comments</button><br/>
            <button className="btn btn-success"onClick={handleClick5}>Login</button>
            <button className="btn btn-success" onClick={handleClick6}>Register</button>
            <button className="btn btn-primary" onClick={handleClick7}>Populars</button>
            <button className="btn btn-primary" onClick={handleClick8}>Comedy</button>
            <button className="btn btn-success" onClick={handleClick9}>IMDB</button>
            <button className="btn btn-success" onClick={handleClick10}>Create Comment</button><br/>
            <button className="btn btn-primary" onClick={handleClick11}>get movie comments</button>
            <button className="btn btn-primary" onClick={handleClick12}>get movie</button>
            <button className="btn btn-info" onClick={handleClick13}>approve comment</button>
            <button className="btn btn-danger" onClick={handleClick14}>cancel comment</button>
        </div>
    )
}

export default ServiceAll;