import minipic  from "../../img/mini/rsz_furious-7.jpg";

function CommentAdminComponent(props){
    console.log('d');
    console.log(props.description);
    return (
        <article class="pid-comment hvr-rectangle-out ">
            <section class="comment-movie">
                <img src={minipic} alt="minipic"/>
            </section>
            <section class="article-body">
                <label>{props.creationByName}:</label>
                <p> {props.description} </p>
            </section>
            <section class="comment-buttons">
                <box-icon name='check-circle' class="button-ok" onClick="okComment(3)"></box-icon>
                <box-icon name='x-circle' class="button-cancel" onClick="cancelComment(3)"></box-icon>
            </section>
        </article> 
    );

}

export default CommentAdminComponent;