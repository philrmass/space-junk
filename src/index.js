import { initGl, updateGl } from './gl';
import { initMatrices, bindMatricesToProgram } from './utilities/matrices';
import { bindVerticesToProgram } from './utilities/vertices';
import { initBackground, updateBackground, drawBackground } from './background';
import { initCharacters, updateCharacters, drawCharacters } from './characters';
import { initInput } from './input';
import { initPrograms } from './programs';
import { initTextures } from './textures';

function main() {
  let state = initState();
  const updateInput = initInput();

  function update(timestamp) {
    const input = updateInput(timestamp);
    state = updateState(state, input);
    draw(state);
    window.requestAnimationFrame(update);
  }
  window.requestAnimationFrame(update);
}

function initState() {
  const gl = initGl();
  const textures = initTextures(gl);
  const programs = initPrograms(gl);
  const background = initBackground();
  const characters = initCharacters();

  return {
    gl,
    textures,
    programs,
    background,
    characters,
  };
}

function updateState(state, input) { //eslint-disable-line no-unused-vars
  const gl = updateGl(state);
  const textures = state.textures;
  const programs = state.programs;
  const background = updateBackground(state, input);
  const characters = updateCharacters(state, input);

  return {
    gl,
    textures,
    programs,
    background,
    characters,
  };
}

function draw(state) {
  const { gl, textures, programs } = state;

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  drawBackground(state, vao);

  const sets = drawCharacters(state, vao);
  for (const set of sets) {
    const matrices = initMatrices(state.background);
    const texture = textures[set.texture];
    const program = programs[set.program];
    const sampler = gl.getUniformLocation(program, program.samplerName);

    gl.useProgram(program);
    bindMatricesToProgram(gl, matrices, program);
    bindVerticesToProgram(gl, set, program);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(sampler, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, set.position.count);
  }
}

window.onload = main;
