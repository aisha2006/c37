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


        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();         
        Player.getPlayerInfo();
        

        if(allPlayers!==undefined){
            var x = 0;
            var y;
            var index = 0;
            

            for(var i in allPlayers){
              x+=200;
              y = displayHeight - allPlayers[i].distance;
              index++;

              cars[index-1].x = x;
              cars[index-1].y = y;


              //identifying the currently active player
              if(index === player.index){
                cars[index-1].shapeColor= "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
              }
            }


                
                  
        }

        if(keyIsDown(UP_ARROW) && player.index!==null){

            player.distance+=50;

            player.update();
        }

       drawSprites();
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