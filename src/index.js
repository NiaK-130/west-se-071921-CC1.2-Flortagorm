
//grab data


const imgUrl = "https://distinct-vaulted-freesia.glitch.me/image"
const titlePic = document.getElementById('fg-title')
const imageId = document.getElementById('fg-image')
const likesvalue = document.getElementById('fg-likes')
const likesButton = document.getElementById('like-button')
const commentId = document.getElementById('fg-comments')
const commentForm = document.getElementById('comment-form')


fetch(imgUrl)
.then(res => res.json())
.then(data => renderImage(data))

// put data on page 
//need a click event for the likes button 

let likes = 0;

likesButton.addEventListener('click', () => {  //don't care about the function here just care about the click
    likes += 1 //incrementing the number
    renderLikes(); //putting the likes back on the page 
});


commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(e.target.comment.value); // this is for the form, calling the input we add 
    e.target.comment.value = ' ';
})


function renderImage(data){
    console.log("check-data",data)
    titlePic.textContent = data.title; // provides the title 
    imageId.src = data.image; // gets the image 
    renderLikes(data.likes); 
    setComments(data.comments)

}

function renderLikes(){ // likes has the number and the "likes" word as well so easier to do seperate function 
    likesvalue.textContent = `${likes} likes`
}


function setComments(comments){
    commentId.textContent = ' '; //remove the existing comments
    comments.forEach(comment => addComment(comment.content)) // get each comment in the content
    console.log(comments)

}


function addComment(comment){
    const li = document.createElement('li') // removed the existing comments, so need to create new task elements to store new comments
    li.textContent = comment; // the comment we provide 
    commentId.append(li) // want to append all the li's to the id
}