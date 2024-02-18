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
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
})