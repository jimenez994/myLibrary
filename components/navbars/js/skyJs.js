const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  nav.classList.add('nav-inactive')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    nav.classList.toggle('nav-inactive')

  })
}


const app = () => {
  navSlide();

}

app();
