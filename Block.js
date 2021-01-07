class Block {

    constructor(x,y){

        var abc = {
            density:1,
            friction:1,
            restitution:0.5
        }
   
         this.body = Bodies.rectangle(x,y,30,40,abc);
         World.add(myWorld,this.body);
   
         this.width = 30;
         this.height = 40;
         this.visibility = 255;
     }
   

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 2){

            push ();
    
            translate(pos.x,pos.y);
            rotate (angle);
            
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
    
            pop ();

        } else {

            push ();

            this.visibility = this.visibility-5;
            World.remove(myWorld,this.body);

            tint(255,this.visibility);

            pop();

        }

    }

    score (){

        if(this.visibility < 0 && this.visibility > -300){
            score++
        }

    }
}