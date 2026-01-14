/* CURSOR GLOW */
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* PARTICLES — MOBILE SAFE FIX */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

/* 🔴 CRITICAL FIX */
function resizeCanvas() {
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '-3';

  canvas.width = window.visualViewport
    ? window.visualViewport.width
    : window.innerWidth;

  canvas.height = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

/* PARTICLES DATA */
let particles = [];
const COUNT = 70;

function initParticles() {
  particles = [];
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: Math.random() * 0.3,
      dy: Math.random() * 0.3
    });
  }
}

initParticles();

/* ANIMATION LOOP */
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.45)';

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();
