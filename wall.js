class WALL {

    constructor(x, y, w, h) {
        var prop = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, w, h, prop);
        Matter.World.add(world, this.body);
        this.w = w;
        this.h = h;
          this.image = loadImage("sprites/dustbingreen.png");

    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);

    }
}