class Fly{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 1,
            length:250
        }

        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world,this.fly);
    }

    display(){
        var pA = this.fly.bodyA.position;
        var pB = this.pointB;
        push();
        strokeWeight(4);
        line(pB.x,pB.y,pA.x,pA.y);
        pop();
    }
}