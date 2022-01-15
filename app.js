var input_1 = document.querySelectorAll(".input");


input_1.forEach(function(input_1){
email.addEventListener("input", function(){
    if(email.value.length > 3){
        login.btn.disabled = false;
        login.btn.className = "btn enabled";
    }
 })  

})

function validation(){
    var email = document.querySelector("#Email")
    var password = document.querySelector("#Password")
    var error_msg = document.querySelector(".error_msg");

    if(input_text.value.length <= 3 || input_password.value.length <= 3){
        error_msg.getElementsByClassName.display= "inline-block";
        return false;
    }
    else{
        return true; 
    }
    
}