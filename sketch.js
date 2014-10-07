var multitriangle;
var multitriangle2;
var multitriangle3;
var multitriangle4;


function setup() {
  background(255);
  createCanvas(1200, 800);
  noStroke();
  fill(0, 0, 0, 50);
  triangle(width/2-230, height/2+100, width/2-230, height/2-100, width/2-30, height/2+100);
  fill(0, 0, 0, 50);
  triangle(width/2-230, height/2+100, width/2-30, height/2-100, width/2-30, height/2+100);
  fill(0, 0, 0, 50);
  triangle(width/2+30, height/2+100, width/2+30, height/2-100, width/2+230, height/2+100);
  fill(0, 0, 0, 50);
  triangle(width/2+30, height/2+100, width/2+30, height/2-100, width/2+230, height/2-100);
  noFill();
  strokeWeight(0.8);
  stroke(0);

  multitriangle = new MultiTriangle_1();
  multitriangle2 = new MultiTriangle_2();
  multitriangle3 = new MultiTriangle_3();
  multitriangle4 = new MultiTriangle_4();
}

function draw() {
  background(255);
  //createCanvas(1200, 800);
  noStroke();
  fill(0, 0, 0, 50);
  triangle(width/2-230, height/2+100, width/2-230, height/2-100, width/2-30, height/2+100);
  fill(0, 0, 0, 50);
  triangle(width/2-230, height/2+100, width/2-30, height/2-100, width/2-30, height/2+100);
  fill(0, 0, 0, 50);
  triangle(width/2+30, height/2+100, width/2+30, height/2-100, width/2+230, height/2+100);
  fill(0, 0, 0, 50);
  triangle(width/2+30, height/2+100, width/2+30, height/2-100, width/2+230, height/2-100);
  noFill();
  strokeWeight(0.8);
  stroke(0);


  pushMatrix();
  translate(width/2 - 170, height/2 + 5);
  multitriangle.display();
  popMatrix();


  pushMatrix();
  translate(width/2 - 108, height/2 + 5);
  multitriangle2.display();
  popMatrix();

  pushMatrix();
  translate(width/2 + 90, height/2 - 56);
  multitriangle3.display();
  popMatrix();

  pushMatrix();
  translate(width/2 + 90, height/2 + 6);
  multitriangle4.display();
  popMatrix();
}


