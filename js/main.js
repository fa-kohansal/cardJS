function calcAge(event) {
  let today = new Date();
  let name = document.getElementById("clientName").value;
  let birthInput = document.getElementById("birthDate").value;
  let birthDate = new Date(birthInput);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  let username = document.getElementById("username");
  username.innerHTML = name;
  let ageElement = document.getElementById("userAge");
  ageElement.innerHTML = age;
  event.preventDefault();
  document.getElementById("infoCard ").classList.remove("d-flex");
  document.getElementById("infoCard ").classList.add("d-none");
  document.getElementById("showAge").classList.remove("d-none");
  document.getElementById("showAge").classList.add("d-block");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    calcAge(event);
  });
});
 

let resetHandler=()=>{
    document.getElementById("infoCard ").classList.remove("d-none");
    document.getElementById("infoCard ").classList.add("d-flex");
    document.getElementById("showAge").classList.remove("d-block");
    document.getElementById("showAge").classList.add("d-none");
    document.getElementById("username").innerHTML="";
    document.getElementById("userAge").innerHTML="";
    document.getElementById("clientName").value="";
}
