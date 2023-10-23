const header = document.querySelector('header');

function scrollEffect (){
    if (window.scrollY > 0){
    header.classList.add('rolagem')
} else {
    header.classList.remove('rolagem')
}
}

document.addEventListener('scroll', scrollEffect);

const menuburger = document.getElementsByClassName('bx-menu');
const navlist = document.getElementById('navlist');
function openMenu(){
        navlist.classList.add("openMenu")
}

menuburger.addEventListener('click', openMenu())
