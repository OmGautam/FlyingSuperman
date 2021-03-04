class Hero{
    constructor(x,y,r){
        var options = {
          density:1,
          frictionAir: 0.005,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("images/Superhero-01.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        
        World.add(world,this.body);
    }

    display(){
        var p = this.body.position;
        push();
        translate(p.x,p.y);
        fill("blue");
        //ellipse(0,0,this.width,this.height);
        image(this.image, 0, 0, this.r+150,this.r);
        pop();
    }
}