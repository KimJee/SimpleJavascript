var t = function (p) {
  class Animated_Object{
  
    constructor(_x, _y, _radius, _velocity, _rotation_flag)
    {
      this.x = _x;
      this.y = _y;
      this.centerX = _x;
      this.centerY = _y;
      this.r = _radius
      this.velocity = _velocity;
      this.rotation_flag = _rotation_flag
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
      if (this.rotation_flag == 1)
      {
        this.deg = (this.deg + 10) % 360;
        // console.log(this.deg);
      }
      else
      {
        this.deg = (this.deg - 10) % 360;
        // console.log(this.deg);
      }
    }
  }
  
  var Circle_Array = [];

  function Generate_Random_Number(low, high)
  {
    return Math.floor((Math.random() * ((high+1) - low)) + low);
  }

  let CANVAS_SIZE_X = 400;
  let CANVAS_SIZE_Y = 400;

  p.setup = function() {
    p.frameRate(30);
    p.createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
    p.background(100);  
    var CIRCLE_ENTITIES = 100;
    for (let i = 0; i < CIRCLE_ENTITIES; ++i)
    {
        Circle_Array[i] = new Animated_Object(Generate_Random_Number(0, CANVAS_SIZE_X), Generate_Random_Number(0, CANVAS_SIZE_Y), Generate_Random_Number(1, 10), Generate_Random_Number(1, 10), Generate_Random_Number(0, 1));
    }
  };
  
  p.draw = function() {
    p.background(100);
    Circle_Array.forEach(element => {
      element.tick();
    });
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
