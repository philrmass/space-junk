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

export function drawCharacters({ gl, characters, background }) {
  const { program, square } = characters;
  const attribs = {
    position: gl.getAttribLocation(program, 'pos0'),
    color: gl.getAttribLocation(program, 'col0'),
  };
  const uniforms = {
    projection: gl.getUniformLocation(program, 'projection'),
    modelView: gl.getUniformLocation(program, 'modelView'),
  };

  const bufs = initBuffers(gl, square);

  //const fov = 20 * Math.PI / 180;
  //const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  //const near = 0.1;
  //const far = 100.0;
  const projection = mat4.create();
  const modelView = mat4.create();
  //mat4.perspective(projection, fov, aspect, near, far);
  //mat4.translate(modelView, modelView, [0, 0, -6]);
  //mat4.rotate(modelView, modelView, rotation.x, [1, 0, 0]);
  //mat4.rotate(modelView, modelView, rotation.y, [0, 1, 0]);
  //??? change to more efficient fromRotationTranslationScale(out, q, v, s)
  const scaleX = 2 / background.width;
  const scaleY = 2 / background.height;
  const translatex = -background.width / 2;
  const translateY = -background.height / 2;
  mat4.scale(modelView, modelView, [scaleX, scaleY, 1]);
  mat4.translate(modelView, modelView, [translatex, translateY, 0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, bufs.positions);
  gl.vertexAttribPointer(attribs.position, bufs.positionComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribs.position);

  gl.bindBuffer(gl.ARRAY_BUFFER, bufs.colors);
  gl.vertexAttribPointer(attribs.color, bufs.colorComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribs.color);

  gl.useProgram(program);
  gl.uniformMatrix4fv(uniforms.projection, false, projection);
  gl.uniformMatrix4fv(uniforms.modelView, false, modelView);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, bufs.positionCount);
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
