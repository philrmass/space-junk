import { bindDataToVertices } from './utilities/vertices';
import { initObjectData } from './utilities/objects';

export function initCharacters() {
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
  };
}

export function updateCharacters(
  { characters, background },
  { hasFocus, keys },
) {
  const { square } = characters;

  if (keys.length > 0) {
    console.log('KEYS:', keys);
  }

  if (hasFocus) {
    square.x = square.x + 10;
    square.y = square.y + 20;

    if (square.x > background.width) {
      square.x -= background.width;
    }
    if (square.y > background.height) {
      square.y -= background.height;
    }
  }

  return {
    square,
  };
}

export function drawCharacters({ gl, characters }) {
  const { square } = characters;

  const all = [square];
  const datas = all.map((character) => initObjectData(character));
  const sets = datas.map((data) => bindDataToVertices(gl, data));

  return sets;
}
