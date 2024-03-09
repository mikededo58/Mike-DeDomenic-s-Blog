const submitButton = document.getElementById("submit");
const userVal = document.getElementById("user");
const errorTextVal = document.getElementById("error");
const titleVal = document.getElementById("title");
const contentVal = document.getElementById("content");

//for submit
//redirect function,
//submit form
// use JSON to Save
// Create object

//Submit button to listin to input and create object
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const blogsData = JSON.parse(localStorage.getItem("blogEntry")) || [];
  const blogEntry = {
    // Making an object array with keys
    user: userVal.value.trim(),
    title: titleVal.value.trim(),
    content: contentVal.value.trim(),
  };
  blogsData.push(blogEntry);
  //storing object as an array in local storage
  localStorage.setItem("blogEntry", JSON.stringify(blogsData));
  renderMessage();
});
//retrieve previous array if one one exisit
function renderMessage() {
  if (user == "") {
    errorTextVal.innerText = "Please Finish the Form";
  } else if (title == "") {
    errorTextVal.innerText = "Please Finish the Form";
  } else if (content == "") {
    errorTextVal.innerText = "Please Finish the Form";
  } else {
    redirectPage();
  }
}

// redirecting to blog page function
function redirectPage() {
  window.location.href =
    "https://mikededo58.github.io/Mike-DeDomenic-s-Blog/blog";
}
