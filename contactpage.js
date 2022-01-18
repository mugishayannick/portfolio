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
    const message=document.querySelector('#w3review').value;
    if(name.length==0){
        document.querySelector('.error-name').innerHTML="Please enter a name";
        document.querySelector('.error-name').style.color="red";
    }else if(email.length==0){
        document.querySelector('.error-email').innerHTML="Please enter your email";
        document.querySelector('.error-email').style.color="red";
    }else if(phone.length==0){
        document.querySelector('.error-phone').innerHTML="Enter telephone number";
        document.querySelector('.error-phone').style.color="red";
    }else if(message.length==0){
        document.querySelector('.error-text').innerHTML="Please enter your query";
        document.querySelector('.error-text').style.color="red";
    }else{
        //contactForm.submit();
        //add data to localstorage
        var messageObject=[
            {
                visitorname:name,
                visitoremail:email,
                visitorphone:phone,
                message:message,
            },
        ];
        if (localStorage.getItem('messages')) {
            //append 
            var mymessages=JSON.parse(localStorage.getItem('messages'));
            mymessages.unshift(messageObject);
            localStorage.setItem('messages',JSON.stringify(mymessages)); 
        } else {
            //set localstorage key and value 
            localStorage.setItem('messages',JSON.stringify(messageObject));           
        }
        console.log(JSON.parse(localStorage.getItem('messages')));
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