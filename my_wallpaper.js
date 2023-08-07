//your parameter variables go here!

var cellWidth = 200;
var cellHeight = 200;
let shouldDraw = false;


var EyeY = 24 //19 posi
var HandY = 42 //50 posi
var PawSize = 12 //10 scale
var eyeSize = 88 //92 posi
var bodyX = 160//167 posi
var LegY = 57 //62 posi
var highY = 84//89 //position of the eye highlight //position


var blushSize = 4; //6 scale
var EyeX = 9
var BodySize = 166
var EyeY2 = 10


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 233, 166); //colour-background-light yello

 
}

function my_symbol() {
  
  var snowHatColour = color(247, 147, 184);
  var ballColour = color(247, 147, 184);

  //fill(247, 147, 184);//hat
  fill(snowHatColour);
  noStroke();
  beginShape();
  vertex(158, 123);
  vertex(158, 143);
  vertex(170, 137);
  endShape();

  

  drawHeat(166, 145);

  

  drawEye(164, 144);
  drawEye(170, 142);

  //ball
 

  //fill(255, 161, 66);

  fill(ballColour);
  drawBall(157, 123);




  drawHighlight(160, 122);

  

  drawBody(bodyX, BodySize);

  fill(247, 147, 184);//tie
  noStroke();
  beginShape();
  vertex(160, 152);
  vertex(167, 157);
  vertex(169, 154);
  endShape();
  beginShape();
  vertex(169, 154);
  vertex(172, 156);
  vertex(173, 151);
  endShape();

  drawBlush(164, 148);
  drawBlush(172, 145);


  fill(255, 177, 98);//nose
  noStroke();
  beginShape();
  vertex(169, 145);
  vertex(168, 148);
  vertex(177, 146);
  endShape();

  drawBase(168, 146);

  drawBottom(169, 160);
  drawBottom(169, 170);
  
  
  
  
}


  function drawHat(x,y){
  fill(247, 147, 184);//hat
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x, y);
  vertex(x, y);
  endShape();
  }
  
  
  //ball on hat

  

  function drawBall(x,y){
  ellipse(x, y, 10,10);
  }

  //highlight in eyes
  function drawHighlight(x,y){
  fill(255);
  ellipse(x, y, 1, 2);
  }
  
  function drawBody(x,y){
  fill(255);
  noStroke();
  ellipse(x, y, 38, 38);//bottom of the body
  }

   //bottoms on body
   function drawBottom(x,y){
   fill(247, 147, 184);
   noStroke();
   ellipse(x, y, 4,4);
   ellipse(x, y, 4,4);
   ellipse(x, y, 4,4);
   }

  //bow tie
  function drawTie(x,y){
  fill(247, 147, 184);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x, y);
  vertex(x, y);
  endShape();
  beginShape();
  vertex(x, y);
  vertex(x, y);
  vertex(x, y);
  endShape();
  }

  //heat
  function drawHeat(x,y){
  fill(255, 255, 255);
  noStroke();
  ellipse(x, y, 19, 19);
  }

  //eyes
  function drawEye(x,y){
  fill(0, 0, 0);
  noStroke();
  ellipse(x, y, 1.5, 1.5);
  ellipse(x, y, 1.5, 1.5);
  }

  function drawBlush(x,y){
  //blush
  fill(255, 185, 191);
  noStroke();
  ellipse(x, y, 4.9, 4.5);
  ellipse(x, y, 3.8, 3.8);
  }

  //nose
  function drawNose(x,y){
  fill(255, 177, 98);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x, y);
  vertex(x, y);
  endShape();
  }
  
  function drawBase(x,y){
  ellipse(x, y, 4, 3);


  //Penguin///////////////////////////////////////////////

  let shouldDrawLeg = true;
  
  if (shouldDrawLeg) {
    drawLeg(100, 100);
  }



drawLeg(25,LegY);
drawLeg(42,LegY);

drawHand(18,HandY);
drawHand(49,HandY);

drawBelly(34,40);// black

drawNeck2(33,27);

drawHeat2(33, 23);

drawEye2(28, EyeY);
drawEye2(39, EyeY);

drawFace2(33.33,27);

drawBlush2(blushSize,blushSize);
drawBlush2(blushSize,blushSize)


drawEyeball(28, 23);//左眼球
drawEyeball(38, 23);

drawHighlight2(28.9, 23);
drawHighlight2(38.9, 23);

drawMouse2(33, 23);

//belly


fill(255);
drawBelly2(33,45);


}

