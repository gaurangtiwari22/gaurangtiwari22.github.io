/* ========= MODAL FUNCTIONS (DO NOT REMOVE) ========= */
function openImage(src) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('modalImg');
  img.src = src;
  modal.style.display = 'flex';
}

function openPDF(src) {
  window.open(src, '_blank');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

/* ========= LIVE BACKGROUND ANIMATION ========= */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
const count = 90;

for (let i = 0; i < count; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 0.4 + 0.1,
    dy: Math.random() * 0.4 + 0.1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(56,189,248,0.6)";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();
