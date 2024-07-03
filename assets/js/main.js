
// // const menuBtn = document.getElementById("menu-btn");
// // const navLinks = document.getElementById("nav-links");
// // //const menuBtnIcon = menuBtn.querySelector("i");

// // menuBtn.addEventListener("click", (e) => {
// //   navLinks.classList.toggle("open");

// //   const isOpen = navLinks.classList.contains("open");
// //   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// // });

// // navLinks.addEventListener("click", (e) => {
// //   navLinks.classList.remove("open");
// //   menuBtnIcon.setAttribute("class", "ri-menu-line");
// // });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header

ScrollReveal().reveal('.img-holder img', {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});

ScrollReveal().reveal('.subtitle', {
  ...scrollRevealOption,
  origin: "left",
  delay : 1000,
});

// About section

ScrollReveal().reveal('.col-md-3 img', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 500,
});

ScrollReveal().reveal('.title', {
  ...scrollRevealOption,
  origin: "left",
  delay : 1500,
});

// end header

ScrollReveal().reveal('.student', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2000,
});

ScrollReveal().reveal('.btn.btn-dark', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2500,
});

ScrollReveal().reveal('.title-text', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2000,
});

ScrollReveal().reveal('.btn.btn-primary.rounded.mt-3', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2500,
});

// end about section

// education

ScrollReveal().reveal('.budi-bakti', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 500,
});

ScrollReveal().reveal('.smp-ciwidey', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 900,
});

ScrollReveal().reveal('.mi', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 1300,
});

// end education

// organization

ScrollReveal().reveal('.it-club', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 500,
});

ScrollReveal().reveal('.wjlrc', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 900,
});

ScrollReveal().reveal('.gln', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 1300,
});

ScrollReveal().reveal('.scout', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 1700,
});

// end organization

// skill 

ScrollReveal().reveal('.html', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 500,
});

ScrollReveal().reveal('.css', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 900,
});

ScrollReveal().reveal('.mysql', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 1300,
});

ScrollReveal().reveal('.laravel', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 1700,
});

ScrollReveal().reveal('.ui', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 2100,
});

ScrollReveal().reveal('.java', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 2500,
});

ScrollReveal().reveal('.word', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 2900,
});

ScrollReveal().reveal('.excel', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 3300,
});

ScrollReveal().reveal('.power', {
  ...scrollRevealOption,
  origin: "bottom",
  delay : 3700,
});

// end skill

// project section

ScrollReveal().reveal('.omnifood', {
  ...scrollRevealOption,
  origin: "left",
  delay : 500,
});

ScrollReveal().reveal('.azlia_project', {
  ...scrollRevealOption,
  origin: "left",
  delay : 900,
});

ScrollReveal().reveal('.design', {
  ...scrollRevealOption,
  origin: "left",
  delay : 1300,
});

ScrollReveal().reveal('.laravel-project', {
  ...scrollRevealOption,
  origin: "left",
  delay : 1700,
});

ScrollReveal().reveal('.lisbon', {
  ...scrollRevealOption,
  origin: "left",
  delay : 1900,
});

ScrollReveal().reveal('.accordion', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2100,
});

ScrollReveal().reveal('.app-layout', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2500,
});

ScrollReveal().reveal('.carousel', {
  ...scrollRevealOption,
  origin: "left",
  delay : 2900,
});

ScrollReveal().reveal('.pagination', {
  ...scrollRevealOption,
  origin: "left",
  delay : 3300,
});

ScrollReveal().reveal('.table', {
  ...scrollRevealOption,
  origin: "left",
  delay : 3700,
});

ScrollReveal().reveal('.magazine', {
  ...scrollRevealOption,
  origin: "left",
  delay : 4100,
});

// end project section

// ScrollReveal().reveal(".img-holder img", {
//   ...scrollRevealOption,
//   delay: 500,
// });

// ScrollReveal().reveal(".header__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__content .header__btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// // ScrollReveal().reveal(" img-holder img", {
// //   ...scrollRevealOption,
// //   origin: "right",
// // });
// ScrollReveal().reveal(".explore__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".explore__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".explore__content .explore__btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".banner__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// ScrollReveal().reveal(".chef__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".chef__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".chef__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".chef__list li", {
//   ...scrollRevealOption,
//   delay: 1500,
//   interval: 500,
// });

// const swiper = new Swiper(".swiper", {
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//   },
// });