function drawLeg(x, y) {
  

  if (shouldDraw) {
    //leg
    let lineWidth = 1; // 
    stroke(lineWidth);
    fill(255, 160, 45);
    ellipse(x - 9, y, 12, 6);
    ellipse(x + 4 , y, 12, 6);
  } else{
    ellipse(x , y-9, 12, 6);
    ellipse(x , y+4, 12, 6);


  }
}




//body
function drawHand(x,y){
fill(0);
ellipse(x, y, 7, 20);//左手 
ellipse(x, y, 7, 20);//右手
}

function drawBelly(x,y){
ellipse(x, y, 37, 40);//肚皮
}

//belly
function drawBelly2(x,y){
ellipse(x,y,18,20)
}

//neck
function drawNeck2(x,y){
fill(0)
ellipse(x,y,32,15)
}


//heat
function drawHeat2(x,y){
fill(35)
ellipse(x, y, 30,31.5)
}


//eye
function drawEye2(x,y){
fill(255);
noStroke();
ellipse(x, y,9, 15);//左眼
ellipse(x, y, 9, 15);//右眼
}

function drawFace2(x,y){
 //face
 fill(255);
 noStroke();
 ellipse(x,y, 23, 10);
}

function drawBlush2(x,y){
 //blush
 fill(255, 160, 45);
 ellipse(27, 26, x, y);
 ellipse(39, 26, x, y);
}


//眼球
function drawEyeball(x,y){
fill(0);
ellipse(x, y, 2.8, 2.8);//左眼球
ellipse(x, y, 2.8, 2.8);//右眼球
}

function drawHighlight2(x,y){
 //highlight
 fill(255);
 ellipse(x, y,1,1);
 ellipse(x, y,1,1);
}
 

//mouse
function drawMouse2(x,y){
fill(255, 160, 45);
ellipse(x, y, 6, 4);



//cat body


stroke(86, 54, 33);
beginShape();
//fill(0);
fill(0);
vertex(103, 126); // first point
bezierVertex(121, 126, 122, 128, 103, 96);
vertex(103, 126);
bezierVertex(85, 126,86, 126, 103, 96);
endShape();
stroke(0);
line(103, 124, 103, 100);



//ear
stroke(86, 54, 33);
 beginShape();
 vertex(83, 92); // first point
 bezierVertex(75, 74, 73, 68, 95, 72);
 endShape();
 
 beginShape();
 vertex(123, 92); // first point
 bezierVertex(131, 74, 133, 68, 111, 72);
 endShape();
 

 stroke(86, 54, 33);
 fill(192, 194, 97);
 beginShape();
 vertex(83, 92); // first point
 bezierVertex(75, 74, 75, 68, 91, 78);
 endShape();
 
 beginShape();
 vertex(122.6, 92); // first point
 bezierVertex(131, 74, 131, 68, 115, 78);
 endShape();


 
//heat
 drawheatCat(103,88);

//eye

draweyeCat(30, 88);
draweyeCat(30, 88);
draweyeCat(30, 88);
draweyeCat(30, 88);

fill(0);
 ellipse(93, eyeSize, EyeX, EyeY2);
 ellipse(112.2, eyeSize, EyeX, EyeY2);


//white highlight

drawWhite(97, highY, 4, 4)
drawWhite(116, highY, 4, 4)

//mouse



fill(255);
triangle(100, 97, 105, 97, 103, 102);

//leg
stroke(86, 54, 33);
fill(0);
beginShape();
vertex(103, 124);
bezierVertex(98, 125, 98, 120, 97, 112);
endShape();
line(103, 124, 103, 112);

stroke(86, 54, 33);
fill(0);
beginShape();
vertex(103, 123);
bezierVertex(107, 127, 109, 123, 110, 112);
endShape();
line(103, 124, 104, 112);

//tail
stroke(0);
 triangle(82, 115, 88, 114, 85, 114);
 triangle(82, 116, 89, 121, 88, 115);
 triangle(90.5, 118, 90, 122, 88, 115);
 stroke(86, 54, 33);
 arc(84, 114, 6, 6, 3, 0);
 
 beginShape();
 vertex(81, 115);
 bezierVertex(83, 118, 84, 121, 90, 123);
 endShape();
 
 fill(254, 224, 240);
 stroke(86, 54, 33);
 beginShape();
 vertex(88.1, 114.4);
 bezierVertex(88, 114, 89, 118, 91, 118);
 endShape();

 

 //fill(0);
 fill(0);
 noStroke();
drawPaw1(26,180);
drawPaw1(34,180);
drawPaw1(30,175);

drawPaw2(20,170);
drawPaw2(26,164);
drawPaw2(33,164);
drawPaw2(40,170);


}
//cat paw pattern
function drawPaw1(x,y){

noStroke();
ellipse(x, y, PawSize, PawSize)
ellipse(x, y, PawSize, PawSize)
ellipse(x, y, PawSize, PawSize)
}

