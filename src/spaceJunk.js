export function initSpaceJunk() {
  return {
    x: 100,
    y: 100,
    width: 50,
    height: 150,
    program: 'texture',
    texture: 'mario',
  };
}

export function updateSpaceJunk(
  { characters, background },
  { hasFocus, keys },
) {
  const { spaceJunk } = characters;

  if (keys.length > 0) {
    console.log('KEYS:', keys);
  }

  if (hasFocus) {
    spaceJunk.x = spaceJunk.x + 1;
    spaceJunk.y = spaceJunk.y + 2;

    if (spaceJunk.x > background.width) {
      spaceJunk.x -= background.width;
    }
    if (spaceJunk.y > background.height) {
      spaceJunk.y -= background.height;
    }
  }

  return spaceJunk;
}
