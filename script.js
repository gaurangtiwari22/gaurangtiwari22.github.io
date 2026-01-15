function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openModal(type) {
  const frame = document.getElementById('modalFrame');

  if (type === 'sales')
    frame.src = 'projects/sales.csv.xlsx';
  if (type === 'student')
    frame.src = 'projects/Gaurang%20Tiwari%20–%20Student%20Performance%20Dashboard.xlsx';
  if (type === 'sql')
    frame.src = 'projects/SQL%20Project.docx';

  document.getElementById('modal').style.display = 'block';
}

function openImage(src) {
  const frame = document.getElementById('modalFrame');
  frame.src = src;
  document.getElementById('modal').style.display = 'block';
}

function openPDF(src) {
  const frame = document.getElementById('modalFrame');
  frame.src = src;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modalFrame').src = '';
}
