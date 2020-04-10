import { bindDataToVertices } from './utilities/vertices';
import { initObjectData } from './utilities/objects';
import { initSpaceJunk, updateSpaceJunk } from './spaceJunk';

export function initCharacters() {
  const spaceJunk = initSpaceJunk();
  const square = {
    x: 0,
    y: 200,
    width: 100,
    height: 100,
    program: 'texture',
    texture: 'mario',
  };

  return {
    square,
    spaceJunk,
  };
}

export function updateCharacters(state, input) {
  const { characters, background } = state;
  const { hasFocus, keys } = input;
  const { square } = characters;

  const spaceJunk = updateSpaceJunk(state, input);

  if (hasFocus) {
    square.x = square.x + 5;
    square.y = square.y + 5;

    if (square.x > background.width) {
      square.x -= background.width;
    }
    if (square.y > background.height) {
      square.y -= background.height;
    }
  }

  return {
    square,
    spaceJunk,
  };
}

export function drawCharacters({ gl, characters }) {
  const { square, spaceJunk } = characters;

  const all = [square, spaceJunk];
  const datas = all.map((character) => initObjectData(character));
  const sets = datas.map((data) => bindDataToVertices(gl, data));

  return sets;
}
