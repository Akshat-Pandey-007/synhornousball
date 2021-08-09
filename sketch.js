var ball;
var db;

function setup(){
    db = firebase.database();
    console.log(db);
    createCanvas(500,500);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
    var pose = db.ref("ball/position");
    pose.on("value",read_value);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    w = db.ref("ball/position");
    w.set({
        'x':p.x+x,
        'y':p.y+y
    })
}
 function read_value(data){
  p = data.val();
  console.log(p.x,p.y);
  ball.x = p.x;
  ball.y = p.y;
}