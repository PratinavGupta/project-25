var engine, world;

var wall ;
var ball;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Matter.Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ground = new GROUND(400, 680, 800, 20);
	wall = new WALL(550, 620, 100, 100);
	ball = new PAPPER(100, 600,40,40);

	Matter.Engine.run(engine);
}


function draw() {
	background(200,200,200);
	wall.display();
	ground.display();
	ball.display();

	if (keyWentDown(UP_ARROW))
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 40, y: -45 });

	Matter.Engine.update(engine);

	drawSprites();
}