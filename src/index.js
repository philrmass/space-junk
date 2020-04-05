import { initGl, updateGl } from './gl';
import { mat4 } from 'gl-matrix';
import { initBackground, updateBackground, drawBackground } from './background';
import { initCharacters, updateCharacters, drawCharacters } from './characters';
import { initPrograms } from './programs';

function main() {
  let state = initState();
  let lastTimestamp = 0;

  function update(timestamp) {
    const dt = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    state = updateState(state, dt);
    draw(state);
    window.requestAnimationFrame(update);
  }
  window.requestAnimationFrame(update);
}

function initState() {
  const gl = initGl();
  const programs = initPrograms(gl);
  const background = initBackground();
  const characters = initCharacters();

  return {
    gl,
    programs,
    background,
    characters,
  };
}

function updateState(state, dt) { //eslint-disable-line no-unused-vars
  const gl = updateGl(state);
  const programs = state.programs;
  const background = updateBackground(state);
  const characters = updateCharacters(state);

  return {
    gl,
    programs,
    background,
    characters,
  };
}

function draw(state) {
  const { gl, programs: { color }} = state;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  drawBackground(state, vao);
  const set = drawCharacters(state, vao);
  bindVerticesToProgram(gl, set, color);

  const matrices = initMatrices(state);
  gl.useProgram(color); // select per vertex set
  bindMatricesToProgram(gl, matrices, color);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, set.positionCount);
}

//??? move to vertices utility
function bindVerticesToProgram(gl, set, program) {
  const positionLoc = gl.getAttribLocation(program, 'pos0');
  const colorLoc = gl.getAttribLocation(program, 'col0');

  gl.bindBuffer(gl.ARRAY_BUFFER, set.positions);
  gl.vertexAttribPointer(positionLoc, set.positionComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLoc);

  gl.bindBuffer(gl.ARRAY_BUFFER, set.colors);
  gl.vertexAttribPointer(colorLoc, set.colorComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(colorLoc);
}

//??? move to matrices utility
function initMatrices({ background }) {
  const modelview = mat4.create();
  const scaleX = 2 / background.width;
  const scaleY = 2 / background.height;
  mat4.scale(modelview, modelview, [scaleX, scaleY, 1]);

  const projection = mat4.create();
  const translatex = -background.width / 2;
  const translateY = -background.height / 2;
  mat4.translate(modelview, modelview, [translatex, translateY, 0]);

  return { modelview, projection };
}

//??? move to matrices utility
function bindMatricesToProgram(gl, matrices, program) {
  const { modelview, projection } = matrices;

  const modelviewLoc = gl.getUniformLocation(program, 'modelview');
  const projectionLoc = gl.getUniformLocation(program, 'projection');

  gl.uniformMatrix4fv(modelviewLoc, false, modelview);
  gl.uniformMatrix4fv(projectionLoc, false, projection);
}

window.onload = main;
