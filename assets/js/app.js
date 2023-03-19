// Animation functions
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      
      if (elementTop < viewportHeight && elementBottom >= 0) {
        element.classList.add('active');
      } //else {
      //   element.classList.remove('active');
      // }
    });
  } 
  window.addEventListener('scroll', animateOnScroll);

  window.addEventListener('load', animateOnScroll);  