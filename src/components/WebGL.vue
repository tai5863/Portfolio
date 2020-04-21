<template>
  <div class="webgl_comp">
    <canvas id="canvas" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 100vw; height: 100vh;"></canvas>
  </div>
</template>

<script src="https://wgld.org/j/minMatrixb.js"></script>

<script>
export default {
  name: "WebGL",
  data () {
    const canvas = null;
    return {
      canvas
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.runAll();
  },
  methods: {
    runAll: function() {
      'use strict';

      let gl, run, c;

      c = this.canvas;
      const resizeCanvas = function(){
        c.width = window.innerWidth;
        c.height = window.innerHeight;
      }
      window.addEventListener('resize', resizeCanvas);

      gl = c.getContext('webgl2');

      if (gl) {
        console.log('ready');
      } else {
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, c.width, c.height);
        alert('webgl2 unsupported');
        return;
      }

      init();

      function init(){
        // transform feedback object
        let transformFeedback = gl.createTransformFeedback();
        gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, transformFeedback);

        let outVaryings = ['vPosition', 'vVelocity'];

        let v_shader = create_shader('vs_transform');
        let f_shader = create_shader('fs_transform');
        let prg = create_program_tf_separate(v_shader, f_shader, outVaryings);

        let attLocation = [];
        attLocation[0] = 0;
        attLocation[1] = 1;
    
        let attStride = [];
        attStride[0] = 3;
        attStride[1] = 3;
    
        let uniLocation = [];
        uniLocation[0] = gl.getUniformLocation(prg, 'time');
    
        v_shader = create_shader('vs_main');
        f_shader = create_shader('fs_main');
        let fPrg = create_program(v_shader, f_shader);
    
        let fAttLocation = [];
        fAttLocation[0] = 0;
        fAttLocation[1] = 1;
        fAttLocation[2] = 2;
        fAttLocation[3] = 3;
        fAttLocation[4] = 4;
    
        let fAttStride = [];
        fAttStride[0] = 3;
        fAttStride[1] = 3;
        fAttStride[2] = 3;
        fAttStride[3] = 3;
        fAttStride[4] = 4;
    
        let fUniLocation = [];
        fUniLocation[0] = gl.getUniformLocation(fPrg, 'mvpMatrix');
        fUniLocation[1] = gl.getUniformLocation(fPrg, 'invMatrix');
        
        let cubeData = cube(0.03);
        let cPosition = create_vbo(cubeData.p);
        let cNormal = create_vbo(cubeData.n);
        let cVBOList = [cPosition, cNormal];
        let cIndex = create_ibo(cubeData.i);

        let instanceCount = 100000;
    
        let instancePositions = [];
        let instanceVelocities = [];
        let instanceColors = [];

        let instanceFeedbackPositions = [];
        let instanceFeedbackVelocities = [];

        let offsetPosition = 3;
        let offsetVelocity = 3;
        let offsetColor = 4;

        for (let i = 0; i < instanceCount; i++) {
          // position 
          let range = 10;
          let x = Math.random() * range - range / 2;
          let y = Math.random() * range - range / 2;
          let z = Math.random() * range - range / 2;
          instancePositions[i * offsetPosition] = x;
          instancePositions[i * offsetPosition + 1] = y;
          instancePositions[i * offsetPosition + 2] = z;
          
          // velocity
          instanceVelocities[i * offsetVelocity] = Math.random();
          instanceVelocities[i * offsetVelocity + 1] = Math.random();
          instanceVelocities[i * offsetVelocity + 2] = Math.random();

          // color
          let color = [Math.random(), 0.0, Math.random(), 1.0];
          instanceColors[i * offsetColor] = color[0];
          instanceColors[i * offsetColor + 1] = color[1];
          instanceColors[i * offsetColor + 2] = color[2];
          instanceColors[i * offsetColor + 3] = color[3];

        }  

        instanceFeedbackPositions = new Float32Array(instanceCount * 3);
        instanceFeedbackVelocities = new Float32Array(instanceCount * 3);   
        
        let iColor = create_vbo(instanceColors);

        let iPositionR = create_vbo(instancePositions);
        let iVelocityR = create_vbo(instanceVelocities);
        let iPositionW = create_vbo_feedback(instanceFeedbackPositions);
        let iVelocityW = create_vbo_feedback(instanceFeedbackVelocities);

        const swapVBOs = function(){
          let tmpP = iPositionR;
          let tmpV = iVelocityR;
          iPositionR = iPositionW;
          iVelocityR = iVelocityW;
          iPositionW = tmpP;
          iVelocityW = tmpV;
        };

        let m = new matIV();
        let mMatrix = m.identity(m.create());
        let vMatrix = m.identity(m.create());
        let pMatrix = m.identity(m.create());
        let tmpMatrix = m.identity(m.create());
        let mvpMatrix = m.identity(m.create());
        let invMatrix = m.identity(m.create());

        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.disable(gl.RASTERIZER_DISCARD);

        let startTime = Date.now();
        let nowTime = 0;
        let count = 0;
        run = true;

        render();
        
        function render(){
          
          nowTime = (Date.now() - startTime) / 1000;

          count = count + 1;
          
          m.lookAt([0.0, 0.0, 15.0], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0], vMatrix);
          m.perspective(90, c.width / c.height, 0.01, 1000.0, pMatrix);
          m.multiply(pMatrix, vMatrix, tmpMatrix);

          gl.useProgram(prg);

          // uniform
          gl.uniform1f(uniLocation[0], nowTime);
          
          // bind buffer
          gl.bindBuffer(gl.ARRAY_BUFFER, iPositionR);
          gl.enableVertexAttribArray(attLocation[0]);
          gl.vertexAttribPointer(attLocation[0], attStride[0], gl.FLOAT, false, 0, 0);

          gl.bindBuffer(gl.ARRAY_BUFFER, iVelocityR);
          gl.enableVertexAttribArray(attLocation[1]);
          gl.vertexAttribPointer(attLocation[1], attStride[1], gl.FLOAT, false, 0, 0);
      
          gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, iPositionW);
          gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, iVelocityW);
          
          gl.enable(gl.RASTERIZER_DISCARD);
          gl.beginTransformFeedback(gl.POINTS);

          gl.drawArrays(gl.POINTS, 0, instanceCount);
          
          gl.disable(gl.RASTERIZER_DISCARD);
          gl.endTransformFeedback();
          gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
          gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, null);
          
          // swap
          swapVBOs();

          // clear
          gl.clearColor(0.0, 0.0, 0.0, 1.0);
          gl.clearDepth(1.0);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          gl.viewport(0, 0, c.width, c.height);

          gl.useProgram(fPrg);
          
          // bind buffer
          set_attribute(cVBOList, fAttLocation, fAttStride);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cIndex);
          
          gl.bindBuffer(gl.ARRAY_BUFFER, iPositionR);
          gl.enableVertexAttribArray(fAttLocation[2]);
          gl.vertexAttribPointer(fAttLocation[2], fAttStride[2], gl.FLOAT, false, 0, 0);
      
          gl.vertexAttribDivisor(2, 1);

          gl.bindBuffer(gl.ARRAY_BUFFER, iVelocityR);
          gl.enableVertexAttribArray(fAttLocation[3]);
          gl.vertexAttribPointer(fAttLocation[3], fAttStride[3], gl.FLOAT, false, 0, 0);

          gl.vertexAttribDivisor(3, 1);

          gl.bindBuffer(gl.ARRAY_BUFFER, iColor);
          gl.enableVertexAttribArray(fAttLocation[4]);
          gl.vertexAttribPointer(fAttLocation[4], fAttStride[4], gl.FLOAT, false, 0, 0);

          gl.vertexAttribDivisor(4, 1);

          m.multiply(tmpMatrix, mMatrix, mvpMatrix);
          m.inverse(mMatrix, invMatrix);

          // uniform
          gl.uniformMatrix4fv(fUniLocation[0], false, mvpMatrix);
          gl.uniformMatrix4fv(fUniLocation[1], false, invMatrix);
          
          gl.drawElementsInstanced(gl.TRIANGLES, cubeData.i.length, gl.UNSIGNED_SHORT, 0, instanceCount);

          gl.flush();

          if (run) {requestAnimationFrame(render);}
        } 
      }

      function create_shader(id){
        let shader;
        let scriptElement = document.getElementById(id);
        if(!scriptElement){return;}
        switch(scriptElement.type){
          case 'x-shader/x-vertex':
            shader = gl.createShader(gl.VERTEX_SHADER);
            break;
          case 'x-shader/x-fragment':
            shader = gl.createShader(gl.FRAGMENT_SHADER);
            break;
          default :
            return;
        }
        gl.shaderSource(shader, scriptElement.text);
        gl.compileShader(shader);
        if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
          return shader;
        }else{
          alert(gl.getShaderInfoLog(shader));
        }
      }

      function create_program(vs, fs){
        let program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if(gl.getProgramParameter(program, gl.LINK_STATUS)){
          gl.useProgram(program);
          return program;
        }else{
          alert(gl.getProgramInfoLog(program));
        }
      }

      function create_program_tf_separate(vs, fs, varyings){
        let program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.transformFeedbackVaryings(program, varyings, gl.SEPARATE_ATTRIBS);
        gl.linkProgram(program);
        if(gl.getProgramParameter(program, gl.LINK_STATUS)){
          gl.useProgram(program);
          return program;
        }else{
          alert(gl.getProgramInfoLog(program));
        }
      }

      function create_vbo(data){
        let vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        return vbo;
      }

      function create_vbo_feedback(data){
        let vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_COPY);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        return vbo;
      }

      function set_attribute(vbo, attL, attS){
        for(let i in vbo){
          gl.bindBuffer(gl.ARRAY_BUFFER, vbo[i]);
          gl.enableVertexAttribArray(attL[i]);
          gl.vertexAttribPointer(attL[i], attS[i], gl.FLOAT, false, 0, 0);
        }
      }

      function create_ibo(data){
        
        let ibo = gl.createBuffer();
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
        
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), gl.STATIC_DRAW);
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        return ibo;
      }
    }
  }
}
</script>

<style scoped>
</style>
