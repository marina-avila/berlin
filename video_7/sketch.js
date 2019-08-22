let capture;
let angle = 0;

function setup() {
  createCanvas(600,350);
  capture = createCapture(VIDEO);
  capture.size(width,height);
  capture.hide();
  noStroke();
}

function draw() {
  // background(0,0,0);
  capture.loadPixels();

  for ( let y = 0; y < height; y+= 25){
    for ( let x = 0; x < width; x+= 25){
      const i = y * width + x;
      const darkness = (255 - capture.pixels[i * 4]) / 255;
      const radius = 10 * darkness;
      let c = capture.get(x,y);
      fill(c);
      let d1 = sin(angle+x)*20;
      rect(x,y,23,5+d1);
    }
  }

  // fill(0);
  // rect(0,0,mouseX,height);
  angle += 0.02;

}// end draw loop
