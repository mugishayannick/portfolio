var input_1 = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");

input_1.forEach(function(input_field){
    input_1.addEventListener("input", function(){
        if(input_field.value.length > 3){
            login_btn.diabled = false;
            login_btn.className = "btn enabled";
        }

    })
})
function validation(){
    var input_text = document.querySelector("fname");
    var input_text = document.querySelector("fname");
    var error_msg = document.querySelector("error_msg");

    if(input_1.value.length <=3 ||input_password.value.length ){
        error_msgs.style.display = "inline-block";
        return false;
    }
    else{
        return true;
    }
}