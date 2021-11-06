const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;


function preload(){
  bg=loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  ground=new Ground(600,390,1200,10)
boggie1=new Boggie(50,170,70,70)
boggie2=new Boggie(150,170,70,70)
boggie3=new Boggie(250,170,70,70)
boggie4=new Boggie(350,170,70,70)
boggie5=new Boggie(450,170,70,70)
boggie6=new Boggie(550,170,70,70)
chain1=new Chain(boggie1.body,boggie2.body)
chain2=new Chain(boggie2.body,boggie3.body)
chain3=new Chain(boggie3.body,boggie4.body)
chain4=new Chain(boggie4.body,boggie5.body)
chain5=new Chain(boggie5.body,boggie6.body)
rock=new Rock(1100,350,100,100)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
boggie1.show()
boggie2.show()  
boggie3.show() 
boggie4.show() 
boggie5.show() 
boggie6.show() 
chain1.show()
chain2.show()
chain3.show()
chain4.show()
chain5.show()
rock.show()
if (keyDown(RIGHT_ARROW))
{
  Matter.Body.applyForce(boggie6.body,boggie6.body.position,{x:0.5,y:0})
}
}