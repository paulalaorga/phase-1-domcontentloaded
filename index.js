document.addEventListener("DOMContentLoaded", function(textChange) {
    const element = document.getElementById("text");
    element.textContent = 'This is really cool!';
    console.log(textChange());
});// Your code goes here