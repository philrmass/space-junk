import { initGl, updateGl } from './gl';
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
  drawBackground(state);
  drawCharacters(state);
}

window.onload = main;
