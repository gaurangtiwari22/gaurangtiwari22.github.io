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
