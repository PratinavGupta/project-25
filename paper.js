class PAPPER {

  constructor(x, y, w, h) {
    var prop = { restitution: 0.3, density: 0.7 ,friction:0.3}
    this.body = Matter.Bodies.rectangle(x, y, w, h, prop);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.image = loadImage("sprites/paper.png");
  }

  display() {
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
  }
}