const SLICE_COUNT = 16;
var triangleValue = 100;
var triangleIncrement = 1;
var triangleThreshold = 300;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("greensquare" , "png");
  pScope.load_image_sequence("eyeball" , "png", 8);
}

function setup_layers(pScope){

  new PLayer(null, 220,145,220);  //lets us draw the whole circle background, ignoring the boundaries // 200, 150, 240

  var layer1 = new PLayer(backgroundcolours);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 50, 1000 );

  var layer2 = new PLayer(triangles);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );

  var layer1 = new PLayer(greenSquares);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 500, 1000 );

  var layer1 = new PLayer(square1);
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 0, 1800 );

  var layer1 = new PLayer(square2);
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 0, 1800 );

  var layer1 = new PLayer(square3);
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 0, 1800 );

  var layer1 = new PLayer(eyeballs);
  layer1.mode( RING );
  layer1.set_boundary( 0, 1500 );

}

function backgroundcolours(x, y, animation, pScope){

  //this is how you set up a background for a specific layer
//  let angleOffset = (360 / SLICE_COUNT) / 2
//  let backgroundArcStart = 270 - angleOffset;
//  let backgroundArcEnd = 270 + angleOffset;

//  noStroke();
//  fill(20, 255, 100)
//  arc(x,y,1000,1000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

}

function greenSquares(x, y, animation, pScope){

 // scale(0.5);
 // pScope.draw_image("greensquare",x,y);
  

}

function square1(x, y, animation, pScope){

  rotate(45);
  scale(animation.frame*10);
  noStroke();
  const c = color(90, 210, 120, 255);
  fill(c);
  rect(30, 30, 40, 40);
  // Sets 'alphaValue' to 102.
  const alphaValue = alpha(c);
  fill(alphaValue);

}

function square2(x, y, animation, pScope){

  rotate(45);
  scale(animation.frame*10);
  noStroke();
  const c = color(200, 55, 255, 150);
  fill(c);
  rect(0, 0, 35, 35);
  // Sets 'alphaValue' to 102.
  const alphaValue = alpha(c);
  fill(alphaValue);

}

function square3(x, y, animation, pScope){

  rotate(45);
  scale(animation.frame*10);
  noStroke();
  const c = color(55, 0, 100, 150);
  fill(c);
  rect(-30, -30, 20, 20);
  // Sets 'alphaValue' to 102.
  const alphaValue = alpha(c);
  fill(alphaValue);

}

function triangles(x, y, animation, pScope){

  fill(255)
 // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw


 triangleValue += triangleIncrement;

 if (triangleValue >= triangleThreshold) {
  
  triangleIncrement = -1;
} else if (triangleValue <= 100) {
  
  triangleIncrement = 1;
}
noStroke()
fill(225, 255, 255);
rotate(180)
triangle(0, triangleValue * 3.5, -100, 0, 100, 0);

}

function eyeballs(x, y, animation, pScope){
  scale(1.50)
  pScope.draw_image_from_sequence("eyeball", x, -480, animation.frame);

}