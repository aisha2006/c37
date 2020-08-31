class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }

    // read the player count from the database
    getCount(){
        var pcref = database.ref("playerCount")
        pcref.on("value",function(data){
           playerCount = data.val(); //updating our global variable from the database
        })
    }


    //to write the new player count in the database
    updateCount(count){
        database.ref("/").update({playerCount: count});
    }
    
    //to write the name in the database
    update(){
        var playerIndex="players/player"+ this.index;
        database.ref(playerIndex).set({name: this.name, distance: this.distance});
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}

/*
Static functions
- not attached to any particular object
- these are called by the class themselves & not the objects

Arrow Function =>
-shorter function, if it has only one statement

hello = function(){
    return "Hello Aisha";
}

hello = ()=>{
    return "Hello Aisha";
}

hello = () => "Hello Aisha";


*/