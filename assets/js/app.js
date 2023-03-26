const blurScreen = document.querySelector('.blur');
const sideBar = document.querySelector('.side-bar');
const toggleBtn = document.querySelector('.togglebtn');
const closeBtn = document.querySelector('.absolute');
toggleBtn.addEventListener('click', function(){
  sideBar.classList.add('side-bar-active');
  blurScreen.classList.add('active');
});
closeBtn.addEventListener('click', function(){
  sideBar.classList.remove('side-bar-active');
  blurScreen.classList.remove('active');
});
// Animation functions
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      
      if (elementTop < viewportHeight && elementBottom >= 0) {
        element.classList.add('active');
      }
    });
  } 
  window.addEventListener('scroll', animateOnScroll);

  window.addEventListener('load', animateOnScroll);