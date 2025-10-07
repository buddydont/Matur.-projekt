window.onload = function () {
  const toTopBtn = document.getElementById('toTopBtn');

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      toTopBtn.classList.add('visible');
    } else {
      toTopBtn.classList.remove('visible');
    }
  };

  toTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
};

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us!');
      contactForm.reset();
    });
  }
});