import React, { Component}  from "react";
import './comments.css'

class CommentMiniComponent extends Component{
    render(){
        return (
            <article class="pid-comment hvr-rectangle-out ">
                <div class="article-body">
                    <label>comment.creationByName:</label>
                    <p> comment.description </p>
                </div>
                <footer class="article-footer">
                    <ul>
                        <li class="icon-left"><i class="bx bx-message"></i><span>1</span></li>
                        <li class="icon-right"><i class="bx bx-heart"></i><span>1</span></li>
                    </ul>
                </footer>
            </article> 
        )
    }
}

export default CommentMiniComponent;