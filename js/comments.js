const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showComments(data))
};
loadComments();

const showComments =(comments) =>{
    const commentContainer = document.getElementById('comments_container')
    comments.forEach(comment =>{
        const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
            <h2>Name: ${comment.name}</h2>
            <h4>Email: ${comment.email}</h4>
            <p>Description: ${comment.body}</p>
            <button onclick ="loadSingleComment('${comment.id}')">Show Details</button>

        `;
        commentContainer.appendChild(div);
    })
};

const loadSingleComment = id =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showSingleComment(data))
}

const showSingleComment = comment =>{
    const singleComment = document.getElementById('single_comment');
    singleComment.textContent ='';
    const div = document.createElement('div')
        div.classList.add('comment')
        div.innerHTML = `
            <h2>Name: ${comment.name}</h2>
            <h4>Email: ${comment.email}</h4>
            <p>Description: ${comment.body}</p>

        `;
       
        singleComment.appendChild(div);
}