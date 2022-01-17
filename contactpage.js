const nav = document.getElementById("menu");
    const burger = document.getElementById("burger")

    burger.addEventListener("click", () => {
    
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
           } else {
            nav.classList.add('active');
           }
        
    });
const contactForm=document.querySelector('.contact-form');
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.querySelector('#name').value;
    const email=document.querySelector('#email').value;
    const phone=document.querySelector('#phone').value;
    const text=document.querySelector('#w3review').value;
    if(name.length==0){
        document.querySelector('.error-name').innerHTML="Please enter a name";
    }else if(email.length==0){
        document.querySelector('.error-email').innerHTML="Please enter your email";
    }else if(phone.length==0){
        document.querySelector('.error-phone').innerHTML="Please enter telephone number";
    }else if(text.length==0){
        document.querySelector('.error-text').innerHTML="Please enter your query";
    }else{
        contactForm.submit();
    }
});
const contactFormEl=document.querySelectorAll('#name,#email,#phone,#w3review');
contactFormEl.forEach((el,index)=>{
    el.addEventListener('change',(e)=>{
        var val=e.target.value;
        if(val.length>0 && e.target.id=='name'){ 
            document.querySelector('.error-name').style.display="none";
        }else if(val.length>0 && e.target.id=='email'){ 
            document.querySelector('.error-email').style.display="none";
        }else if(val.length>0 && e.target.id=='phone'){ 
            document.querySelector('.error-phone').style.display="none";
        }else if(val.length>0 && e.target.id=='w3review'){ 
            document.querySelector('.error-w3review').style.display="none";
        }      
    });
});