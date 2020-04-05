export function bindVerticesToProgram(gl, set, program) {
  const positionLoc = gl.getAttribLocation(program, 'pos0');
  const colorLoc = gl.getAttribLocation(program, 'col0');

  gl.bindBuffer(gl.ARRAY_BUFFER, set.position.buf);
  gl.vertexAttribPointer(positionLoc, set.position.size, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLoc);

  gl.bindBuffer(gl.ARRAY_BUFFER, set.color.buf);
  gl.vertexAttribPointer(colorLoc, set.color.size, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(colorLoc);
}

export function bindDataToVertices(gl, data) {
  const bufs = {};

  if (data.position) {
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.position.data), gl.STATIC_DRAW);
    const count = data.position.data.length / data.position.size;

    bufs.position = {
      buf,
      count,
      program: data.program,
    };
  }

  if (data.color) {
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.color.data), gl.STATIC_DRAW);
    const count = data.color.data.length / data.color.size;

    bufs.color = {
      buf,
      count,
    };
  }

  return {
    position: {
      ...data.position,
      ...bufs.position,
    },
    color: {
      ...data.color,
      ...bufs.color,
    },
    program: data.program,
  };
}
