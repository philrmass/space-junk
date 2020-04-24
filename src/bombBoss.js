export function initBombBoss() {
  return {
    x: 0,
    y: 200,
    width: 200,
    height: 200,
    program: 'texture',
    texture: 'bombBoss',
  };
}

export function updateBombBoss(
  { characters, background },
  { hasFocus },
) {
  const { bombBoss } = characters;

  if (hasFocus) {
    bombBoss.x = bombBoss.x + 5;
    bombBoss.y = bombBoss.y + 5;

    if (bombBoss.x > background.width) {
      bombBoss.x -= background.width;
    }
    if (bombBoss.y > background.height) {
      bombBoss.y -= background.height;
    }
  }

  return bombBoss;
}
