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

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #consultatin, #order, #thank-you-notification").fadeOut(
      "slow"
    );
  });

  $(".catalog-item .btn_sm").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__description").text(
        $(".catalog__card-title").eq(i).text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });


  //form validation

  function validateForm(value) {
    $(value).validate({
      rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: "required",
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: "Please, enter your name",
            minlength: jQuery.validator.format("It should be more than {0} characters!")
          },
        phone: "Please, enter your phone number",
        email: {
          required: "Please, enter your email",
          email: "The email address is wrong"
        }
    }
    });
  }

  validateForm("#order form");
  validateForm(".img-bg-section form");
  validateForm("#consultation form");
});
