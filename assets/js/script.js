//search
const search = document.getElementById('search');
const searchBox = document.querySelector('.searchBox');

const menu = document.getElementById('menu-link');
const navbar = document.querySelector('.navbar');

search.addEventListener('click', () => {
  search.classList.toggle('bx-x');
  searchBox.classList.toggle('active');
});
window.onscroll = function(){
  search.classList.remove('bx-x');
  searchBox.classList.remove('active');
}

menu.addEventListener('click', function(){
  //menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}