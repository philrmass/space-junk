export function initCharacters() {
  const square = {
    x: 0,
    y: 200,
    width: 100,
    height: 100,
  };

  return {
    square,
  };
}

export function updateCharacters({ characters, background }) {
  const { square } = characters;

  square.x = square.x + 1;
  square.y = square.y + 1;
  if (square.x > background.width) {
    square.x -= background.width;
  }
  if (square.y > background.height) {
    square.y -= background.height;
  }

  return {
    square,
  };
}

export function drawCharacters({ gl, characters }) {
  const { square } = characters;

  const data = initObjectData(square);

  return bindDataToVertices(gl, data);
}

//??? move to vertices utilities
function bindDataToVertices(gl, data) {
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

  return {
    position: {
      ...data.position,
      ...bufs.position,
    },
    color: {
      ...data.color,
      ...bufs.color,
    },
  };
}

//??? move to object or data utilities
export function initObjectData(object) {
  const { x, y, width, height } = object;

  const positionSize = 2;
  const positionData = [
    x, y,
    x + width, y,
    x, y + height,
    x + width, y + height,
  ];

  const colorSize = 4;
  const colorData = [
    1.0, 0.0, 0.0, 0.0,
    1.0, 0.5, 0.0, 0.8,
    1.0, 1.0, 0.0, 0.8,
    0.5, 1.0, 0.0, 0.8,
  ];

  //??? add program name
  return {
    position: {
      size: positionSize,
      data: positionData,
    },
    color: {
      size: colorSize,
      data: colorData,
    },
  };
}
