let btn = document.getElementById("btn");

let haveData = JSON.parse(localStorage.getItem("userData"));
if (!haveData) {
  window.location.href = "login.html";
}

btn.addEventListener("click", () => {
  localStorage.removeItem("userData");

  window.location.href = "login.html";
});
