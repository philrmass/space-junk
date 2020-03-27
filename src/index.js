import { initCanvas, updateCanvas, drawCanvas } from './canvas';
import { initBackground, updateBackground, drawBackground } from './background';
import { initCharacters, updateCharacters, drawCharacters } from './characters';

function main() {
  console.log('SPACE JUNK'); // eslint-disable-line no-console
  let state = initState();

  function update(timestamp) { //eslint-disable-line no-unused-vars
    state = updateState(state);
    draw(state);
    window.requestAnimationFrame(update);
  }
  window.requestAnimationFrame(update);
}

function initState() {
  const canvas = initCanvas();
  const gl = canvas.getContext('webgl');
  const background = initBackground();
  const characters = initCharacters(gl);

  return {
    canvas,
    gl,
    background,
    characters,
  };
}

function updateState(state) {
  const canvas = updateCanvas(state);
  const gl = state.gl;
  const background = updateBackground(state);
  const characters = updateCharacters(state);

  return {
    canvas,
    gl,
    background,
    characters,
  };
}

function draw(state) {
  drawCanvas(state);
  drawBackground(state);
  drawCharacters(state);
}

window.onload = main;
/*
function getGraphData(gl, colors) {
  const program = initProgram(gl, graphVs, graphFs);
  if (!program) {
    return false;
  }
  const programInfo = {
    program,
    attribs: {
      position: gl.getAttribLocation(program, 'pos0'),
      color: gl.getAttribLocation(program, 'col0'),
    },
    uniforms: {
      projection: gl.getUniformLocation(program, 'projection'),
      modelView: gl.getUniformLocation(program, 'modelView'),
    },
  };
  const bufs = initBuffers(gl, colors);

  return [bufs, programInfo];
}

function Graph({ colors }) {
  const [programInfo, setProgramInfo] = useState(null);
  const [rotation, setRotation] = useState({ x: 0.2 * Math.PI, y: 0.75 * Math.PI });

  useEffect(() => {
    setRotation({ x: 0.2 * Math.PI, y: 0.75 * Math.PI });
    if (canvasRef && colors && Object.keys(colors).length > 0) {
      canvasRef.current.width = 500;
      canvasRef.current.height = 500;
      const gl = canvasRef.current.getContext('webgl', { alpha: false });
      const [b, pi] = getGraphData(gl, colors);
      setBufs(b);
      setProgramInfo(pi);
      console.log('DATA');
    }
  }, [colors]);

  useEffect(() => {
    if (canvasRef && bufs && programInfo) {
      const gl = canvasRef.current.getContext('webgl', { alpha: false });
      renderGraph(gl, bufs, programInfo, rotation);
    }
  }, [rotation, bufs, programInfo]);

  function handleMouseMove(e) {
    const scale = 0.0035;
    const rotXMax = 0.499 * Math.PI;
    const rotXMin = -0.499 * Math.PI;
    const rotYMax = 2 * Math.PI;

    if (e.buttons & 1) {
      let rotX = rotation.x + scale * e.movementY;
      if (rotX > rotXMax) {
        rotX = rotXMax;
      }
      if (rotX < rotXMin) {
        rotX = rotXMin;
      }
      let rotY = rotation.y + scale * e.movementX;
      if (rotY > rotYMax) {
        rotY -= rotYMax;
      }
      if (rotY < 0) {
        rotY += rotYMax;
      }
      setRotation({ x: rotX, y: rotY });
    }
  }
*/
