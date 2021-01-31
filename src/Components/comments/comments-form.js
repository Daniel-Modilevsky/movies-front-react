import React, { Component}  from "react";
import './comments.css'
import profile  from "../../img/profile-demo.png";

class CommentFormComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            description: '',
            creationBy: '',
            commentOn: '',
            creationByName: ''
        };
    }
    descriptionHandler = (event) => {
        this.setState({description: event.target.value});
        this.setState({creationBy: "5fdf1c51968be632f0b3c60a"});
        this.setState({commentOn: "5fe3a38b154ccf347419c1ab"});
        this.setState({creationByName: "anar"});
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
                let json = await response.json();
                console.log(json);
            }
        }
        catch(error){
            console.log(`error - postComment - ${error}`);
        }
    }

    render(){
        return (
            <section id="my-comment" className="hvr-underline-from-left">
              <img src={profile} alt="profile"/>
                <form id="" method="post" onSubmit={this.mySubmitHandler}>
                    <textarea className="" placeholder="What's Happening?" id="description" name="description" onChange={this.descriptionHandler}></textarea>
                    <button type="submit" className="btn btn-danger" id="comment-button">Comment</button>
                </form>
            </section>
        )
    }
}

export default CommentFormComponent;


