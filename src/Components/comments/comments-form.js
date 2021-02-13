import React, { Component}  from "react";
import './comments.css'
import user  from "../../img/profile-demo.png";
import admin  from "../../img/profile-demo2.jpg";
import Swal from 'sweetalert2';

class CommentFormComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            description: '',
            creationBy: '',
            commentOn: '',
            creationByName: '',
            image:''
        };
    }
    componentWillMount = () => {
        if(localStorage.getItem('isAdmin') === 'user'){
            this.setState({image: user});
        }
        else{
            this.setState({image: admin});
        }
    }
    descriptionHandler = (event) => {
        this.setState({description: event.target.value});
        this.setState({creationBy: localStorage.getItem('userID')});
        this.setState({commentOn: localStorage.getItem('movieID')});
        this.setState({creationByName: localStorage.getItem('userName')});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.postComment(this.state.description, this.state.creationBy, this.state.commentOn, this.state.creationByName);
    }
    postComment= async function (description, creationBy, commentOn, creationByName ){
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
                Swal.fire({
                    icon: 'info',
                    title: 'Waiting for admin approve',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        }
        catch(error){
            console.log(`error - postComment - ${error}`);
        }
    }

    render(){
        return (
            <section id="my-comment" className="hvr-underline-from-left">
              <img src={this.state.image} alt="profile"/>
                <form id="" method="post" onSubmit={this.mySubmitHandler}>
                    <textarea className="" placeholder="What's Happening?" id="description" name="description" onChange={this.descriptionHandler}></textarea>
                    <button type="submit" className="btn btn-danger" id="comment-button">Comment</button>
                </form>
            </section>
        )
    }
}

export default CommentFormComponent;


