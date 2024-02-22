// const box2items = document.querySelectorAll(".box-2-items");


// function bounce() {
//     box2items.forEach((e) => {
//         e.addEventListener("mouseover", (event) => {

//             event.classList.add('a')
//         })
//     })
// }
// bounce()(

// var num  = 10%3;
// console.log(num)

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
    responsiveClass:true,
    center:true,
    nav:true,
    NavText:[
        "",
    ],
    responsive:{
        0:{
            items:1,
  
        },
        600:{
            items:2,
       
        },
        1000:{
            items:4,
            nav:true,
         
        }
    }
})
})

let navConatiner = document.getElementsByClassName("container-fluid")
let lastScrollTop =
  window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener(
  'scroll',
  function handleScroll() {
    const scrollTopPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      console.log('scrolling down');

     }
     else if (scrollTopPosition < lastScrollTop) {
      console.log('scrolling up');
    }
    lastScrollTop =
      scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false,
  
);
