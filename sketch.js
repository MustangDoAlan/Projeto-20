
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var solo,soloopcao,bloco1,bloco1op,bloco2,bloco2po,bloco3,bloco3op;

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	soloopcao={
		isStatic:true
	}
	solo=Bodies.rectangle(275,595,550,2,soloopcao);
	World.add(world,solo);
    
	bloco1op={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	bloco1=Bodies.rectangle(200,50,10,10,bloco1op);
	World.add(world,bloco1);
    
	bloco2op={
		restitution:0.4,
		friction:0.03,
		frictionAir:0
	}
	bloco2=Bodies.circle(300,50,10,bloco2op);
	World.add(world,bloco2);

    bloco3op={
		restitution:0.01,
		friction:1,
		frictionAir:0.25
	}
	bloco3=Bodies.rectangle(400,50,10,10,bloco3op);
	World.add(world,bloco3);


	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");
  Engine.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill("brown");

  rect(solo.position.x,solo.position.y,550,2);

  rect(bloco1.position.x,bloco1.position.y,50,50);

  
  ellipse(bloco2.position.x,bloco2.position.y,30);

  rect(bloco3.position.x,bloco3.position.y,75,50);
  
  drawSprites();
 
}



