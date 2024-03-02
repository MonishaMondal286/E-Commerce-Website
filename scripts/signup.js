

//we access the form and add a function 
var formSubmission =document.querySelector("form").addEventListener("submit",function(event){

event.preventDefault();


//here we are wraping the form data into this object
var signupData={

    userName:document.querySelector("#user_name").value,
    userNumber:document.querySelector("#user_number").value,
    userEmail:document.querySelector("#user_email").value,
    userPassword:document.querySelector("#user_password").value,
    userPasswordConfirm:document.querySelector("#user_password_confirm").value,

}

console.log(signupData)

localStorage.setItem("signupDetails",JSON.stringify(signupData));

window.location.href="login.html"


})