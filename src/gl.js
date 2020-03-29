export function initGl() {
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext('webgl2');

  gl.canvas.style.position = 'absolute';
  gl.canvas.style.top = '0';
  gl.canvas.style.left = '0';

  return gl;
}

export function updateGl({ gl }) {
  gl.canvas.width = window.innerWidth;
  gl.canvas.height = window.innerHeight;

  return gl;
}
