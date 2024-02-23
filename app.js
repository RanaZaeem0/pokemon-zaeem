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
//                        navbar fixer
let navConatiner = document.querySelector("#fixed-nav")

window.addEventListener('scroll' , function(){
  const scrollHeight =window.pageYOffset;
  const navHeight = navConatiner.getBoundingClientRect().height;
  console.log(navHeight);
if(scrollHeight>navHeight){
  navConatiner.classList.add("fixed-nav");
}
else{
  navConatiner.classList.remove("fixed-nav")
}
if(scrollHeight>500){

}


})