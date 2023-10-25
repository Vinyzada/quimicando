const header = document.querySelector('header');

function scrollEffect (){
    if (window.scrollY > 0){
    header.classList.add('rolagem');
} else {
    header.classList.remove('rolagem');
}
}

document.addEventListener('scroll', scrollEffect);

function openMenu(){
    const menuburger = document.getElementById('menu');
    const navlist = document.getElementById('navlist');

        if(menuburger.classList.value.indexOf("bx-x") > -1){
            navlist.classList.remove("openMenu");
            menuburger.classList.remove("bx-x");
            menuburger.classList.add("bx-menu");
        }else{
            navlist.classList.add("openMenu");
            menuburger.classList.remove("bx-menu");
            menuburger.classList.add("bx-x");
        }
};
function openSubMenu(){
    const ullistButton = document.getElementById('ullistTopics');
    if(ullistButton.style.display = "none"){
        ullistButton.style.display = "block"
    }
    else if(ullistButton.style.display = "block"){
        ullistButton.style.display = "none"
    }
}