var opp = 255; // variable will be used for opacity

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    background("#6A0C0B"); //red background/chestplate
}

//The draw function happens over and over again
function draw() {
    stroke("#000000"); // chestpiece outline
    strokeWeight(10); // chestpiece outline
    //fill("#848482"); // chestpiece no light
    fill("#67C7EB"); // chestpiece light
    ellipse(250, 250, 275, 275); // chestpiece
    if (mouseIsPressed == true)
    {
      fill("#000000"); //text color
      textSize(40);
      textFont("Times New Roman");
      textStyle(BOLD);
      textAlign(CENTER);
      noStroke(); //outline off
      text("I Am Iron Man", 250, 450);
      strokeWeight(6); //outline on
      fill("#266EF6"); // space blue
      ellipse(50,75,50,100); //space stone
      fill("#0EB95B"); // time green
      ellipse(50,225,50,100); //time stone
      fill("#FFD300"); // mind yellow
      ellipse(50,375,50,100); //mind stone
      fill("#FF0130"); // reality red
      ellipse(450,75,50,100); //reality stone
      fill("#FF8B00"); // soul orange
      ellipse(450,225,50,100); //soul stone
      fill("#AE1FB9"); // power purple
      ellipse(450,375,50,100); //power stone
    }
  else
  {
    background("#6A0C0B"); //red background/chestplate
    stroke("#000000"); // chestpiece outline
    strokeWeight(10); // chestpiece outline
    fill("#848482"); // chestpiece no light
    ellipse(250, 250, 275, 275); // chestpiece
  }
  fill("#000000"); //text color
  textSize(40);
  textFont("Times New Roman");
  textStyle(BOLD);
  textAlign(CENTER);
  noStroke(); //outline off
  text("ILY3K", 250, 90);
  fill(106, 12, 11, opp); //box color
  rect(190, 55, 150, 50); //box to cover up text
  if (keyIsPressed == true)
  {
    opp = opp - 10
  }
  if (opp < 0)
  {
    opp = 255
  }
    
}
