class Game{
    constructor(){}

    //read the game state from the database
    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value",function(data){
         gameState = data.val();   
        })
    }

    //write the new gameState in the database
    update(state){
        database.ref("/").update({gameState: state});
    }

    //start the game and display on the screen according to the game state
    async start(){
        if(gameState===0){
            player = new Player();
            var pcref = await database.ref("playerCount").once("value");
            if(pcref.exists()){
                playerCount = pcref.val();
                player.getCount();
            }
            

            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(35);
        text("game start",120,100);         
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            var displayPos = 130;

            for(var i in allPlayers){
                //identifying the currently active player
                if(i === "player"+ player.index)
                    fill("red");
                else
                    fill("black");

                displayPos += 20;
                textSize(15);
                text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, displayPos);
            }           
        }

        if(keyIsDown(UP_ARROW) && player.index!==null){

            player.distance+=50;

            player.update();
        }

       
    }

}
/*
.on();
.update() - to update the database reference
        - "/" - main database inside which gameState is created

Writing code using abstraction - creating objects even without the classes being defined/created

for/in statement loop
Syntax:
for(variable in object){
    //code
}

*/