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
        document.body.style.overflow = 'auto';
        link.style.animation = '';
      } else {
        document.body.style.overflow = 'hidden';
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`
      }
    })
    // burger animation 
    burger.classList.toggle('toggle')
  })
  // console.log(navLinks[1]);

  window.addEventListener("scroll", () => {
    console.log("sick");
    var scrollPos = document.scrollTop;
  // console.log(scrollPos);
  var elmnt = document.getElementById("about");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
  console.log('start' + x , y);
  navLinks.forEach((link, index) => {
    var refElement = link.querySelector('a');
    console.log(refElement.getBoundingClientRect().top + window.scrollY);
    
    
    // console.log('end');
  })
  });


}



const app = () => {
  navSlide();

}

app();
