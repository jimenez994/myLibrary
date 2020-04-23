const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // burger
  burgerClick = burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        // document.body.style.overflow = 'auto';
        link.style.animation = "";
      } else {
        // document.body.style.overflow = 'hidden';
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

const navScroll = () => {
  let mainNavLinks = document.querySelectorAll(".navbar ul li a");
  let mainSections = document.querySelectorAll("main section");

  // scroll
  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // click
  mainNavLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


};

navSlide();
navScroll();
