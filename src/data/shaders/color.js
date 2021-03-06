export const colorParams = {
  positionName: 'pos0',
  colorName: 'col0',
  modelviewName: 'modelview',
  projectionName: 'projection',
};

export const colorVs = `
attribute vec4 pos0;
attribute vec4 col0;
uniform mat4 modelview;
uniform mat4 projection;
varying lowp vec4 vfCol0;

void main() {
  gl_Position = projection * modelview * pos0;
  gl_PointSize = 2.0;
  vfCol0 = col0;
}
`;

export const colorFs = `
varying lowp vec4 vfCol0;

void main() {
  gl_FragColor = vfCol0;
}
`;
