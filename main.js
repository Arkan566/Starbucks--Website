let menu =document.querySelecto('#menu-icon');
let navbar = document.querySelector('navbar');

menu.onclick = function () {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


window.onscroll = () =>{
  menu.classList.remove(bx-x);
  navbar.classList.remove('active')
}