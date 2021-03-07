$(function(){
  $('.project__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.projects__slider'
  });
  $('.projects__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.project__slider',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  
  $('.js-toggle-menu').click(function(e){
    e.preventDefault();
    console.log("true")
    $('.mobile__menu').slideToggle();
    $(this).toggleClass('open');
  });
  

  $('.form__input-phone, .call__input-phone').on('keypress', function(e) {
    if (e.which != 8 && e.which != 0 && (e.which < 43 || e.which > 57)) {
         return false;
    }
  });
  

  $("a.btn-scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 1000,
       easing: "swing"
    });
    return false;
  });


  var modal = document.getElementById("callModal");
  var btn = document.getElementById("callBtn");
  var btn1 = document.getElementById("callBtn1");
  var btn2 = document.getElementById("callBtn2");
  var close = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  btn1.onclick = function() {
    modal.style.display = "block";
  }
  btn2.onclick = function() {
    modal.style.display = "block";
  }
  close.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  // const buttons = {};
  // const $cartQuantity = document.querySelector('.cart-quantity');
  // const $buttonMore = document.querySelector('.cart-button--more');
  // const $buttonLess = document.querySelector('.cart-button--less');
  // let defaultCartQuantity = 5;

  // const updateCartQuantity = () => $cartQuantity.textContent = defaultCartQuantity;

  // $buttonMore.addEventListener('click', () => {
  //   defaultCartQuantity+=1;
  //   updateCartQuantity();
  // });

  // $buttonLess.addEventListener('click', () =>{
  //   defaultCartQuantity-=1;
  //   updateCartQuantity();
  // });

  // updateCartQuantity();



  
});