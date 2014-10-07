function MultiTriangle_4() {
  this.time = 0.0;
  this.time2 = random(100);
  this.increment = 0.02;

  this.v1 = new PVector(0, 50);
  this.v2 = new PVector(0, 0);
  this.v3 = new PVector(50, 50);
  this.center = new PVector(0, 0);

  this.n1 = new PVector(0, 0);
  this.n2 = new PVector(0, 0);
  this.n3 = new PVector(0, 0);

  this.multiTri();
}

MultiTriangle_4.prototype = {
  multiTri : function() {

    var v1v2 = PVector.sub(this.v2, this.v1);
    var v1v3 = PVector.sub(this.v3, this.v1);
    var v2v3 = PVector.sub(this.v3, this.v2);
    var v2v1 = PVector.sub(this.v1, this.v2);
    var v3v1 = PVector.sub(this.v1, this.v3);
    var v3v2 = PVector.sub(this.v2, this.v3);

    var a = PVector.angleBetween(v1v2, v1v3);
    var b = PVector.angleBetween(v2v1, v2v3);

    var mag_v1v2 = v1v2.mag();
    var mag_v2v3 = v2v3.mag();
    var mag_v3v1 = v3v1.mag(); 

    var temp_v1 = new PVector(0, 0);
    var temp_v2 = new PVector(0, 0);
    var temp_v3 = new PVector(0, 0);

    temp_v1.set(this.v1);
    temp_v2.set(this.v2);
    temp_v3.set(this.v3);

    temp_v1.mult(mag_v2v3/(mag_v1v2 + mag_v2v3 + mag_v3v1));
    temp_v2.mult(mag_v3v1/(mag_v1v2 + mag_v2v3 + mag_v3v1));
    temp_v3.mult(mag_v1v2/(mag_v1v2 + mag_v2v3 + mag_v3v1));

    this.center.add(temp_v1);
    this.center.add(temp_v2);
    this.center.add(temp_v3);

    //println(center);



    this.n1 = PVector.sub(this.v1, this.center);
    this.n2 = PVector.sub(this.v2, this.center);
    this.n3 = PVector.sub(this.v3, this.center);
  },


  display : function() {
    this.time += this.increment;
    this.time2 += this.increment;

    if (this.time > 5) this.increment = this.increment * -1;
    if (this.time < 0) this.increment = this.increment *-1;
    for (var i = 40;i >= 0; i -= 2) {

      //PVector temp_c = new PVector(c.x, c.y);
      var temp_n1 = new PVector(this.n1.x, this.n1.y);
      var temp_n2 = new PVector(this.n2.x, this.n2.y);
      var temp_n3 = new PVector(this.n3.x, this.n3.y);

      temp_n1.mult(i*0.1);
      temp_n2.mult(i*0.1);
      temp_n3.mult(i*0.1);
      //println(temp_n3);

      
      if ((this.time <= 0) || (this.time <=5)) {
        var ni1 = noise(this.time)*20 - 10;
        var ni2 = noise(this.time2)*20 - 10;


        pushMatrix();
        translate(this.center.x+ni1, this.center.y+ni2);
        noFill();
        triangle(temp_n1.x, temp_n1.y, temp_n2.x, temp_n2.y, temp_n3.x, temp_n3.y);
        popMatrix();
      } 
      else {
        var ni1 = noise(this.time)*20;
        var ni2 = noise(this.time)*20;

        pushMatrix();
        translate(this.center.x+ni1, this.center.y+ni2);
        noFill();
        triangle(temp_n1.x, temp_n1.y, temp_n2.x, temp_n2.y, temp_n3.x, temp_n3.y);
        popMatrix();
      }
    }
  }
}
