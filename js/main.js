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


//Скролл ефект для меню
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav1s").style.top = "0";
        document.getElementById("nav1s").style.opacity = "1";
    } else {
        document.getElementById("nav1s").style.top = "-150px";
        document.getElementById("nav1s").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}

const url = 'https://kalashnyk.xyz/z/directus-8.8.1/public/test1';

//Дополнительная функция
async function postData(url = '', data = {},method) {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return await response.json();
}

//Считаем поситителей
const tyt = sessionStorage.getItem('tyt');
if(tyt != "1"){
  fetch(`${url}/items/view`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let count = {
          x:data.data[0].x
        };
        count.x++;
        postData(`${url}/items/view/1`,count,"PATCH")
      });
}
sessionStorage.setItem('tyt', "1");




//Калькулятор
let objData = {a1:1,a2:1,b1:0,b2:0,b3:0,d1:1};
let dataCalc;

const totalPrice = document.querySelector('#total_price');
const allInputs = document.querySelectorAll('.cart__add-item');
const formSelect = document.querySelector('#d1');
const totalM2 = document.querySelector('#a3');



fetch(`${url}/items/calc`)
  .then(response => response.json())
  .then(result => {

      dataCalc = result.data;

      result.data.forEach(item=>{
      let newSelectOption = document.createElement('option')
      newSelectOption.innerHTML = item.title_price_pack
      newSelectOption.value = item.id
      formSelect.append(newSelectOption)
    })

    formSelect[0].selected = true;

    function calc(){
      let m2 = objData.a1 * objData.a2;
      let price;
      let type = objData.d1;

      if(m2 <= 5){
        price = m2*dataCalc[type-1].price_for_calc[`5`];
      }else if(m2 == 6){
          price = m2*dataCalc[type-1].price_for_calc[`6`];
      }else if(m2 == 7){
          price = m2*dataCalc[type-1].price_for_calc[`7`];
      }else if(m2 == 8){
          price = m2*dataCalc[type-1].price_for_calc[`8`];
      }else if(m2 == 9){
          price = m2*dataCalc[type-1].price_for_calc[`9`];
      }else if(m2 == 10 || m2 == 11){
          price = m2*dataCalc[type-1].price_for_calc[`10`];
      }else if(m2 == 12 || m2 <= 14){
          price = m2*dataCalc[type-1].price_for_calc[`12`];
      }else if(m2 == 15 || m2 <= 19){
          price = m2*dataCalc[type-1].price_for_calc[`15`];
      }else if(m2 == 20 || m2 <= 29){
          price = m2*dataCalc[type-1].price_for_calc[`20`];
      }else if(m2 == 30 || m2 <= 39){
          price = m2*dataCalc[type-1].price_for_calc[`30`];
      }else if(m2 == 40 || m2 <= 59){
          price = m2*dataCalc[type-1].price_for_calc[`40`];
      }else if(m2 == 60 || m2 > 60){
          price = m2*dataCalc[type-1].price_for_calc[`60`];
      }


      if(objData.b1 > 0){
          price += objData.b1*200;
      }
        if(objData.b2 > 0){
            price += objData.b2*400;
        }
        if(objData.b3 > 0){
            price += objData.b3*200;
        }
      totalM2.textContent = `${m2}`;
      totalPrice.textContent = price;
      console.log(objData);
    }

    calc();


    //Событие смены селекта #d1
    formSelect.addEventListener('input',() => {
          objData['d1'] = +(formSelect.value);
          calc();
        }
    )

    //Событие смены инпутов + стрелки
    allInputs.forEach(item =>{
      item.addEventListener('click', e =>{
        const target = e.target;
        if(target.classList.contains("cart-button--more") || target.classList.contains("cart-button--less")) {
          if(target.classList.contains("cart-button--more")){
            target.parentElement.children[1].value++;
            objData[target.parentElement.children[1].id] = +(target.parentElement.children[1].value);
          }
          if(target.classList.contains("cart-button--less")){
            if(target.classList.contains("not0")){
              if(target.parentElement.children[1].value > 1 ) {
                target.parentElement.children[1].value--;
                objData[target.parentElement.children[1].id] = +(target.parentElement.children[1].value);
              }
            }else{
              if(target.parentElement.children[1].value > 0 ) {
                target.parentElement.children[1].value--;
                objData[target.parentElement.children[1].id] = +(target.parentElement.children[1].value);
              }
            }
          }
          calc();
        }
      })
    });
    //Событие ввода инпутов
    allInputs.forEach(item => {
      item.children[1].addEventListener('input', e => {
        objData[item.children[1].id] = +(item.children[1].value);
        calc();
      })
    })


  })



















