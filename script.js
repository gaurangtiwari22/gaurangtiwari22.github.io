/* CURSOR GLOW */
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* PARTICLES */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let p = [];
for (let i = 0; i < 70; i++) {
  p.push({
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
  p.forEach(a => {
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
    ctx.fill();
    a.x += a.dx;
    a.y += a.dy;
    if (a.x > canvas.width) a.x = 0;
    if (a.y > canvas.height) a.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();
