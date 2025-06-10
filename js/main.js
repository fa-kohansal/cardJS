function calcAge(event){
   console.log("yes");
   let today = new Date();
   console.log(today);
   let birthInput = document.getElementById("birthDate").value;
   let birthDate= new Date(birthInput);
   let age = today.getFullYear() - birthDate.getFullYear();
   const m = today.getMonth() - birthDate.getMonth();
   if (m<0||( m===0 && today.getDate() < birthDate.getDate() )){
    age--;
   }
   console.log(age);
   
   event.preventDefault();
    
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        calcAge(event);
    });
});
