class Form{
  constructor(){
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement("h3");
    
  }

  hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
  }
  
  display(){
     var title = createElement("h2");
     title.html("Car Racing Game");
     title.position(displayWidth/2-80,0);
     
     
     this.input.position(displayWidth/2-60,displayHeight/2-80);

     
     this.button.position(displayWidth/2+40,displayHeight/2);

     
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();

         player.name = this.input.value();
         playerCount++;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);

        this.greeting.html("Hello "+player.name);
        this.greeting.position(displayWidth/2-50,displayHeight/3);
     });
  }
}

/*
Elements of HTML page;
1. Head
    - Scripts/libraries
    - Stylesheets
2. Body
    - content/code (sketch.js)

BODY
Several elements
- Headings : h1, h2, h3
- Input: To collect data from user
- Button

Document Object Model (DOM)
-p5 Dom library

Title - "Car Racing Game"
-h2 element
-html content
-position
*/