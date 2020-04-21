// import $ from "./../../../node_modules/jquery";
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burgerClick = burger.addEventListener('click', () => {
    // toggle nav 
    nav.classList.toggle('nav-active');

    // animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        // document.body.style.overflow = 'auto';
        link.style.animation = '';
      } else {
        // document.body.style.overflow = 'hidden';
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`
      }
    })
    // burger animation 
    burger.classList.toggle('toggle')
  })
}

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event) {
  // nav line active scroll
  var scrollPos = $(document).scrollTop();
  const navLinks = $('#navSky a')  
  navLinks.each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position()) {
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          navLinks.removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
    }
  });
}

const navScrollHide = () => {
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  this.document.querySelector('.nav-links').classList.remove('nav-active');
  // this.document.querySelector()

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navSky").style.top = "0";
  } else {
    document.getElementById("navSky").style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
}
}





const app = () => {
  navSlide();
  navScrollHide();
}

app();
