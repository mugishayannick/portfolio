const newarticle=document.querySelector('.newarticle');
newarticle.addEventListener('SAVE ARTICLE',(e) =>{
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const category=document.querySelector('#category').value;
    const text=document.querySelector('#text').value;
    if(title.length==0){
        document.querySelector('error-title').innerHTML="please enter a title";
        document.querySelector('.error-title').style.color="red";

    }else if(category.length==0){
        document.querySelector('.error-category').innerHTML="please select a category";
        document.querySelector('.error-category').style.color="red";
    }else if(text.length==0){
        document.querySelector('.error-text').innerHTML="please enter a text";
        document.querySelector(',error-text').style.color="red";
    }else{
        //newarticle.send();
        //add data to localstorage
        var textobject=[
            {
                visitortitle:title,
                visitorcategory:category,
                text:text,

            }
        ];
        if (localStorage.getItem('text')) {
            //append
            var mytext=JSON.parse(localStorage.getItem('text'));
            mytext.unshift(textobject);
            localStorage.setItem('text',JSON.stringify(mytext));
        }else{
            //set localstorage key and value
            localStorage.setItem('text',JSON.stringify(textobject));
        }
        console.log(JSON.parse(localStorage.getItem(text)));
         
    }

});
const newarticleEl=document.querySelectorAll('#title,#category,#text');
newarticleEl.forEach((el,index)=>{
    el.addEventListener('change',(e)=>{
        var val=e.target.value;
        if(val.length>0 && e.target.id=='title'){ 
            document.querySelector('.error-title').style.display="none";
        }else if(val.length>0 && e.target.id=='category'){
            document.querySelector('.error-category').style.display="none";
        }else if(val.length>0 && e.target.id=='text'){ 
            document.querySelector('.error-text').style.display="none";
        }
    });
});