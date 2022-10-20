/*----------------------------------------*\
  how to draw an exoplanet - exoplanete.js
  @git : https://github.com/oogre/how-to-draw-an-exoplpanet.git
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-09-18 21:55:42
  @Last Modified time: 2018-09-19 10:24:38
\*----------------------------------------*/


personne = 1;
farine = 60 * personne; 	// préparer 60 gramme de farine par personne
oeuf = 1 * personne; 		// préparer un oeuf par personne
lait = 0.125 * personne;	// préparer 125 millilitres de lait par personne
sucre = 0.5 * personne;		// préparer 0.5 cuillère à soupe de sucre par personne
beurre = 12.5 * personne;	// préparer 12.5 gramme de beurre par personne

import cuisine.ustensiles.Saladier; // prendre le concepte de Saladier dans les ustensiles dans la cuisine
saladier = new Saladier();	 // créer un saladier à partir du concepte de Saladier

saladier.ajouter( farine );	// appeler la fonctionnalité d'ajout de l'objet saladier
saladier.ajouter( sucre );	// appeler la fonctionnalité d'ajout de l'objet saladier
saladier.faireUnPuit();		// appeler la fonctionnalité faire un puit de l'objet saladier

import cuisine.ustensiles.Bol; // prendre le concept de Bol dans les ustensiles dans la cuisine
bol = new Bol();			// créer un bol à partir du concepte de Bol

while(oeuf > 0){					// tant qu'il y a des oeufs
	bol.ajouter( oeuf.casser() );	// ajouter le contenu d'un oeuf dans le bol
	oeuf = oeuf - 1;				// mettre a jour le nombre d'oeuf disponnible
}
bol.mélanger();				// mélanger le contenu du bol

saladier.ajouter(bol);

while(saladier.isHétérogène()){
	saladier.mélanger();
}

while( saladier.hétérogène() OU !saladier.contien(lait)){	// tant qu que le contenu du saladier est hétérogène
	if(lait > 0){											// ou que le saladier ne contient pas de lait
		lait_à_ajouter = lait / 10;				// prendre 1 dixieme du lait 
		saladier.ajouter( lait_à_ajouter );
		lait = lait - lait_à_ajouter;
	}
	saladier.mélanger();
}

while( !saladier.isFluide() ){	// tant que le contenu du saladier n'est pas aussi fluide que vous le souhaitez 
	lait = 0.025;
	saladier.ajouter(lait);
	while(saladier.isHétérogène()){
		saladier.mélanger();
	}
}

saladier.ajouter(beurre.fondre());

while(saladier.isHétérogène()){
	saladier.mélanger();
}

pate = saladier.contenu;

import cuisine.éléctroménager.Cuisinière;
import cuisine.ustensiles.Poêle;
import cuisine.ustensiles.Louche;
import cuisine.vaisselle.Assiette;
cuisinière = new Cuisinière();
poêle = new Poêle();
louche = new Louche();
assiette = new Assiette();

cuisinière.règler(9);
cuisinière.ajouter(poêle);

while(!poêle.température()<100){
	attendre();
}

while(pate > 0){
	louche.remplir(pate);
	pate = pate - louche;
	poêle.ajouter(louche);
	while( poêle.isRond() ){
		poêle.faireTourner();
	}
	while( poêle.isFluide() ){
		attendre();
	}
	while( poêle.contenu.isColler() ){
		poêle.secouer();
	}
	poêle.retourner();
	while( ! poêle.isCrèpe() ){
		attendre();	
	}
	crèpe = poêle.contenu;
	assiette.ajouter(crèpe);
}



ustensiles.isFluide(){
	if(this.contenu.fluidité > plasticine.fluidité )
		return true;
	else
		return false;
}

Poêle.isRond(){
	if(...)
		return true;
	else
		return false;
}

poêle.faireTourner(){
	this.rotationX(10 * cos(time));
	this.rotationz(10 * sin(time));
}

poêle.secouer(){
	this.translateZ(100 * sin(time));
}









