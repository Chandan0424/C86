canvas= new fabric.Canvas('myCanvas');

Player_X=10;
PLayer_Y=10;
Player_Object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        Player_Object=Img;

        Player_Object.scaleToWidth(100);
        Player_Object.scaleToHeight(90);
        Player_Object.set({
            top:PLayer_Y,
            left:Player_X
        });
        canvas.add(Player_Object);
    });
}


