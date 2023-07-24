const buttonClicked=document.getElementById("post-btn").addEventListener("click",function(){
    const comment=document.getElementById("comment-box");
    const commentToBePosted=comment.value;
    console.log(commentToBePosted);
    const createComment = document.createElement("p");
    createComment.innerText=commentToBePosted;
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(createComment);
    comment.value='';
})

