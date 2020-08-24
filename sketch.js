var ball,ballpos,ballposition;
var database;


function setup(){
    database = firebase.database();
    ballpos = database.ref("ball/position");
    ballpos.on("value",readData,showError);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){   
    background("white");
    if(ballposition!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    }
        
}

function writePosition(x,y){
  database.ref("ball/position").set({x: ballposition.x+x, y:ballposition.y +y});
}

function readData(data){
  ballposition= data.val();
  ball.x = ballposition.x;
  ball.y = ballposition.y;

}

function showError(){
 console.log("error");
}

