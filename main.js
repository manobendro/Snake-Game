function setup(){
    createCanvas(300, 600);
}
function draw(){
    background('#00cc00');
    drawHorizontalWall();
    drawVerticalWall();
}

function keyPressed(){
    _lg(keyCode);
}

function drawHorizontalWall(){
    var x2 = 300 - 9;
    var y = 11;
    while(y < 589){
        drawSblock({x:1, y:y});
        drawSblock({x:x2, y:y});
        y += 10;
    }
}

function drawVerticalWall(){
    var x = 1;
    var y2 = 600 - 9;
    while(x < 300){
        drawSblock({x:x, y:1});
        drawSblock({x:x, y:y2});
        x += 10;
    }
}

function drawSblock(pnt){
    rect(pnt.x, pnt.y, 8, 8);
}


//----Function for debugging perpose
function _lg(msg){
    console.log(msg);
}