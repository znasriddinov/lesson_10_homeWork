// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let btn = document.getElementById("btn");
let form = document.getElementById("form");

let getData = JSON.parse(localStorage.getItem("userData"));
console.log(getData);

if (getData) {
  window.location.href = "home.html";
}

const handleSubmit = (e) => {
  e.preventDefault();

  let email = e.target[0].value.trim();
  let password = e.target[1].value;

  localStorage.setItem("userData", JSON.stringify({ email, password }));

  e.target.reset();
  window.location.href = "home.html";
};

form.addEventListener("submit", handleSubmit);
