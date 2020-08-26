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
    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();

            form = new Form()
            form.display();
        }
    }

}
/*
.on();
.update() - to update the database reference
        - "/" - main database inside which gameState is created

Writing code using abstraction - creating objects even without the classes being defined/created
*/