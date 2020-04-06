import { initProgram, compilePrograms } from './utilities/shaders';
import { colorVs, colorFs } from './data/shaders/color';
import { textureVs, textureFs } from './data/shaders/texture';

export function initPrograms(gl) {
  const defs = [];
  defs.push(initProgram(gl, 'color', colorVs, colorFs));
  defs.push(initProgram(gl, 'texture', textureVs, textureFs));

  const compiled = compilePrograms(gl, defs);
  return compiled.reduce((all, program) => ({
    ...all,
    ...program,
  }), {});
}
