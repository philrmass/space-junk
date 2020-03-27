export function initBackground() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    color: [0.0, 0.0, 0.0],
  };
}

export function updateBackground({ background }) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const now = Date.now();
  let color = background.color;
  color = incrementColor(Boolean(now & 16), color, 0, 0.01);
  color = incrementColor(Boolean(now & 8), color, 1, 0.01);
  color = incrementColor(Boolean(now & 4), color, 2, 0.01);

  return {
    width,
    height,
    color,
  };
}

function incrementColor(isInc, color, index, amt) {
  const inc = isInc ? amt : -amt;
  let component = color[index] + inc;
  component = Math.max(0, component);
  component = Math.min(1, component);
  return [...color.slice(0, index), component, ...color.slice(index + 1)];
}

export function drawBackground({ gl, background }) {
  gl.clearColor(...background.color, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

