const key = 'pk.eyJ1IjoiemFyb21pIiwiYSI6ImNrbTJkN3QwZjRtMzgycHBtZ2lyNGl1eXoifQ.uQCxr7nLnjbOe0-z7WwaZw';

const options = {
  lat: 35,
  lng: -81,
  zoom: 4.7,
  style: 'mapbox://styles/zaromi/ckmc6s2qu4rha17md2csptu99',
  pitch: 0,
}

const mappa = new Mappa('MapboxGL', key);
let mtMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}


function draw() {
  
  clear();
  stroke(109, 109, 151);
  strokeWeight(3);
  textSize(18);
  textAlign(CENTER, CENTER);
  const revere = myMap.latLngToPixel(41.2016, -81.6169);
  const rainbow = myMap.latLngToPixel(41.218960, -81.657440);
  const mill = myMap.latLngToPixel(39.329590, -82.089830);
  const studio = myMap.latLngToPixel(39.328679, -82.097976);
  const disney = myMap.latLngToPixel(28.354335, -81.605608);
  const hilton = myMap.latLngToPixel(32.182186, -80.729485);
  
  if(dist(hilton.x,hilton.y,mouseX,mouseY)<50){  //this is the curse over effect
    fill(109, 109, 151 ,100);
    ellipse(hilton.x, hilton.y, 100, 100);
    fill(255);
    text('Hilton Head',hilton.x,hilton.y);
  }else{
    fill(109, 109, 151 ,50);
    ellipse(hilton.x, hilton.y, 100, 100);
    fill(255);
    text('6',hilton.x,hilton.y);
  }
  
  if(dist(disney.x,disney.y,mouseX,mouseY)<50){  //this is the curse over effect
    fill(109, 109, 151 ,100);
    ellipse(disney.x, disney.y, 100, 100);
    fill(255);
    text('Disney',disney.x,disney.y);
  }else{
    fill(109, 109, 151 ,50);
    ellipse(disney.x, disney.y, 100, 100);
    fill(255);
    text('5',disney.x,disney.y);
  }
  
  if(dist(revere.x,revere.y,mouseX,mouseY)<50){  //this is the curse over effect
    fill(109, 109, 151 ,100);
    ellipse(revere.x, revere.y, 100, 100);
    fill(255);
    text('High School',revere.x,revere.y);
  }else{
    fill(109, 109, 151 ,50);
    ellipse(revere.x, revere.y, 100, 100);
    fill(255);
    text('4',revere.x,revere.y);
  }
  
  if(dist(studio.x,studio.y,mouseX,mouseY)<50){  //this is the curse over effect
    fill(109, 109, 151 ,100);
    ellipse(studio.x, studio.y, 100, 100);
    fill(255);
    text('College Studio',studio.x,studio.y);
  }else{
    fill(109, 109, 151 ,50);
    ellipse(studio.x, studio.y, 100, 100);
    fill(255);
    text('3',studio.x,studio.y);
  }
  
  if(dist(rainbow.x,rainbow.y,mouseX,mouseY)<50){  //this is the curse over effect
    fill(109, 109, 151 ,100);
    ellipse(rainbow.x, rainbow.y, 100, 100);
    fill(255);
    text('Home Town House',rainbow.x,rainbow.y);
  }else{
    fill(109, 109, 151 ,50);
    ellipse(rainbow.x, rainbow.y, 100, 100);
    fill(255);
    text('2',rainbow.x,rainbow.y);
  }
  
  if(dist(mill.x,mill.y,mouseX,mouseY)<50){  //this is the curse over effect
    fill(109, 109, 151 ,100);
    ellipse(mill.x, mill.y, 100, 100);
    fill(255);
    text('College Apartment',mill.x,mill.y);
  }else{
    fill(109, 109, 151 ,50);
    ellipse(mill.x, mill.y, 100, 100);
    fill(255);
    text('1',mill.x,mill.y);
  }
}




