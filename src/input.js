export function initInput() {
  let frame = 0;
  let lastTimestamp = 0;
  let lastKeys = [];

  window.onkeydown = (e) => {
    lastKeys.push(e.key);
  };

  return (timestamp) => {
    frame = frame + 1;
    const hasFocus = document.hasFocus();
    const dt = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    const keys = lastKeys;
    lastKeys = [];

    return {
      frame,
      hasFocus,
      dt,
      keys,
    };
  };
}
