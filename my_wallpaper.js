//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 233, 166); //colour blue
}

function my_symbol(x,y) {

  

  fill(247, 147, 184);//hat
  noStroke();
  beginShape();
  vertex(158, 123);
  vertex(158, 143);
  vertex(170, 137);
  endShape();

  

  drawHeat(166, 145);

  

  drawEye(164, 144);
  drawEye(170, 142);

  drawBall(157, 123);

  drawHighlight(160, 122);

  

  drawBody(167, 171);

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
  drawbottom(169, 180);
  
  
  
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
  fill(247, 147, 184);
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
  ellipse(x, y, 3, 3);


  //Penguin

drawLeg(25,58);
drawLeg(42,58);

drawHand(18,42);
drawHand(49,42);

drawBelly(33.5,40);

drawNeck2(33,27);

drawHeat2(33, 23);

drawEye2(28, 23);
drawEye2(39, 23);

drawFace2(33.33,27);

drawBlush2(27, 26);
drawBlush2(39, 26)


drawEyeball(28, 23);//左眼球
drawEyeball(38, 23);

drawHighlight2(28.9, 23);
drawHighlight2(38.9, 23);

drawMouse2(33, 23);


drawBelly2(33,45);
}


noStroke();

function drawLeg(x,y){
//leg
stroke(50)
fill(255, 160, 45);
ellipse(x, y, 11.11, 5.56);
ellipse(x, y, 11.11, 5.56);
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
noStroke()
fill(255);
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
 ellipse(x, y, 6, 6);
 ellipse(x, y, 6, 6);
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
}

















