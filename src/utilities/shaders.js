export function initProgram(gl, name, vsSource, fsSource) {
  const vs = gl.createShader(gl.VERTEX_SHADER);
  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(vs, vsSource);
  gl.shaderSource(fs, fsSource);
  if (!vs || !fs) {
    return null;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);

  return { name, prog, vs, fs };
}

export function compilePrograms(gl, defs) {
  for (const { vs, fs } of defs) {
    compileShader(gl, vs);
    compileShader(gl, fs);
  }

  for (const { prog } of defs) {
    gl.linkProgram(prog);
  }

  for (const { prog, vs, fs } of defs) {
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(`Link error: ${gl.getProgramInfoLog(prog)}`); // eslint-disable-line no-console
      console.error(`  vs log: ${gl.getShaderInfoLog(vs)}`); // eslint-disable-line no-console
      console.error(`  fs log: ${gl.getShaderInfoLog(fs)}`); // eslint-disable-line no-console
    }
  }

  for (const { vs, fs } of defs) {
    gl.deleteShader(vs);
    gl.deleteShader(fs);
  }

  return defs.map(({ name, prog }) => ({ [name]: prog }));
}

function compileShader(gl, shader) {
  if (shader.compiled) {
    return;
  }
  gl.compileShader(shader);
  shader.compiled = true;
}
