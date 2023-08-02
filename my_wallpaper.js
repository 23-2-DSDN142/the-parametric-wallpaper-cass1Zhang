//your parameter variables go here!

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(80, 150, 200); //colour blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  fill(247, 147, 184);
  noStroke();
  beginShape();
  vertex(60, 23); 
  vertex(60, 73); 
  vertex(93, 57); 
  endShape();


  fill(255, 255, 255);
  noStroke();
  ellipse(85, 150, 100, 100); // 

  fill(247, 147, 184);
  noStroke();
  beginShape();
  vertex(77, 98); // 
  vertex(80, 110); //
  vertex(90, 103); // 
  endShape();
  beginShape();
  vertex(90, 103);
  vertex(98, 107); //
  vertex(100, 97); // 
  endShape();

  fill(255, 255, 255);
  noStroke();
  ellipse(83, 80, 50, 50); // 

  fill(0, 0, 0);
  noStroke();
  ellipse(76, 77, 4, 4); // 
  ellipse(93, 73, 4, 4); // 

  fill(255, 185, 191);
  noStroke();
  ellipse(77, 87, 13, 12); // 
  ellipse(99, 80, 10, 10); //

  fill(255, 177, 98);
  noStroke();
  beginShape();
  vertex(90, 80); // 
  vertex(87, 87); // 
  vertex(113, 83); //
  endShape();

  ellipse(88, 83, 8, 8); // 
}