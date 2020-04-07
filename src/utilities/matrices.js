import { mat4 } from 'gl-matrix';

export function initMatrices({ width, height }) {
  const modelview = mat4.create();
  const scaleX = 2 / width;
  const scaleY = 2 / height;
  mat4.scale(modelview, modelview, [scaleX, scaleY, 1]);

  const projection = mat4.create();
  const translatex = -width / 2;
  const translateY = -height / 2;
  mat4.translate(modelview, modelview, [translatex, translateY, 0]);

  return { modelview, projection };
}

export function bindMatricesToProgram(gl, matrices, program) {
  const { modelview, projection } = matrices;

  const modelviewLoc = gl.getUniformLocation(program, program.modelviewName);
  const projectionLoc = gl.getUniformLocation(program, program.projectionName);

  gl.uniformMatrix4fv(modelviewLoc, false, modelview);
  gl.uniformMatrix4fv(projectionLoc, false, projection);
}
