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
  const inc = 0.001;
  const r = (now & 16) ? 1 : 0;
  const g = (now & 8) ? 1 : 0;
  const b = (now & 4) ? 1 : 0;
  const total = r + g + b + 0.00000000000001;
  color = incrementColor(color, 0, inc * (r / total));
  color = incrementColor(color, 1, inc * (g / total));
  color = incrementColor(color, 2, inc * (b / total));

  return {
    width,
    height,
    color,
  };
}

function incrementColor(color, index, amt) {
  let component = color[index] + amt;
  if (component < 0) {
    component += 1;
  }
  if (component > 1) {
    component -= 1;
  }
  return [...color.slice(0, index), component, ...color.slice(index + 1)];
}

export function drawBackground({ gl, background }) {
  gl.clearColor(...background.color, 1.0);
  //gl.clearDepth(1.0);
  //gl.depthFunc(gl.LEQUAL);
  //gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT); //| gl.DEPTH_BUFFER_BIT);
}

