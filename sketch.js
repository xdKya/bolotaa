var ball, database;
var position;

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  ball = createSprite(250, 250, 20, 20);
  ball.shapeColor = "tomato";

  var BallPosition = database.ref("ball/position");
  BallPosition.on("value", readPosition);
}

function draw() {
  background("white");

  if (keyDown("up")) {
    writePosition(0, -5);
  }
  if (keyDown("down")) {
    writePosition(0, 5);
  }
  if (keyDown("right")) {
    writePosition(5, 0);
  }
  if (keyDown("left")) {
    writePosition(-5, 0);
  }

  drawSprites();
}
function readPosition(data) {
  position = data.val();
  console.log(position.x);
  ball.x = position.x;
  ball.y = position.y;
}

function writePosition(x, y) {
  database.ref("ball/position").set({
    x: position.x + x,
    y: position.y + y,
  });
}
