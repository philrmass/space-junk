import { initGl, updateGl } from './gl';
import { initMatrices, bindMatricesToProgram } from './utilities/matrices';
import { bindVerticesToProgram } from './utilities/vertices';
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
  const { gl, programs } = state;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  drawBackground(state, vao);

  //??? for each data set
  const set = drawCharacters(state, vao);
  const program = programs[set.program];
  bindVerticesToProgram(gl, set, program);

  const matrices = initMatrices(state.background);

  //??? select program from object data
  gl.useProgram(program); // select per vertex set
  bindMatricesToProgram(gl, matrices, program);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, set.position.count);
}

window.onload = main;
