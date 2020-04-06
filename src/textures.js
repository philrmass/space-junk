import mario from './data/textures/mario.png';
import faces from './data/textures/characters.png';
import { loadTexture } from './utilities/textures';

export function initTextures(gl) {
  const defs = [];
  defs.push({ name: 'mario', image: mario });
  defs.push({ name: 'faces', image: faces });

  return defs.reduce((all, def) => {
    const texture = loadTexture(gl, def.image);
    return {
      ...all,
      [def.name]: texture,
    };
  }, {});
}
