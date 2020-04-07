import { initProgram, compilePrograms } from './utilities/shaders';
import { colorVs, colorFs, colorParams } from './data/shaders/color';
import { textureVs, textureFs, textureParams } from './data/shaders/texture';

export function initPrograms(gl) {
  const defs = [];
  defs.push(initProgram(gl, 'color', colorVs, colorFs, colorParams));
  defs.push(initProgram(gl, 'texture', textureVs, textureFs, textureParams));

  const compiled = compilePrograms(gl, defs);
  return compiled.reduce((all, program) => ({
    ...all,
    ...program,
  }), {});
}
