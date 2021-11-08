class Rectangle {
  constructor(x, y, height, width) 
  {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
  draw()
  {
    line(this.x, this.y, this.x+this.width, this.y);
    line(this.x+this.width, this.y, this.x+this.width, this.y+this.height);
    line(this.x+this.width, this.y+this.height, this.x, this.y+this.height);
    line(this.x, this.y+this.height, this.x, this.y);
  }
}

class VelocityRectangle extends Rectangle {
  constructor(x, y, height, width, speedX, speedY)
  {
    super(x, y, height, width);
    this.speedX = speedX;
    this.speedY = speedY;
  }
  
  animate()
  {
    this.draw();
    this.check_border()
    this.x += this.speedX;
    this.y += this.speedY;
  }
  
  check_border()
  {
    if (this.x <= 0) {
      this.speedX *= -1;
    }
    
    if (this.y <= 0) {
      this.speedY *= -1;
    }    
    
    if (this.x+this.width >= CANVAS_SIZE_X){
      this.speedX *= -1;
    }
    
    if (this.y+this.height >= CANVAS_SIZE_Y) {
      this.speedY *= -1;
    }
  }
}


  CANVAS_SIZE_X = 400;
  CANVAS_SIZE_Y = 400;

function setup() {
  createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);

  myRectangle = new Rectangle(100, 100, 100, 100);
  AnimatedRect = new VelocityRectangle(100, 50, 50, 50, 1, 1);
}

function draw() {
  background(220);
  AnimatedRect.animate();
  // myRectangle.draw();
  
}
