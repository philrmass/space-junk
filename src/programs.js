import { initProgram, compilePrograms } from './utilities/shaders';
import { colorVs, colorFs } from './data/shaders/color';

export function initPrograms(gl) {
  const defs = [];
  defs.push(initProgram(gl, 'color', colorVs, colorFs));

  const compiled = compilePrograms(gl, defs);
  return compiled.reduce((all, program) => ({
    ...all,
    ...program,
  }), {});
}
