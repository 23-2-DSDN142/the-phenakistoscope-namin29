const SLICE_COUNT = 10;
var triangleValue = -300;
var triangleIncrement = 2;
var triangleThreshold = 300;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(WebTransportDatagramDuplexStream);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("greensquare" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 225, 255, 255);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(backgroundcolours);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 50, 1000 );

  var layer2 = new PLayer(triangles);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );

  var layer1 = new PLayer(greenSquares);
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 500, 1000 );

  var layer1 = new PLayer(square1);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 50, 1500 );

  var layer1 = new PLayer(square2);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 50, 1500 );

  var layer1 = new PLayer(square3);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 50, 1500 );

}

function backgroundcolours(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  noStroke();
  fill(0, 255, 255)
  arc(x,y,1000,1000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

}

function greenSquares(x, y, animation, pScope){

 // scale(0.5);
 // pScope.draw_image("greensquare",x,y);
  

}

function square1(x, y, animation, pScope){

  rotate(45);
  scale(animation.frame*3.6);
  noStroke();
  const c = color(255, 255, 0, 80);
  fill(c);
  rect(30, 30, 100, 100);
  // Sets 'alphaValue' to 102.
  const alphaValue = alpha(c);
  fill(alphaValue);

}

function square2(x, y, animation, pScope){

  rotate(45);
  scale(animation.frame*3.7);
  noStroke();
  const c = color(255, 0, 255, 80);
  fill(c);
  rect(0, 0, 100, 100);
  // Sets 'alphaValue' to 102.
  const alphaValue = alpha(c);
  fill(alphaValue);

}

function square3(x, y, animation, pScope){

  rotate(45);
  scale(animation.frame*3.8);
  noStroke();
  const c = color(0, 255, 255, 80);
  fill(c);
  rect(-30, -30, 100, 100);
  // Sets 'alphaValue' to 102.
  const alphaValue = alpha(c);
  fill(alphaValue);

}

function triangles(x, y, animation, pScope){

  fill(255)
 // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw


 triangleValue += triangleIncrement;

 if (triangleValue >= triangleThreshold) {
  
  triangleIncrement = -2;
} else if (triangleValue <= -300) {
  
  triangleIncrement = 2;
}

noStroke();
fill(255);
rotate(180)
triangle(0, triangleValue * 3.5, -500, 0, 500, 0);

}