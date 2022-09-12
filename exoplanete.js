/*----------------------------------------*\
  how to draw an exoplpanet - exoplanete.js
  @git : https://github.com/oogre/how-to-draw-an-exoplpanet.git
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-09-18 21:55:42
  @Last Modified time: 2022-09-12 23:39:27
\*----------------------------------------*/


people = 1;
flour = 60 * people; 	// prepare 60 grams of flour per people
egg = 1 * people; 		// prepare one egg per people
milk = 0.125 * people;	// prepare 125 milliliters of milk per people
sugar = 0.5 * people;		// prepare 0.5 spoon of sugar people
butter = 12.5 * people;	// prepare 12.5 grams of butter per people

import kitchen.tools.Bowl; // take the concept of a Bown the tools drawer in the kitchen
bowl = new Bowl();	 // create a bowls from the concept of a Bowl

bowl.add( flour );	// execute the action to add flour in the bowl
bowl.add( sugar );	// same with sugar
bowl.makeAwell();		// Make a well in the center

while(egg > 0){			// do whats follow while there eggs (int their shell)
	bowl.add( egg.break() );	// add the content of an egg in the bowl
	egg = egg - 1;				// update the number of egg in the memory
}
bowl.mix();				// mix the content of bowl

while(bowl.isHeterogeneous()){
	bowl.mix();
}

while( bowl.isHeterogeneous() OU !bowl.isContains(milk)){ // add little by little milk and mix during this time
	if(milk > 0){
		milk_to_add = milk / 10;
		bowl.add( milk_to_add );
		milk = milk - milk_to_add;
	}
	bowl.mix();
}

while( !bowl.isFluide() ){	// if the bowl content isn't as fluid as you want
	milk = 0.025;
	bowl.add(milk);
	while(bowl.isHeterogeneous()){
		bowl.mix();
	}
}

// bowl.add(beurre.fondre());
// while(bowl.isHeterogeneous()){
// 	bowl.mix();
// }

batter = bowl.content;

import kitchen.éléctro.Cook;
import kitchen.tools.Pan;
import kitchen.tools.Dipper;
import kitchen.tableware.Dishe;
cook = new Cook();
pan = new Pan();
dipper = new Dipper();
dishe = new Dishe();

cook.setup(9);
cook.add(pan);

while(!pan.temperature()<100){
	wait();
}

while(batter > 0){
	dipper.fill(batter);
	batter = batter - dipper;
	pan.add(dipper);
	while( pan.isRound() ){
		pan.makeItRound();
	}
	while( pan.isFluide() ){
		wait();
	}
	while( pan.content.isSticky() ){
		pan.shakeIt();
	}
	pan.content.flip();
	while( ! pan.isPancake() ){
		wait();	
	}
	pancake = pan.content;
	dishe.add(pancake);
}



tools.isFluide(){
	if(this.contenu.fluidité > plasticine.fluidité )
		return true;
	else
		return false;
}

pan.isRound(){
	if(...)
		return true;
	else
		return false;
}

pan.makeItRound(){
	this.rotationX(10 * cos(time));
	this.rotationz(10 * sin(time));
}

pan.shakeIt(){
	this.translateZ(100 * sin(time));
}









