class snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true,
            density:0.1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        snow.addImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};