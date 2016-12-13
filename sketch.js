/**
 * Created by Jasiek on 2016-12-13.
 */
var s;
var scl = 20;

var food;

function setup(){
    createCanvas(600,600);
    s = new Snake();
    frameRate(10);
    food = pickFoodLockation();
}
function pickFoodLockation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
    return food;
}

function draw() {
    background(51);
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
    s.update();
    s.show();

}

function keyPressed() {
    if(keyCode === UP_ARROW){
        s.dir(0,-1);
    } else if (keyCode === DOWN_ARROW){
        s.dir(0,1);
    }else if (keyCode === RIGHT_ARROW){
        s.dir(1,0);
    }else if (keyCode === LEFT_ARROW){
        s.dir(-1,0);
    }
}

