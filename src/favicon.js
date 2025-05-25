// Script para generar un favicon con fondo negro y letra C en dorado
function generateFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  // Fondo negro
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 64, 64);
  
  // Letra C en dorado
  ctx.fillStyle = '#FFD700'; // Color dorado
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C', 32, 32);
  
  // Convertir a URL de datos
  return canvas.toDataURL('image/png');
}

// Exportar la función
export default generateFavicon; 