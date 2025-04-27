
const form =document.querySelector(".signupform");
console.log(form);
const signUp=document.querySelector(".signup-form");
if (signUp){
signUp.addEventListener("submit",(event)=>{
    event.preventDefault();
    let userName=document.querySelector(".signupname").value;
    let email=document.querySelector(".signupemail").value;
    let password=document.querySelector(".signuppassword").value;

    const user={
        username:userName,
        email:email,
        password:password
        
    }
localStorage.setItem("user",JSON.stringify(user));
alert("Sign up is successful!");
location.reload();
});
}
const loginForm=document.getElementById("login-form");
if(loginForm){
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let luserName=document.querySelector(".Logininput").value;
    let lemail=document.querySelector(".Loginemail").value;
    let lpassword=document.querySelector(".Loginpassword").value;

    let storedInfo=JSON.parse(localStorage.getItem("user"));
    if(!storedInfo){
        alert("User not found!Sign UP")
        return;
    }else if(luserName==storedInfo.username && lemail==storedInfo.email && lpassword==storedInfo.password){
        alert("Login Successful");
   
    }else{
        alert("Wrong Credentials");
    }
    location.reload();


})
};