// Este script se puede ejecutar en el navegador para generar el favicon
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
ctx.fillText('C', 32, 36);

// Para descargar:
// 1. Copia este código en la consola del navegador
// 2. Luego ejecuta: 
// const link = document.createElement('a');
// link.download = 'favicon.png';
// link.href = canvas.toDataURL('image/png');
// link.click(); 