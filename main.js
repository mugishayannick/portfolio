window.addEventListener('load',(e)=>{
    var urlAddress=window.location.href;
    if(urlAddress.includes('admin.html')){
        loadMessages();
    }
});
const nav = document.getElementById("menu");
    const burger = document.getElementById("burger")

    burger.addEventListener("click", () => {
    
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
           } else {
            nav.classList.add('active');
           }
    });
function loadMessages(){
    if(localStorage.getItem('messages')){
        var mymessages=JSON.parse(localStorage.getItem('messages'));
        var parentNode=document.querySelector('.messages');
        mymessages.forEach((element,index) =>{
            for (let i = 0; i < element.length; i++) {
                var listEl=document.createElement('li');
                var textNode=document.createTextNode(`Message:${mymessages[index][i].message}`);
                listEl.appendChild(textNode);
                parentNode.append(listEl);
            }         
        });
    }
}
    
    
    