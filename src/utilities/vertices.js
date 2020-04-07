export function bindVerticesToProgram(gl, set, program) {
  const positionLoc = gl.getAttribLocation(program, program.positionName);
  const colorLoc = gl.getAttribLocation(program, program.colorName);
  const coordLoc = gl.getAttribLocation(program, program.coordName);

  if (positionLoc >= 0) {
    gl.bindBuffer(gl.ARRAY_BUFFER, set.position.buf);
    gl.vertexAttribPointer(positionLoc, set.position.size, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);
  }

  if (colorLoc >= 0) {
    gl.bindBuffer(gl.ARRAY_BUFFER, set.color.buf);
    gl.vertexAttribPointer(colorLoc, set.color.size, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorLoc);
  }

  if (coordLoc >= 0) {
    gl.bindBuffer(gl.ARRAY_BUFFER, set.coord.buf);
    gl.vertexAttribPointer(coordLoc, set.coord.size, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coordLoc);
  }
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

  if (data.coord) {
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.coord.data), gl.STATIC_DRAW);
    const count = data.coord.data.length / data.coord.size;

    bufs.coord = {
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
    coord: {
      ...data.coord,
      ...bufs.coord,
    },
    texture: data.texture,
    program: data.program,
  };
}
