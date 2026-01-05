/* CURSOR GLOW */
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

/* PARTICLES */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2 + 1,
    dx: Math.random()*0.5,
    dy: Math.random()*0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();

/* TILT EFFECT */
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `rotateX(${-(y/20)}deg) rotateY(${x/20}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

/* MAGNETIC BUTTON */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    btn.style.transform =
      `translate(${(e.clientX-rect.left-rect.width/2)/6}px,
                 ${(e.clientY-rect.top-rect.height/2)/6}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
  });
});
