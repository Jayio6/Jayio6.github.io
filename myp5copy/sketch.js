let c1,c2;

function setup() {
  createCanvas(800,600);
  c1 = color("#041F5E"); //gradient background color
  c2 = color("#FF974E"); //gradient background color
  
  for(let y=0; y<height; y++){ //coding for gradient
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() {
  textSize(70); //text size
  fill("#03017A"); //fill color of text
  textAlign(CENTER,RIGHT); //text placement
  text('Rest',400,mouseY,5,mouseY); //text
  describe('text moves up and down with mouse y-position');
  fill("#E3E3E3"); //fill color of moon and stars
  ellipse(56, 46, 55, 55); //size of the moon
  ellipse(116, 76, 3, 3); //star
  ellipse(166, 44, 3, 3); //star
  ellipse(217, 37, 3, 3); //star
  ellipse(235, 37, 3, 3); //star
  ellipse(235, 90, 3, 3); //star
  ellipse(340, 46, 3, 3); //star
  ellipse(340, 90, 3, 3); //star
  ellipse(370, 46, 3, 3); //star
  ellipse(480, 20, 3, 3); //star
  ellipse(480, 65, 3, 3); //star
  ellipse(480, 120, 3, 3); //star
  ellipse(500, 16, 3, 3); //star
  ellipse(600, 46, 3, 3); //star
  ellipse(600, 96, 3, 3); //star
  ellipse(660, 56, 3, 3); //star
  ellipse(700, 77, 3, 3); //star
  ellipse(750, 90, 3, 3); //star
  fill("Orange"); //fill color of sun
  ellipse(400, 600, 225, 225); // size of sun
}



