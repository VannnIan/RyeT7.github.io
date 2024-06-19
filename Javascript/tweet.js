function postTweet() {
    const tweetContent = document.getElementById("tweetContent").value;

    const newPost = document.createElement("div");
    newPost.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.textContent = "New Post";

    const postContent = document.createElement("p");
    postContent.textContent = tweetContent;

    newPost.appendChild(postTitle);
    newPost.appendChild(postContent);

    const postsContainer = document.getElementById("posts");
    postsContainer.insertBefore(newPost, postsContainer.firstChild);

    document.getElementById("tweetContent").value = "";
}