function drawPaw2(x,y){
ellipse(x, y, 5, 10)
ellipse(x, y, 5, 10)
ellipse(x, y, 5, 10)
ellipse(x, y, 5, 10)

}

 //Cat idea from: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VI8coUmZzudhL1W7uaZtRufgY6YCdaNUtA&usqp=CAU
    
 

 // body
 function drawBody3(x,y){
 stroke(86, 54, 33);
 beginShape();
 fill(0);
 vertex(x, y); // first point
 bezierVertex(121, 126, 122, 128, 103, 96);
 vertex(x, y);
 bezierVertex(85, 126,86, 126, 103, 96);
 endShape();
 stroke(0);
 line(103, 124, 103, 100);
 }

 // ears
 function drawEars(x,y){
 stroke(86, 54, 33);
 beginShape();
 vertex(x, y); // first point
 bezierVertex(75, 74, 73, 68, 95, 72);
 endShape();
 
 beginShape();
 vertex(x, y); // first point
 bezierVertex(131, 74, 133, 68, 111, 72);
 endShape();
 
 stroke(86, 54, 33);
 fill(192, 194, 97);
 beginShape();
 vertex(x, y); // first point
 bezierVertex(75, 74, 75, 68, 91, 78);
 endShape();
 
 beginShape();
 vertex(x, y); // first point
 bezierVertex(131, 74, 131, 68, 115, 78);
 endShape();




 
 }


 // 绘制头
 function drawheatCat(x,y){
 stroke(86, 54, 33);
 fill(0);
 ellipse(x, y, 40, 35);
 }
 
 // eye
 //left eye
 function draweyeCat(x,y){
 fill(253, 249, 202);
 ellipse(93, eyeSize, 19, 22);
 ellipse(113, eyeSize, 19, 22);

 //right eye
 fill(0);
 ellipse(93, eyeSize, 9, 11);
 ellipse(112.2, eyeSize, 9, 11);
 }

 //highlight
 function drawWhite(x,y){
 fill(255);
 noStroke()
 ellipse(x, y, 4, 4)
 ellipse(x, y, 4, 4)
 }

 // mouse
 function drawmouse(x,y){
 triangle(100, 97, 105, 97, 103, 102);
 }

 // legs
 function drawlegs(x,y){
 stroke(86, 54, 33);
 fill(0);
 beginShape();
 vertex(x, y);
 bezierVertex(98, 125, 98, 120, 97, 112);
 endShape();
 line(103, 124, 103, 112);
 
 stroke(86, 54, 33);
 fill(0);
 beginShape();
 vertex(x, y);
 bezierVertex(107, 127, 109, 123, 110, 112);
 endShape();
 line(103, 124, 104, 112);
 }

 // tail
 function drawtail(x,y){
 stroke(0);
 triangle(82, 115, 88, 114, 85, 114);
 triangle(82, 116, 89, 121, 88, 115);
 triangle(90.5, 118, 90, 122, 88, 115);
 stroke(86, 54, 33);
 arc(84, 114, 6, 6, 9, 0);
 
 beginShape();
 vertex(x, y);
 bezierVertex(83, 118, 84, 121, 90, 123);
 endShape();
 
 fill(254, 224, 240);
 stroke(86, 54, 33);
 beginShape();
 vertex(x, y);
 bezierVertex(88, 114, 89, 118, 91, 118);
 endShape();
 }




 
 








