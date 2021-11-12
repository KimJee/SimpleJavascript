var t = function (p) {
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
      p.circle(this.x, this.y, this.r)
      
      this.increment()
      p.angleMode(p.DEGREES);
      this.x = this.centerX + this.r*p.cos(this.deg);
      this.y = this.centerY + this.r*p.sin(this.deg);
      
      // console.log(this.x);
      // console.log(this.y);
      // console.log(this.deg);
      
    }
    
    increment()
    {
      this.deg = (this.deg + 10) % 360;
      console.log(this.deg);
    }
  }
  
  var MyCircle = new Animated_Object(200, 200, 10, 1);
  var MyCircle_1 = new Animated_Object(210, 210, 10, 1);
  
  p.setup = function() {
    p.frameRate(30);
    p.createCanvas(400, 400);
    p.background(100);
  };
  
  p.draw = function() {
    p.background(100);
    MyCircle.tick();
    MyCircle_1.tick();
  };
}

var myp5 = new p5(t, 'c2');

// var t = function( p ) { 
//   var x = 100.0; 
//   var y = 100; 
//   var speed = 2.5; 
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(100);
//     p.fill(1);
//     x += speed; 
//     if(x > p.width){
//       x = 0; 
//     }
//     p.ellipse(x,y,50,50);

//   };
// };
// var myp5 = new p5(t, 'c2');
