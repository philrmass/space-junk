function main() {
  console.log('SPACE JUNK');
  let state = getDefaultState();

  function update(timestamp) {
    state = updateState(state);
    drawBackground(state);
    window.requestAnimationFrame(update);
  }
  window.requestAnimationFrame(update);
}

function initializeCanvas() {
  const canvas = document.getElementById('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';

  return canvas;
}

function getDefaultState() {
  const canvas = initializeCanvas();
  const gl = canvas.getContext('webgl');
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    canvas,
    gl,
    background: {
      width,
      height,
      color: [0.5, 1.0, 0.0],
    },
  };
}

function updateState(state) {
  const inc = 0.001;
  let red = state.background.color[0] + inc;
  red = red > 1.0 ? red - 1.0 : red;
  const color = [red, ...state.background.color.slice(1)];
  const width = window.innerWidth;
  const height = window.innerHeight;
  const background = {
    ...state.background,
    color,
    width,
    height,
  }

  return {
    ...state,
    background,
  }
}

function drawBackground(state) {
  state.canvas.width = state.background.width;
  state.canvas.height = state.background.height;
  state.gl.clearColor(...state.background.color, 1.0);
  state.gl.clear(state.gl.COLOR_BUFFER_BIT);
}

window.onload = main;

/*
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { mat4 } from 'gl-matrix';
import styles from '../styles/Graph.module.css';

const graphVs = `
attribute vec4 pos0;
attribute vec4 col0;
uniform mat4 modelView;
uniform mat4 projection;
varying lowp vec4 vfCol0;

void main() {
  gl_Position = projection * modelView * pos0;
  gl_PointSize = 2.0;
  vfCol0 = col0;
}
`;

const graphFs = `
varying lowp vec4 vfCol0;

void main() {
  gl_FragColor = vfCol0;
}
`;

function initProgram(gl, vsSource, fsSource) {
  const vs = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) {
    return false;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(`Program link: ${gl.getProgramInfoLog(program)}`);
    return null;
  }
  return program;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(`Shader compile: ${gl.getShaderInfoLog(shader)}`);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function initBuffers(gl, data) {
  const scale = 2;
  const scaled = Object.values(data).map((color) => ({
    red: Math.round(color.red / scale),
    green: Math.round(color.green / scale),
    blue: Math.round(color.blue / scale),
    count: color.count,
  }));
  const grouped = scaled.reduce((grouped, color) => {
    const key = `${color.red}-${color.green}-${color.blue}`;
    if (grouped[key]) {
      grouped[key] = {
        ...grouped[key],
        count: grouped[key].count + color.count,
      }
    } else {
      grouped[key] = {
        red: color.red,
        green: color.green,
        blue: color.blue,
        count: color.count,
      };
    }
    return grouped;
  }, {});
  const all = Object.values(grouped);
  const max = Math.round(255 / scale);
  console.log(`SCALE(${max})`, 'by', scale, 'from',  (scaled.length / 1000).toFixed(1), 'to', (all.length / 1000).toFixed(1), `${(100 * all.length / scaled.length).toFixed(1)}%`);

  const positionComponents = 3;
  const positionData = all.reduce((data, value) => {
    data.push(-0.5 + value.red / max);
    data.push(-0.5 + value.green / max);
    data.push(-0.5 + value.blue / max);
    return data;
  }, []);
  
  const countSum = all.reduce((sum, value) => sum + value.count, 0);
  const countAve = countSum / all.length;
  const logCountAve = Math.log(countAve);
  const colorComponents = 4;
  const colorData = all.reduce((data, value) => {
    const alpha = Math.log(value.count) / logCountAve;
    data.push(value.red / max);
    data.push(value.green / max);
    data.push(value.blue / max);
    data.push(alpha);
    return data;
  }, []);

  const positions = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positions);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positionData), gl.STATIC_DRAW);

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

function renderGraph(gl, bufs, programInfo, rotation) {
  gl.clearColor(0.5, 0.5, 0.5, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const fov = 20 * Math.PI / 180;
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const near = 0.1;
  const far = 100.0;
  const projection = mat4.create();
  const modelView = mat4.create();
  mat4.perspective(projection, fov, aspect, near, far);
  mat4.translate(modelView, modelView, [0, 0, -6]);
  mat4.rotate(modelView, modelView, rotation.x, [1, 0, 0]);
  mat4.rotate(modelView, modelView, rotation.y, [0, 1, 0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, bufs.positions);
  gl.vertexAttribPointer(programInfo.attribs.position, bufs.positionComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(programInfo.attribs.position);

  gl.bindBuffer(gl.ARRAY_BUFFER, bufs.colors);
  gl.vertexAttribPointer(programInfo.attribs.color, bufs.colorComponents, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(programInfo.attribs.color);

  gl.useProgram(programInfo.program);
  gl.uniformMatrix4fv(programInfo.uniforms.projection, false, projection);
  gl.uniformMatrix4fv(programInfo.uniforms.modelView, false, modelView);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  gl.viewport(0.0, 0.0, gl.canvas.clientWidth, gl.canvas.clientHeight);
  gl.drawArrays(gl.POINTS, 0, bufs.positionCount);
}

function Graph({ colors }) {
  const canvasRef = useRef(null);
  const [bufs, setBufs] = useState(null);
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

  return (
    <section className={styles.section} onMouseMove={handleMouseMove}>
      <header className={styles.header}>
        Graph {Object.keys(colors).length} colors
      </header>
      <div className={styles.box}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  );
}
*/
