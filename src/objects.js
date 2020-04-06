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

  const coordSize = 2;
  const coordData = [
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    1.0, 1.0,
  ];

  return {
    position: {
      size: positionSize,
      data: positionData,
    },
    color: {
      size: colorSize,
      data: colorData,
    },
    coord: {
      size: coordSize,
      data: coordData,
    },
    program: object.program,
  };
}
