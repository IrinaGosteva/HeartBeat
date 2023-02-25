$(document).ready(function(){
  $('.main-slider__imgs').slick({
    infinite: true,
  });
});


const tabs = document.querySelectorAll(".catalog__tabs");
const catalogContent = document.querySelectorAll("div.catalog__content");

tabs[0].addEventListener("click", function(e) {
  let i = e.target.id;
  [...tabs[0].children].map((item)=> {
    item.classList.remove("active");
  });
  e.target.classList.add("active");

  [...catalogContent].map(item=> {
    item.classList.add("d-none");
  })
  catalogContent[i].classList.remove("d-none");
});