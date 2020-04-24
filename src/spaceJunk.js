export function initSpaceJunk() {
  return {
    x: 100,
    y: 100,
    width: 50,
    height: 150,
    program: 'texture',
    texture: 'spaceJunk',
  };
}

export function updateSpaceJunk(
  { characters, background },
  { hasFocus, keys },
) {
  const { spaceJunk } = characters;

  if (keys.length > 0) {
    console.log(`KEYS: [${keys}]`);
  }

  if (hasFocus) {
    if (keys.length > 0) {
      if (keys[0] === 'ArrowRight') {
        spaceJunk.x = spaceJunk.x + 5;
      } else if (keys[0] === 'ArrowLeft') {
        spaceJunk.x = spaceJunk.x - 5;
      } else if (keys[0] === 'ArrowUp') {
        spaceJunk.y = spaceJunk.y + 5;
      } else if (keys[0] === 'ArrowDown') {
        spaceJunk.y = spaceJunk.y - 5;
      }
    }

    if (spaceJunk.x > background.width) {
      spaceJunk.x -= background.width;
    }
    if (spaceJunk.y > background.height) {
      spaceJunk.y -= background.height;
    }
  }

  return spaceJunk;
}
