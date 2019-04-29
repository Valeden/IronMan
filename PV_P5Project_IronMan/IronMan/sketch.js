var opp = 0; // variable will be used for opacity
var sOpp = 0; // variable will be used for stroke opacity

// The setup function only happens once
function setup() {
	createCanvas(500, 500); // create a 500px X 500px canvas
    background("#6A0C0B"); // red background/chestplate
}

// The draw function happens over and over again
function draw() {
    stroke("#B97D10"); // gold outline
    strokeWeight(10); // chestpiece outline
    fill("#67C7EB"); // chestpiece light
    ellipse(250, 250, 275, 275); // chestpiece
	
    if (mouseIsPressed == true)
    {
      fill("#000000"); // text color
      textSize(40);
      textFont("Times New Roman");
      textStyle(BOLD);
      textAlign(CENTER);
      strokeWeight(2); // text outline
      text("I Am Iron Man", 250, 450);
	    
      stroke("#000000"); // black outline
      fill("#266EF6"); // space blue
      ellipse(50,75,50,100); // space stone
	    
      fill("#0EB95B"); // time green
      ellipse(50,225,50,100); // time stone
	    
      fill("#FFD300"); // mind yellow
      ellipse(50,375,50,100); // mind stone
	    
      fill("#FF0130"); // reality red
      ellipse(450,75,50,100); // reality stone
	    
      fill("#FF8B00"); // soul orange
      ellipse(450,225,50,100); // soul stone
	    
      fill("#AE1FB9"); // power purple
      ellipse(450,375,50,100); // power stone
	    
      fill(0, 0, 0, opp); // text color
      textSize(40);
      textFont("Times New Roman");
      textStyle(BOLD);
      textAlign(CENTER);
      strokeWeight(sOpp); // text outline
      stroke(185, 125, 16); // gold outline
      text("ILY3K", 250, 90);
    }
  else
    {
      background("#6A0C0B"); // red background/chestplate
      stroke("#000000"); // black outline
      strokeWeight(10); // chestpiece outline
      fill("#848482"); // chestpiece no light
      ellipse(250, 250, 275, 275); // chestpiece
	    
      fill(0, 0, 0, opp); // text color
      textSize(40);
      textFont("Times New Roman");
      textStyle(BOLD);
      textAlign(CENTER);
      strokeWeight(0); // outline off
      text("ILY3K", 250, 90);
	    
    }
  
  if (keyIsPressed == true)
  {
      opp = opp + 255
  }
	
  if (opp > 255)
  {
      opp = 0
  }
  
  if (opp == 255)
  {
    sOpp = 2
  }
  
  else
  {
    sOpp = 0
  }
}
