const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

window.addEventListener('scroll', () => header.classList.toggle('sticky', window.scrollY > 50));
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => navigation.classList.remove('open')));

if (document.querySelector('#testimonial-text')) {
const testimonials = [
  { text: 'Excelente atención y acompañamiento durante todo el proyecto. El resultado superó nuestras expectativas.', name: 'Nombre de tu cliente', role: 'Empresa / cargo' },
  { text: 'Encontramos un equipo comprometido, ágil y siempre dispuesto a explicar cada detalle del proceso.', name: 'Segundo cliente', role: 'Empresa / cargo' },
  { text: 'Nuestra nueva presencia digital transmite mejor lo que hacemos y nos ha ayudado a conectar con más personas.', name: 'Tercer cliente', role: 'Empresa / cargo' }
];
let currentTestimonial = 0;
const text = document.querySelector('#testimonial-text');
const name = document.querySelector('#testimonial-name');
const role = document.querySelector('#testimonial-role');
const dots = [...document.querySelectorAll('.dots button')];
function renderTestimonial(index) {
  currentTestimonial = (index + testimonials.length) % testimonials.length;
  const item = testimonials[currentTestimonial];
  text.textContent = item.text; name.textContent = item.name; role.textContent = item.role;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentTestimonial));
}
document.querySelector('.previous').addEventListener('click', () => renderTestimonial(currentTestimonial - 1));
document.querySelector('.next').addEventListener('click', () => renderTestimonial(currentTestimonial + 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => renderTestimonial(index)));
setInterval(() => renderTestimonial(currentTestimonial + 1), 6500);

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('[data-target]').forEach(counter => {
      const target = Number(counter.dataset.target); const start = performance.now();
      const tick = now => { const progress = Math.min((now - start) / 1200, 1); counter.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))); if (progress < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    counterObserver.unobserve(entry.target);
  });
}, { threshold: .3 });
counterObserver.observe(document.querySelector('.numbers'));

}

document.querySelector('#year').textContent = new Date().getFullYear();
