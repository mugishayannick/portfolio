const post=document.querySelectorAll('.post');
post.addEventListener('login', (e)=>{
    e.preventDefault();
    const fname=document.querySelectorAll('#fname').value;
    const password=document.querySelectorAll('#password').value;
    if(fname.length==0){
        document.querySelectorAll('.error-fname').innerHTML="please enter a valid email adress";
    }else if(fname.length==0){
        document.querySelectorAll('.error-password').innerHTML="please enter a correct password";
    }else{
        Form.login();
    }    

});
const postEl=document.querySelectorAll('#fname,#passowrd');
postEl.forEach((el,index)=>{
    el.addEventListener('change',(e)=>{
        var val=e.target.value;
        if(val.length>0 && e.target.id=='fname'){ 
            document.querySelector('.error-fname').style.display="none";
        }else if(val.length>0 && e.target.id=='password'){ 
            document.querySelector('.error-password').style.display="none";
        }
    });
});