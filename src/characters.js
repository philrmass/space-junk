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

  //??? data = initObjectData(square);
  //??? data: { position: { size, data }};
  const positionComponents = 2;
  const { x, y, width, height } = square;
  const x1 = x + width;
  const y1 = y + height;
  const positionData = [
    x, y,
    x1, y,
    x, y1,
    x1, y1,
  ];

  //??? data: { color: { size, data }};
  const colorComponents = 4;
  const colorData = [
    1.0, 0.0, 0.0, 0.0,
    1.0, 0.5, 0.0, 0.8,
    1.0, 1.0, 0.0, 0.8,
    0.5, 1.0, 0.0, 0.8,
  ];

  //??? set = bindDataToVertices();
  //?? vertices { position { buf, size, count } };
  const positions = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positions);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positionData), gl.STATIC_DRAW);

  //?? vertices { position { buf, size, count } };
  const colors = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colors);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

  return {
    positions,
    positionComponents,
    positionCount: positionData.length / positionComponents,
    colors,
    colorComponents,
    colorCount: colorData.length / colorComponents,
  };
}
