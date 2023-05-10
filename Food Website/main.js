/*var x = document.querySelector('#bars');
var y = document.querySelector('.nav');
 function menubar(){
    x.classList.toggle('fas fa-times');
    y.classList.toggle('active');
}*/
window.onclick = () =>{
    menu.classList.remove('fa fa-times');
    navbar.classList.remove('active');
}
/*function clickable(){
    document.getElementById('seach-form');
}*/

document.querySelector('#close').onclick = () =>{
    document.querySelector('#seach-form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });