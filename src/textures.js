import bombBoss from './data/textures/bombBoss.png';
import spaceJunk from './data/textures/spaceJunk.png';
import { loadTexture } from './utilities/textures';

export function initTextures(gl) {
  const defs = [];
  defs.push({ name: 'bombBoss', image: bombBoss });
  defs.push({ name: 'spaceJunk', image: spaceJunk });

  return defs.reduce((all, def) => {
    const texture = loadTexture(gl, def.image);
    return {
      ...all,
      [def.name]: texture,
    };
  }, {});
}
