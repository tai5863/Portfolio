<template>
  <div class="mixed_color_noise_comp" style="position: absolute; z-index: -1000;">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "MixedColorNoise",
  props: {
    colors: Array
  },
  data () {
    const canvas = null;
    let renderColors = this.colors;
    return {
      canvas,
      renderColors
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas');
    this.runAll();
  },
  methods: {
    runAll: function() {
        const canvas = this.canvas;
        
        const gl = canvas.getContext('webgl');

        const _this = this;

        const resizeCanvas = () => {
          canvas.width = document.body.clientWidth;
          canvas.height = document.body.clientHeight;
        }
        addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let wheel = 0.0;

        const mouseWheel = () => {
          wheel += 0.005;
        }
        addEventListener('mousewheel', mouseWheel);

        gl.viewport(0.0, 0.0, canvas.width, canvas.height);
        
        let program = createProgram('vs', 'mixed_color_noise_fs');

        let uniforms = getUniformLocations(program, ['col1', 'col2', 'time', 'scale', 'noiseScale', 'wheel', 'resolution']);

        render();

        function render() {

          let position = [
            -1.0,  1.0,  0.0,
            1.0,  1.0,  0.0,
            -1.0, -1.0,  0.0,
            1.0, -1.0,  0.0
          ];
          
          let index = [
            0, 2, 1,
            1, 2, 3
          ];

          let vPosition = create_vbo(position);
          let vIndex = create_ibo(index);
          let vAttLocation = gl.getAttribLocation(program, 'position');
          gl.bindBuffer(gl.ARRAY_BUFFER, vPosition);
          gl.enableVertexAttribArray(vAttLocation);
          gl.vertexAttribPointer(vAttLocation, 3, gl.FLOAT, false, 0, 0);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vIndex);

          function renderNoise(time) {
            gl.useProgram(program);
            gl.uniform3fv(uniforms['col1'], _this.renderColors[0]);
            gl.uniform3fv(uniforms['col2'], _this.renderColors[1]);
            gl.uniform1f(uniforms['time'], time);
            gl.uniform1f(uniforms['scale'], 1.0);
            gl.uniform1f(uniforms['noiseScale'], 3.0);
            gl.uniform1f(uniforms['wheel'], wheel);
            gl.uniform2fv(uniforms['resolution'], [canvas.width, canvas.height]);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
          }
          
          let previousRealSeconds = new Date().getTime();
          let time = 0;
          let count = 0;

          loop();

          function loop() {

            gl.viewport(0.0, 0.0, canvas.width, canvas.height);

            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            let currentRealSeconds = new Date().getTime();
            let dt = (currentRealSeconds - previousRealSeconds) * 0.00005;
            time += dt;
            if ((time - count) > 1.5) {
              count += 1.5;
            }

            previousRealSeconds = currentRealSeconds;

            renderNoise(time);

            gl.flush();

            setTimeout(loop, 1000 / 60);
          }
        }

        function createProgram(vs_id, fs_id) {

          function createShader(id) {

            let shader;
        
            let scriptElement = document.getElementById(id);
        
            if (!scriptElement) {return;}
        
            switch (scriptElement.type) {

                case 'x-shader/x-vertex':
                    shader = gl.createShader(gl.VERTEX_SHADER);
                    break;
                case 'x-shader/x-fragment':
                    shader = gl.createShader(gl.FRAGMENT_SHADER);
                    break;
                default:
                    return;
            }
        
            gl.shaderSource(shader, scriptElement.text);
        
            gl.compileShader(shader);
        
            if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                return shader;
            } else {
                throw(gl.getShaderInfoLog(shader));
            }
        }

          let vs = createShader(vs_id);
          let fs = createShader(fs_id);

          let program = gl.createProgram();
          
          gl.attachShader(program, vs);
          gl.attachShader(program, fs);

          gl.linkProgram(program);

          if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
            gl.useProgram(program);

            return program;
          } else {
            alert(gl.getProgramInfoLog(program));
          }
        }

        function getUniformLocations(program, uniforms) {

          let locations = {};

          for (let i = 0; i < uniforms.length; i++) {
            locations[uniforms[i]] = (gl.getUniformLocation(program, uniforms[i]));
          }

          return locations;
        }

        function create_vbo(data){
          let vbo = gl.createBuffer();
          
          gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
          
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
          
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
          
          return vbo;
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

