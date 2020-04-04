import { initGl, updateGl } from './gl';
import { mat4 } from 'gl-matrix';
import { initBackground, updateBackground, drawBackground } from './background';
import { initCharacters, updateCharacters, drawCharacters } from './characters';

function main() {
  console.log('SPACE JUNK'); // eslint-disable-line no-console
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
  const background = initBackground();
  const characters = initCharacters(gl);

  return {
    gl,
    background,
    characters,
  };
}

function updateState(state, dt) { //eslint-disable-line no-unused-vars
  const gl = updateGl(state);
  const background = updateBackground(state);
  const characters = updateCharacters(state);

  return {
    gl,
    background,
    characters,
  };
}

function draw(state) {
  const { gl, characters } = state;
  const { program } = characters;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  drawBackground(state, vao);
  const bufs = drawCharacters(state, vao);

  gl.useProgram(program);
  setMatrices(state);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, bufs.positionCount);
}

/*
function bindVertices() {
}

*/
function setMatrices({ gl, background, characters }) {
  const { program } = characters;

  const projection = mat4.create();
  const modelView = mat4.create();
  const scaleX = 2 / background.width;
  const scaleY = 2 / background.height;
  const translatex = -background.width / 2;
  const translateY = -background.height / 2;
  mat4.scale(modelView, modelView, [scaleX, scaleY, 1]);
  mat4.translate(modelView, modelView, [translatex, translateY, 0]);

  const uniforms = {
    projection: gl.getUniformLocation(program, 'projection'),
    modelView: gl.getUniformLocation(program, 'modelView'),
  };

  gl.uniformMatrix4fv(uniforms.projection, false, projection);
  gl.uniformMatrix4fv(uniforms.modelView, false, modelView);
}

window.onload = main;
