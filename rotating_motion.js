function setup() {
  frameRate(30);
  createCanvas(400, 400);
  background(100);
}

class Animated_Object{
  
  constructor(_x, _y, _radius, _velocity)
  {
    this.x = _x;
    this.y = _y;
    this.centerX = _x;
    this.centerY = _y;
    this.r = _radius
    this.velocity = _velocity;
    this.deg = 0;
  }
  
  
  tick()
  {
    circle(this.x, this.y, this.r)
    
    this.increment()
    angleMode(DEGREES);
    this.x = this.centerX + this.r*cos(this.deg);
    this.y = this.centerY + this.r*sin(this.deg);
    
    // console.log(this.x);
    // console.log(this.y);
    // console.log(this.deg);
    
  }
  
  increment()
  {
    this.deg = (this.deg + 10) % 360;
    // console.log(this.deg);
  }
}

let MyCircle = new Animated_Object(200, 200, 10, 1);
let MyCircle_1 = new Animated_Object(210, 210, 10, 1);

function draw() {
  background(100);
  MyCircle.tick();
  MyCircle_1.tick();
}
