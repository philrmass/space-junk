import { bindDataToVertices } from './utilities/vertices';
import { initObjectData } from './utilities/objects';
import { initSpaceJunk, updateSpaceJunk } from './spaceJunk';
import { initBombBoss, updateBombBoss } from './bombBoss';

export function initCharacters() {
  const spaceJunk = initSpaceJunk();
  const bombBoss = initBombBoss();

  return {
    spaceJunk,
    bombBoss,
  };
}

export function updateCharacters(state, input) {
  const spaceJunk = updateSpaceJunk(state, input);
  const bombBoss = updateBombBoss(state, input);

  return {
    bombBoss,
    spaceJunk,
  };
}

export function drawCharacters({ gl, characters }) {
  const { bombBoss, spaceJunk } = characters;

  const all = [bombBoss, spaceJunk];
  const datas = all.map((character) => initObjectData(character));
  const sets = datas.map((data) => bindDataToVertices(gl, data));

  return sets;
}
