
var s = function (p) {
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
      p.line(this.x, this.y, this.x+this.width, this.y);
      p.line(this.x+this.width, this.y, this.x+this.width, this.y+this.height);
      p.line(this.x+this.width, this.y+this.height, this.x, this.y+this.height);
      p.line(this.x, this.y+this.height, this.x, this.y);
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

  var CANVAS_SIZE_X = 400;
  var CANVAS_SIZE_Y = 400;

  p.setup = function() {
    p.createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
    myRectangle = new Rectangle(100, 100, 100, 100);
    AnimatedRect = new VelocityRectangle(100, 50, 50, 50, 1, 1);
  };

  p.draw = function() {
    p.background(220);
    AnimatedRect.animate();
    // myRectangle.draw();      
  };

};

var myp5 = new p5(s, 'c1');

// var s = function( p ) { // p could be any variable name
//   var x = 100; 
//   var y = 100;
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x,y,50,50);
//   };
// };
// var myp5 = new p5(s, 'c1');



