// blog form
//created elements
//render the blog

const blogSub = document.querySelector("#blog-post");

const blogPosts = JSON.parse(localStorage.getItem("blogEntry")) || [];
console.log(blogPosts);
function renderBlogPost() {
  // creating function to add blog post

  for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i]; //points to current array
    const container = document.createElement("div"); //creating div element for each post
    container.classList.add("entry-style"); // adding to id to each post
    const user = document.createElement("p"); //adding the content into the P inside the div
    user.textContent = blogPost.user;

    container.appendChild(user);

    const title = document.createElement("p");
    title.textContent = blogPost.title;

    title.classList.add("title-style"); //adding ID to P for CSS styling
    container.appendChild(title);

    title.classList.add("conten-style");
    const content = document.createElement("p");
    content.textContent = blogPost.content;

    container.appendChild(content); // appending objects to newly created classes

    blogSub.appendChild(container);
  }
}
renderBlogPost();
