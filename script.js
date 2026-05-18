/* ====================================================
   Abhishek · Portfolio — Interactive scripts
   ==================================================== */

// Year stamp
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Nav: scroll state ---------- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});
document.querySelectorAll('.nav__links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('is-open'));
});

/* ---------- Cursor glow (desktop only) ---------- */
const glow = document.querySelector('.cursor-glow');
if (window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
} else {
  glow.style.display = 'none';
}

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Gallery filter ---------- */
const filters = document.querySelectorAll('.filter');
const galleryItems = document.querySelectorAll('.g-item');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const cat = btn.dataset.filter;
    galleryItems.forEach(item => {
      const show = cat === 'all' || item.dataset.cat === cat;
      item.classList.toggle('hidden', !show);
    });
  });
});

/* ---------- Lightbox for gallery & certs ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, cap) {
  lightboxImg.src = src;
  lightboxCap.textContent = cap || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.g-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const cap = item.querySelector('figcaption');
    openLightbox(img.src, cap ? cap.textContent : '');
  });
});
document.querySelectorAll('.cert').forEach(c => {
  c.addEventListener('click', () => {
    const img = c.querySelector('img');
    const title = c.querySelector('h3');
    openLightbox(img.src, title ? title.textContent : '');
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ---------- Smooth nav highlight (optional active link) ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.style.color = (href === id) ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));
