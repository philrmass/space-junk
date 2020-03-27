/*
    var img, tex, vloc, tloc, vertexBuff, texBuff;

    var cvs3d = document.getElementById('cvs');
    var ctx3d = cvs3d.getContext('experimental-webgl');
    var uLoc;

    // create shaders
    var vertexShaderSrc =
    "attribute vec2 aVertex;" +
    "attribute vec2 aUV;" +
    "varying vec2 vTex;" +
    "uniform vec2 pos;" +
    "void main(void) {" +
    "  gl_Position = vec4(aVertex + pos, 0.0, 1.0);" +
    "  vTex = aUV;" +
    "}";

    var fragmentShaderSrc =
    "precision highp float;" +
    "varying vec2 vTex;" +
    "uniform sampler2D sampler0;" +
    "void main(void){" +
    "  gl_FragColor = texture2D(sampler0, vTex);"+
    "}";

    var vertShaderObj = ctx3d.createShader(ctx3d.VERTEX_SHADER);
    var fragShaderObj = ctx3d.createShader(ctx3d.FRAGMENT_SHADER);
    ctx3d.shaderSource(vertShaderObj, vertexShaderSrc);
    ctx3d.shaderSource(fragShaderObj, fragmentShaderSrc);
    ctx3d.compileShader(vertShaderObj);
    ctx3d.compileShader(fragShaderObj);

    var progObj = ctx3d.createProgram();
    ctx3d.attachShader(progObj, vertShaderObj);
    ctx3d.attachShader(progObj, fragShaderObj);

    ctx3d.linkProgram(progObj);
    ctx3d.useProgram(progObj);

    ctx3d.viewport(0, 0, 1024, 768);

    vertexBuff = ctx3d.createBuffer();
    ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, vertexBuff);
    ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, -1, 1, 1]), ctx3d.STATIC_DRAW);

    texBuff = ctx3d.createBuffer();
    ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, texBuff);
    ctx3d.bufferData(ctx3d.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), ctx3d.STATIC_DRAW);

    vloc = ctx3d.getAttribLocation(progObj, "aVertex");
    tloc = ctx3d.getAttribLocation(progObj, "aUV");
    uLoc = ctx3d.getUniformLocation(progObj, "pos");

    img = new Image();
    img.src = "image.jpg";

    img.onload = function(){
        tex = ctx3d.createTexture();
        ctx3d.bindTexture(ctx3d.TEXTURE_2D, tex);
        ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_MIN_FILTER, ctx3d.NEAREST);
        ctx3d.texParameteri(ctx3d.TEXTURE_2D, ctx3d.TEXTURE_MAG_FILTER, ctx3d.NEAREST);
        ctx3d.texImage2D(ctx3d.TEXTURE_2D, 0,  ctx3d.RGBA,  ctx3d.RGBA, ctx3d.UNSIGNED_BYTE, this);

        ctx3d.enableVertexAttribArray(vloc);
        ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, vertexBuff);
        ctx3d.vertexAttribPointer(vloc, 2, ctx3d.FLOAT, false, 0, 0);

        ctx3d.enableVertexAttribArray(tloc);
        ctx3d.bindBuffer(ctx3d.ARRAY_BUFFER, texBuff);
        ctx3d.bindTexture(ctx3d.TEXTURE_2D, tex);
        ctx3d.vertexAttribPointer(tloc, 2, ctx3d.FLOAT, false, 0, 0);

        ctx3d.drawArrays(ctx3d.TRIANGLE_FAN, 0, 4);
*/
