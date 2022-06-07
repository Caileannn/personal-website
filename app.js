let w = 15;
let h = 15;
let xMax, yMax;
let colorA, colorB;
const noiseScale = 0.05;
const palette = ["#69FF7E", "#FFFFFF"];
var canvas;

function setup() {

  var cW = document.getElementById('body').clientWidth;
  var cH = document.getElementById('body').clientHeight;

  canvas = createCanvas(windowWidth, windowHeight);
  xMax = width / w;
  yMax = height / h;
  
  noStroke();
  
  colorA = color(0, 0, 0);
  colorB = color(0, 255, 0);
  
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
}

function draw() {
    xMax = width / w;
    yMax = height / h;
  for (let i = 0; i < xMax; i++) {
    for (let j = 0; j < yMax; j++) {
      let n = noise(i * noiseScale, j * noiseScale, frameCount * noiseScale * 0.25);
      let c = palette[floor((n * 8) % palette.length)];
      fill(c);
      rect(i * w, j * h, w, h);
    }
  }
}

function windowResized() {
    var cH = document.getElementById('body').clientHeight;
    resizeCanvas(windowWidth, windowHeight);
  }