export function initCanvas() {
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl');

  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';

  return {
    canvas,
    gl,
  }
}

export function drawCanvas({ canvas, background }) {
  canvas.width = background.width;
  canvas.height = background.height;
}
