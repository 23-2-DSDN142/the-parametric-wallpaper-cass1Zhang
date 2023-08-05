//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(80, 150, 200); //colour blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //雪人
  fill(247, 147, 184);
  noStroke();
  beginShape();
  vertex(157.5, 123.25);
  vertex(157.5, 142.75);
  vertex(169.875, 136.375);
  endShape();
  
  fill(255, 255, 255);
  noStroke();
  ellipse(166.875, 171.25, 37.5, 37.5);
  
  fill(247, 147, 184);
  noStroke();
  beginShape();
  vertex(163.875, 151.75);
  vertex(165, 156.25);
  vertex(168.75, 153.375);
  endShape();
  beginShape();
  vertex(168.75, 153.375);
  vertex(171.75, 155.125);
  vertex(172.5, 150.875);
  endShape();
  
  fill(255, 255, 255);
  noStroke();
  ellipse(166.125, 145, 18.75, 18.75);
  
  fill(0, 0, 0);
  noStroke();
  ellipse(163.5, 143.875, 1.5, 1.5);
  ellipse(169.875, 142.375, 1.5, 1.5);
  
  fill(255, 185, 191);
  noStroke();
  ellipse(163.875, 147.625, 4.875, 4.5);
  ellipse(172.125, 145, 3.75, 3.75);
  
  fill(255, 177, 98);
  noStroke();
  beginShape();
  vertex(168.75, 145);
  vertex(167.625, 147.625);
  vertex(177.375, 146.125);
  endShape();
  
  ellipse(168, 146.125, 3, 3);
  
  
  
    
  
  
  
  
  
  //企鹅
    noStroke();
    //腿
    fill(255, 160, 45);
    ellipse(22.6, 58, 11.11, 5.56);
    ellipse(44.5, 58, 11.11, 5.56);

    
    //身体
    fill(186, 185, 184);
    ellipse(16, 43, 5, 20);//左手 
    ellipse(51, 43, 5, 20);//右手
    ellipse(33.5, 43, 40, 30);//肚皮
    //头

    
    strokeWeight(33.33);
    stroke(186, 185, 184);
    line(33.33, 23.89, 33.33, 36.67);
    //眼睛，肚皮
    fill(255);
    noStroke();
    ellipse(27, 23,9, 9);//左眼
    ellipse(39, 23, 9, 9);//右眼
    ellipse(33.33,26, 19, 10);//肚皮
    //眼球
    fill(0);
    ellipse(27, 23, 2, 2);//左眼球
    ellipse(39, 23, 2, 2);//右眼球

    //嘴巴
    
    fill(255, 160, 45);

    ellipse(33, 23, 7, 5);
    
  
     //Cat
    
     strokeWeight(0.9);

     // 绘制身体
     stroke(86, 54, 33);
     beginShape();
     fill(0);
     vertex(103, 126); // first point
     bezierVertex(121, 126, 122.25, 128, 103, 95.75);
     vertex(103, 126);
     bezierVertex(85, 126, 86.25, 126, 103, 95.75);
     endShape();
     stroke(0);
     line(103, 124.1, 103, 100);
     
     // 绘制耳朵
     stroke(86, 54, 33);
     beginShape();
     vertex(83.4, 92); // first point
     bezierVertex(75, 74, 73, 68, 95, 72);
     endShape();
     
     beginShape();
     vertex(122.6, 92); // first point
     bezierVertex(131, 74, 133, 68, 111, 72);
     endShape();
     
     stroke(86, 54, 33);
     fill(192, 194, 97);
     beginShape();
     vertex(83.4, 92); // first point
     bezierVertex(75, 74, 75, 68, 91, 78);
     endShape();
     
     beginShape();
     vertex(122.6, 92); // first point
     bezierVertex(131, 74, 131, 68, 115, 78);
     endShape();
     
     // 绘制头
     stroke(86, 54, 33);
     fill(0);
     ellipse(103, 88, 40, 35);
     
     // 绘制眼睛
     fill(253, 249, 202);
     ellipse(93, 88, 19, 22);
     ellipse(113, 88, 19, 22);
     fill(0);
     ellipse(93.4, 88, 9, 11);
     ellipse(112.2, 88, 9, 11);
     
     // 绘制嘴
     fill(52, 119, 164);
     triangle(100, 97, 105, 97, 103, 102);
     
     // 绘制爪
     stroke(86, 54, 33);
     fill(0);
     beginShape();
     vertex(103, 123.8);
     bezierVertex(98, 125, 98, 120, 97, 111.5);
     endShape();
     line(103, 123.8, 103, 111.5);
     
     stroke(86, 54, 33);
     fill(0);
     beginShape();
     vertex(103.4, 123);
     bezierVertex(107, 127, 109, 123, 110, 111.5);
     endShape();
     line(103.45, 123.8, 103.5, 111.5);
     
     // 绘制尾巴
     stroke(0);
     triangle(82.6, 115, 88.1, 114.4, 85, 114.4);
     triangle(82.8, 115.6, 89, 120.8, 88.2, 115.2);
     triangle(90.2, 118, 88.44, 121.6, 88.2, 115.2);
     stroke(86, 54, 33);
     arc(85, 114.4, 6, 6, 2.51, 0);
     
     beginShape();
     vertex(81.42, 115);
     bezierVertex(82.6, 118, 84, 121, 89.6, 123);
     endShape();
     
     fill(254, 224, 240);
     stroke(86, 54, 33);
     beginShape();
     vertex(88.1, 114.4);
     bezierVertex(88.12, 114.4, 89, 118, 91, 118);
     endShape();
}     