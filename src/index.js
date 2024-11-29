
// /// NavBar
// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.getElementById("menu-toggle")
//     menuIcon.addEventListener('click', function() {
//         menu(menuIcon);
//     })

// } )

// function menu(e) {
//     let list = document.querySelector('ul')

//     if (e.name === 'menu') {
//         e.name = "close"
//         list.classList.add('h-[30vh]');
//         list.classList.add('opacity-100');
//     }
// }


const icon = document.getElementById ('menu-toggle');
const navMenu = document.querySelector('.navMenu');

icon.addEventListener('click', () => {
    /// Toggle the visibilty of nav menu
    navMenu.classList.toggle("show");

    const isMenuOpen = navMenu.classList.contains("show");
    icon.setAttribute(
      "name",
      isMenuOpen ? "close-outline" : "menu-outline"
    );
})


// / REVIEW SECTION

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop:true ,
  spaceBetween: 20,
  grabCursor:false,
  slidesPerView: "auto",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets:false,
  },

// Navigation arrows
  navigation: {
     nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});
