import React, { Component}  from "react";
import './comments.css'
import profile  from "../../img/profile-demo.png";

class CommentFormComponent extends Component{
    render(){
        return (
            <section id="my-comment" class="hvr-underline-from-left">
              <img src={profile} alt="profile"/>
                <form id="" method="post">
                    <textarea class="" placeholder="What's Happening?" id="description" name="description"></textarea>
                    <button type="submit" class="btn btn-danger" id="comment-button">Comment</button>
                </form>
            </section>
        )
    }
}

export default CommentFormComponent;