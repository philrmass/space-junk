export function initBackground() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    color: [0.5, 1.0, 0.0],
  };
}

export function drawBackground({ gl, background }) {
  gl.clearColor(...background.color, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

