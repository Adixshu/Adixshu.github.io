// Small interaction layer — intentionally dependency-free.
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20 ? 'rgba(9,10,12,.82)' : 'transparent';
  nav.style.backdropFilter = window.scrollY > 20 ? 'blur(14px)' : 'none';
});
