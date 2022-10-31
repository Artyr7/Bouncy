// "use strict" 

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },

   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },

   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },

   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry()||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
};

if(isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}
















// прокрутка при клике

const menyLinks = document.querySelectorAll('.meny[data-goto]');
if(menyLinks.length > 0) {
   menyLinks.forEach(menyLinks => {
      menyLinks.addEventListener("click", onMenyClick);
   });

   function onMenyClick(e) {
      const menyLinks = e.target;
      if(menyLinks.dataset.goto && document.querySelector(menyLinks.dataset.goto)) {
         const gotoBlock = document.querySelector(menyLinks.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

         if(burgerHeader.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burgerHeader.classList.remove('_active');
            navMeny.classList.remove('_active');
         }


         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}




//бургер меню

const burgerHeader =  document.querySelector('.header-burger');
const navMeny = document.querySelector('.nav');
if(burgerHeader ) {
  
  burgerHeader.addEventListener("click", function (e) {
     document.body.classList.toggle('_lock');
     burgerHeader.classList.toggle('_active');
     navMeny.classList.toggle('_active');
   });
}


//  $(document).ready(function() {
 //  $('.header-burger').click(function(event) {
    //  $('.header-burger,.nav').toggleClass('active');
    //  $('body').toggleClass('lock');
 //  })
//  });
