/* 🚫 DISABLE BROWSER SCROLL RESTORATION */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* 🔒 FORCE PAGE TO START AT TOP — AFTER LAYOUT */
document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
});

/* CURSOR GLOW */
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* PARTICLES BACKGROUND */
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let particles = [];
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: Math.random() * 0.4,
      dy: Math.random() * 0.4
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.4)';

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
}
