class Player{
    constructor(){}

    // read the player count from the database
    getCount(){
        var pcref = database.ref("playerCount")
        pcref.on("value",function(data){
           playerCount = data.val();
        })
    }


    //to write the new player count in the database
    updateCount(count){
        database.ref("/").update({playerCount: count});
    }
    
    //to write the name in the database
    update(name){
        var playerIndex="player"+ playerCount;
        database.ref(playerIndex).set({name: name});
    }
}