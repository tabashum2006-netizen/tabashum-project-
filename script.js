document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {

e.preventDefault();

const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;

document.querySelector("#result").innerHTML =
"Welcome " + name + "<br>Email: " + email;

});

});
