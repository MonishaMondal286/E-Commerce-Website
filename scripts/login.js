import { navbar } from "../components/navbar_append.js";
import { footer } from "../components/footer_append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();




let logged_in=false;

var loginSubmission=document.querySelector("form")

var signupDetails=JSON.parse(localStorage.getItem("signupDetails"));


console.log(signupDetails)
loginSubmission.addEventListener("submit",function(){

    event.preventDefault();


    //here we access input data from user and wrap it in a object

    var data={
        eamil:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }

    if(signupDetails.userEmail==data.eamil && signupDetails.userPassword==data.password){
        alert("login Successful");
        window.location.href="index.html"
        logged_in=true

    }else{
        alert("user not found. Please create an account!");
        window.location.reload;
    }
    
})

