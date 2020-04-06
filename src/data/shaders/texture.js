export const textureVs = `
attribute vec4 pos0;
attribute vec2 crd0;
uniform mat4 modelview;
uniform mat4 projection;
varying mediump vec2 vfCrd0;

void main() {
  gl_Position = projection * modelview * pos0;
  vfCrd0 = crd0;
}
`;

export const textureFs = `
varying mediump vec2 vfCrd0;
uniform sampler2D samp0;

void main() {
  gl_FragColor = texture2D(samp0, vfCrd0);
}
`;
