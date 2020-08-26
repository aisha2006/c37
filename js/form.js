class Form{
  constructor(){}

  display(){
     var title = createElement("h2");
     title.html("Car Racing Game");
     title.position(130,0);
     
     var input = createInput("Name");
     input.position(130,160);

     var button = createButton("Play");
     button.position(250,200);

     var greeting = createElement("h3");
     button.mousePressed(function(){
         input.hide();
         button.hide();

         var name = input.value();
         playerCount++;
         player.update(name);
         player.updateCount(playerCount);

         greeting.html("Hello "+name);
         greeting.position(130,160);
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