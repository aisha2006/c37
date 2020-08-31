var database;
var gameState = 0, playerCount;
var form,player,game;
var allPlayers;

function setup(){
    database = firebase.database();
   
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){   
    background("white"); 
    
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }
    
}


/*
-Name from different users
    -player object to be created
-Number of players (playerCount)
-Game States - Wait state(0)
             - play(1)
             - end(2)

3 objects -
1. Form - take name from user, button to play/start
2. Player - name, rank, distance
3. Game - GameStates, start, play, end
*/
