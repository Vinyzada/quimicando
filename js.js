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
    if(window.innerWidth <= 950){
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
    }
};
const ullistButton = document.getElementById('ullistTopics');
let verificador = 0;
function openSubMenu(){
    if(window.innerWidth <= 950){
        verificador++
        if(verificador%2 == 0){
            ullistButton.style.display = "none"
        }
        else{
            ullistButton.style.display = "block"
        }
    }
}   