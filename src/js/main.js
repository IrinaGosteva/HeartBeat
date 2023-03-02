$(document).ready(function () {
  //slider
  $(".main-slider__imgs").slick({
    infinite: true,
  });

  //tabs element
  const tabs = document.querySelectorAll(".catalog__tabs");
  const catalogContent = document.querySelectorAll("div.catalog__content");

  tabs[0].addEventListener("click", (e) => {
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

  [...cards].map((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let targetItem = item.querySelectorAll(".catalog-item__back")[0];
      if (e.target.classList.contains("catalog__reed-more")) {
        targetItem.classList.remove("d-none");
      }
      if (e.target.classList.contains("close-btn")) {
        targetItem.classList.add("d-none");
      }
    });
  });

  //modal window
  const buttonsCallBack = document.querySelectorAll(
    "[data-modal='consultation']"
  );
  const overlay = document.querySelector(".overlay");
  const modalClose = document.querySelectorAll(".modal__close");
  const consultation = document.querySelector(".modal");
  const itemBtn = document.querySelectorAll(".catalog-item .btn_sm");
  const order = document.getElementById("order");
  const modalDescriptionText = order.querySelector(".modal__description");

  function mapItem(collection, fn) {
    [...collection].map((item) => {
      item.addEventListener("click", (e) => {
        fn(e.target);
      });
    });
  }

  function openModal() {
    overlay.classList.remove("d-none");
    consultation.classList.remove("d-none");
  }

  function closeModal() {
    overlay.classList.add("d-none");
    order.classList.add("d-none");
  }

  function getTitle(target) {
    const catalogCardTitle = target.parentNode.parentNode.querySelector(
      ".catalog__card-title"
    );
    modalDescriptionText.textContent = catalogCardTitle.textContent;
    overlay.classList.remove("d-none");
    order.classList.remove("d-none");
  }

  mapItem(buttonsCallBack, openModal);
  mapItem(modalClose, closeModal);
  mapItem(itemBtn, getTitle);

});
