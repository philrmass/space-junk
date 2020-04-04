import { mat4 } from 'gl-matrix';

import { initProgram, compilePrograms } from './utilities/shaders';
import { colorVs, colorFs } from './data/shaders/color';

export function initCharacters(gl) {
  const x = 0;
  const y = 200;
  const width = 100;
  const height = 100;
  const def = initProgram(gl, colorVs, colorFs);
  const [program] = compilePrograms(gl, [def]);

  return {
    program,
    square: {
      x,
      y,
      width,
      height,
    },
  };
}

export function updateCharacters({ characters, background }) {
  const { program, square } = characters;
  square.x = square.x + 1;
  square.y = square.y + 1;
  if (square.x > background.width) {
    square.x -= background.width;
  }
  if (square.y > background.height) {
    square.y -= background.height;
  }

  return {
    program,
    square,
  };
}

export function drawCharacters({ gl, characters }) {
  const { program, square } = characters;
  const attribs = {
    position: gl.getAttribLocation(program, 'pos0'),
    color: gl.getAttribLocation(program, 'col0'),
  };

  const bufs = initBuffers(gl, square);


  gl.bindBuffer(gl.ARRAY_BUFFER, bufs.positions);
  gl.vertexAttribPointer(attribs.position, bufs.positionComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribs.position);

  gl.bindBuffer(gl.ARRAY_BUFFER, bufs.colors);
  gl.vertexAttribPointer(attribs.color, bufs.colorComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribs.color);

  return bufs;
}

function initBuffers(gl, square) {
  const positionComponents = 2;
  const { x, y, width, height } = square;
  const x1 = x + width;
  const y1 = y + height;
  const positionData = [
    x, y,
    x1, y,
    x, y1,
    x1, y1,
  ];

  const colorComponents = 4;
  const colorData = [
    1.0, 0.0, 0.0, 0.0,
    1.0, 0.5, 0.0, 0.8,
    1.0, 1.0, 0.0, 0.8,
    0.5, 1.0, 0.0, 0.8,
  ];

  const positions = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positions);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positionData), gl.STATIC_DRAW);

  const colors = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colors);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

  return {
    positions,
    positionComponents,
    positionCount: positionData.length / positionComponents,
    colors,
    colorComponents,
    colorCount: colorData.length / colorComponents,
  };
}
