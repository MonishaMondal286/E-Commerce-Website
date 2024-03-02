

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

