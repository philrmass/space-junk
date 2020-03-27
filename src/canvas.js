export function initCanvas() {
  const canvas = document.getElementById('canvas');

  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';

  return canvas;
}

export function updateCanvas({ canvas }) {
  return canvas;
}

export function drawCanvas({ canvas, background }) {
  canvas.width = background.width;
  canvas.height = background.height;
}
