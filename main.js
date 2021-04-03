var canvas=new fabric.Canvas("myCanvas");
// creating fabric type canvas
playerx=10;
playery=10;
// default player location
blockwidth=30;
blockheight=30;
// default width and height for the blocks
var playerobjects,block_image_object;
function add_player(){
fabric.Image.fromURL("player.png",function(img){
    playerobjects=img;
    playerobjects.scaleToWidth(150);
    playerobjects.scaleToHeight(150);
playerobjects.set({
    top:playery,
    left:playerx
});
canvas.add(playerobjects);

});
}
function add_block(blockimage){
    fabric.Image.fromURL(blockimage,function(img){
        blockobject=img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
        top:playery,
        left:playerx
    });
    canvas.add(blockobject);
    
    });
    }

window.addEventListener("keydown" ,mykeydown);
function mykeydown(e){
code=e.keyCode;
console.log(code);
if (code==87){
console.log("W is pressed");
add_block("wall.jpg");

}
if (code==71){
    console.log("G is pressed");
    add_block("ground.png");
    
    }
    if (code==76){
        console.log("L is pressed");
        add_block("light_green.png");
        
        }
        if (code==84){
            console.log("T is pressed");
            add_block("trunk.jpg");
            
            }
            if (code==82){
                console.log("R is pressed");
                add_block("roof.jpg");
                
                }
                if (code==89){
                    console.log("Y is pressed");
                    add_block("yellow_wall.png");
                        
                        }
                        if (code==68){
                            console.log("D is pressed");
                            add_block("dark_green.png");
                            
                            }
                            if (code==67){
                                console.log("C is pressed");
                                add_block("cloud.jpg");
                                
                                }
                                if (code==85){
                                    console.log("U is pressed");
                                    add_block("unique.png");
                                    
                                    }
                                    if (code==80 && e.shiftKey==true){
                                        blockwidth=blockwidth+10
                                        blockheight=blockheight+10
                                        document.getElementById("width").innerHTML=blockwidth;
                                        document.getElementById("height").innerHTML=blockheight;

                                    }
                                    if (code==77 && e.shiftKey==true){
                                        blockwidth=blockwidth-10
                                        blockheight=blockheight-10
                                        document.getElementById("width").innerHTML=blockwidth;
                                        document.getElementById("height").innerHTML=blockheight;
                                    }
                                    if(code==37){
                                        console.log("left is pressed")
                                        left();
                                        
                                    }
                                    if(code==39){
                                        console.log("right is pressed")
                                        right();
                                        
                                    }
                                    if(code==38){
                                        console.log("up is pressed")
                                        up();
                                        
                                    }
                                    if(code==40){
                                        console.log("down is pressed")
                                        down();
                                        
                                    }

}
function up() {
    console.log("insideupfunction")
    if(playery>0){
        playery=playery-10;
        canvas.remove(playerobjects);
         add_player();
    }
}
function down() {
    console.log("insidedownfunction")
    if(playery<500){
        playery=playery+10;
        canvas.remove(playerobjects);
         add_player();
    }
}
function right() {
    console.log("insiderightfunction")
    if(playerx<850){
        playerx=playerx+10;
        canvas.remove(playerobjects);
         add_player();
    }
}function left() {
    console.log("insideleftfunction")
    if(playerx>0){
        playerx=playerx-10;
        canvas.remove(playerobjects);
         add_player();
    }
}