const formarticle=document.querySelector('.form-article');
window.addEventListener('load',(e)=>{
    //get all articles 
    getArticles();
    // formarticle.classList.add("show");
});
formarticle==null ? null:formarticle.addEventListener('submit',(e) =>{
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const textbody=document.querySelector('#text').value;
    if(title.length==0){
        document.querySelector('error-title').innerHTML="please enter a title";
        document.querySelector('.error-title').style.color="red";
    }else if(text.length==0){
        document.querySelector('.error-text').innerHTML="please enter a text";
        document.querySelector(',error-text').style.color="red";
    }else{
        //add data to localstorage
        var textobject=[
            {
                articletitle:title,
                text:textbody,
                likes:[],
                comments:[],
            }
        ];
        if (localStorage.getItem('articles')) {
            //append
            var mytext=JSON.parse(localStorage.getItem('articles'));
            mytext.unshift(textobject);
            localStorage.clear();
            localStorage.setItem('articles',JSON.stringify(mytext));
        }else{
            //set localstorage key and value
            localStorage.setItem('articles',JSON.stringify(textobject));
        }
        window.location.href="addarticles.html";
    }
});

function getArticles(){
    var parentEl=document.querySelector('.list-articles');
    if(localStorage.getItem('articles')){
        var articles=JSON.parse(localStorage.getItem('articles'));
        articles ==null ?null :articles.forEach((element,index) => {
            for (let i = 0; i < articles[index].length; i++) {
                // console.log(articles[index][i].articletitle);
                var listEl=document.createElement('li');
                var listtext=document.createTextNode(`${articles[index][i].articletitle}`);
                listEl.appendChild(listtext);
                parentEl.append(listEl);
            }                     
        });
    }  
}