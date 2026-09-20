/* ─── PRELOADER ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 2000);
});

/* ─── CUSTOM CURSOR ─── */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  trailX += (e.clientX - trailX) * 0.12;
  trailY += (e.clientY - trailY) * 0.12;
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card, .stat-card, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    cursor.style.background = '#fff';
    trail.style.borderColor = 'rgba(32,191,255,0.7)';
    trail.style.transform = 'translate(-50%,-50%) scale(1.4)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = '#20bfff';
    trail.style.borderColor = 'rgba(32,191,255,0.4)';
    trail.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

/* ─── TYPEWRITER ─── */
const words = [
  'Web Applications.',
  'Scalable APIs.',
  'Beautiful UIs.',
  'Digital ID Systems.',
  'AI Test Platforms.',
  'ERP Systems.',
];
let wIndex = 0, cIndex = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
  const word = words[wIndex];
  if (!deleting) {
    typeEl.textContent = word.slice(0, ++cIndex);
    if (cIndex === word.length) { deleting = true; setTimeout(typeWriter, 1800); return; }
  } else {
    typeEl.textContent = word.slice(0, --cIndex);
    if (cIndex === 0) { deleting = false; wIndex = (wIndex + 1) % words.length; }
  }
  setTimeout(typeWriter, deleting ? 60 : 90);
}
typeWriter();

/* ─── PARTICLES CANVAS ─── */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX; this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(32,191,255,${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(32,191,255,${0.06 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ─── NAV SCROLL EFFECTS ─── */
const header = document.getElementById('header');
const navProgress = document.getElementById('navProgress');

window.addEventListener('scroll', () => {
  // Sticky header
  header.classList.toggle('scrolled', window.scrollY > 50);

  // Progress bar
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  navProgress.style.width = (window.scrollY / docHeight * 100) + '%';

  // Active nav link
  document.querySelectorAll('section[id]').forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) link.classList.toggle('active', window.scrollY >= top && window.scrollY < bottom);
  });
});

/* ─── MOBILE MENU ─── */
const menuBtn = document.getElementById('menu');
const links = document.getElementById('links');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    links.classList.remove('open');
  });
});

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bars inside
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(el => {
  revealObserver.observe(el);
});

// Also observe skill sections for bar animations
document.querySelectorAll('.skill-group').forEach(el => revealObserver.observe(el));

/* ─── COUNTER ANIMATION ─── */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        entry.target.textContent = current;
      }, 40);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ─── YEAR ─── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ─── SMOOTH SECTION TRANSITIONS ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
