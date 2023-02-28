$(document).ready(function () {
  //slider
  $(".main-slider__imgs").slick({
    infinite: true,
  });


  //tabs element
  const tabs = document.querySelectorAll(".catalog__tabs");
  const catalogContent = document.querySelectorAll("div.catalog__content");

  tabs[0].addEventListener("click", (e)=> {
    let i = e.target.id;
    [...tabs[0].children].map((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");

    [...catalogContent].map((item) => {
      item.classList.add("d-none");
    });
    catalogContent[i].classList.remove("d-none");
  });


  //cards elements
  const cards = document.querySelectorAll(".catalog-item");

  [...cards].map(item => {
    item.addEventListener("click", (e)=> {
      e.preventDefault();
      let targetItem = item.querySelectorAll('.catalog-item__back')[0];
      if (e.target.classList.contains('catalog__reed-more')) {
        targetItem.classList.remove("d-none");
      }
      if (e.target.classList.contains('close-btn')) {
        targetItem.classList.add("d-none");
     }
    });
  })


});