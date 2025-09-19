const menuDiv = document.querySelector('.menu-mobile');
const btn = document.querySelector('.btn-menu');
const navMobile = document.querySelector('.nav-link-mobile');

function openBtn() {    
    btn.classList.toggle('animar');
    menuDiv.classList.toggle('abrir') 
}