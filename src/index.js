import { initGl, updateGl } from './gl';
import { initMatrices, bindMatricesToProgram } from './utilities/matrices';
import { loadTexture } from './utilities/textures';
import { bindVerticesToProgram } from './utilities/vertices';
import { initBackground, updateBackground, drawBackground } from './background';
import { initCharacters, updateCharacters, drawCharacters } from './characters';
import { initPrograms } from './programs';
import mario from './data/textures/mario.png';

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

//??? fix, load all textures in init, select later by name, add name to object data
let tex = undefined;
function initState() {
  const gl = initGl();
  const programs = initPrograms(gl);
  const background = initBackground();
  const characters = initCharacters();
  tex = loadTexture(gl, mario);

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

  const sets = drawCharacters(state, vao);
  for (const set of sets) {
    const matrices = initMatrices(state.background);
    const program = programs[set.program];
    const sampler = gl.getUniformLocation(program, 'samp0');

    gl.useProgram(program);
    bindMatricesToProgram(gl, matrices, program);
    bindVerticesToProgram(gl, set, program);

    //??? add sampler and other names/locations to program object
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(sampler, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, set.position.count);
  }
}

window.onload = main;
