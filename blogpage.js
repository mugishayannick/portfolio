const nav = document.getElementById("menu");
    const burger = document.getElementById("burger")

    burger.addEventListener("click", () => {

        if (nav.classList.contains('active')) {
        nav.classList.remove('active');
           } else {
            nav.classList.add('active');
           }
    
});
