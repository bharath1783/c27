class Chain {
    constructor(bodyA,bodyB){
        var options ={
            bodyA: bodyA,
            bodyB:bodyB,
            length:100,
            stiffness:2
        }
        this.chain = Constraint.create (options);
        World.add (world,this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
        var posB =this.chain.bodyB.position;
        push ();
        strokeWeight(3);
        line (posA.x,posA.y,posB.x,posB.y);
        pop ();
    }
}