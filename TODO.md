# Tasks
- Use params in program definitions
- Use param names for loading: pos, col, crd, mv, proj, sampler

- Add keyboard input
- Use dt in update motion
- Update use of VAO
- Move background.js, character.js, etc into 'src/objects'

- Add depth buffer (character plane, background foreground, etc)
- Add sound effects
- Add performance timers

# Refs
  const fov = 20 * Math.PI / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const near = 0.1;
  const far = 100.0;

  mat4.perspective(projection, fov, aspect, near, far);
  mat4.translate(modelView, modelView, [0, 0, -6]);
  mat4.rotate(modelView, modelView, rotation.x, [1, 0, 0]);
  mat4.rotate(modelView, modelView, rotation.y, [0, 1, 0]);
  //??? change to more efficient fromRotationTranslationScale(out, q, v, s)