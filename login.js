const loginForm=document.querySelector('.loginForm');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    if(email.length==0){
        document.querySelector('.error-email').innerHTML="please enter a valid email adress";
    }else if(password.length==0){
        document.querySelector('.error-password').innerHTML="please enter a password";
    }else{
        //loginForm.submit();
        window.location.href="successpage.html";
    }    

});
const postEl=document.querySelectorAll('#email,#passowrd');
postEl.forEach((el,index)=>{
    el.addEventListener('change',(e)=>{
        var val=e.target.value;
        if(val.length>0 && e.target.id=='email'){ 
            document.querySelector('.error-email').style.display="none";
        }else if(val.length>0 && e.target.id=='password'){ 
            document.querySelector('.error-password').style.display="none";
        }
    });
});