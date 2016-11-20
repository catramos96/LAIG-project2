 function MyVehicle(scene) {
     CGFobject.call(this,scene);
     this.scene = scene;

     this.cylinder = new MyCylinder(scene,new MyCylinderData("",0.5,0.1,5,25,25));
     this.cylinder2 = new MyCylinder(scene,new MyCylinderData("",0.25,0.15,1.2,20,20));
     this.wing = new MyCylinder(scene,new MyCylinderData("",0.5,0.2,2,4,4));
     this.front = new MySphere(scene,new MySphereData("",0.08,20,20));
     this.torus = new MyTorus(scene,new MyTorusData("",0.3,0.2,20,20));

     this.white = new CGFappearance(scene);
     this.blue = new CGFappearance(scene);
     this.dark = new CGFappearance(scene);
     this.green = new CGFappearance(scene);

     this.init();
 }

 MyVehicle.prototype = Object.create(CGFobject.prototype);

 MyVehicle.prototype.init = function(){

 	var cabineCP = [
 					[
 						[1,		0,	3,	1],
 						[-0.25,	0,	2.5,1],
 						[-0.25,	0,	0.5,1],
 						[0,		0,	0,	1]
 					],
 					[
 						[1.5,	0,	3,	1],
 						[1,		1,	2.5,1],
 						[1,		3,	0.5,1],
 						[1,		0,	0	,1]
 					],
 					[
 						[1.5,	0,	3,	1],
 						[2,		1,	2.5,1],
 						[2,		3,	0.5,1],
 						[2,	0,	0,	1]
 					],
 					[
 						[2,		0,	3,	1],
 						[3.25,	0,	2.5,1],
 						[3.25,	0,	0.5,1],
 						[3,		0,	0,	1]
 					]
 				];
 	this.cabine = new MyPatch(this.scene,new MyPatchData("",20,20,3,3,cabineCP));

 	 this.white.setAmbient(0.8, 0.8, 0.8, 1);
	 this.white.setDiffuse(0.2, 0.2, 0.2, 1);
	 this.white.setSpecular(1, 1, 1, 1);	
	 this.white.setShininess(120);
	 
	 this.blue.setAmbient(0, 0, 0.6, 1);
	 this.blue.setDiffuse(0.2, 0.2, 0.2, 1);
	 this.blue.setSpecular(1, 1, 1, 1);	
	 this.blue.setShininess(120);

	 this.dark.setAmbient(0.3, 0.3,0.3, 1);
	 this.dark.setDiffuse(0.2, 0.2, 0.2, 1);
	 this.dark.setSpecular(1, 1, 1, 1);	
	 this.dark.setShininess(120);

	 this.green.setAmbient(0, 0.7,0, 1);
	 this.green.setDiffuse(0.2, 0.2, 0.2, 1);
	 this.green.setSpecular(1, 1, 1, 1);	
	 this.green.setShininess(120);
 }

 MyVehicle.prototype.display = function() {

	this.scene.pushMatrix();			//Tronco
		this.dark.apply();
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,0.35,-0.2);	//motor
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,-0.35,-0.2);	
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,0.35,-0.2);	
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,-0.35,-0.2);	
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,-0.35,-0.2);	//motor back
		this.scene.scale(1,1,3);
		this.green.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,0.35,-0.2);	
		this.scene.scale(1,1,3);
		this.green.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,-0.35,-0.2);	
		this.scene.scale(1,1,3);
		this.green.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,0.35,-0.2);	
		this.scene.scale(1,1,3);
		this.green.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,0.35,1);	//motor front
		this.scene.scale(2,2,1);
		this.green.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(+0.45,0.35,1);	
		this.scene.scale(2,2,1);
		this.green.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,-0.35,1);	
		this.scene.scale(2,2,1);
		this.green.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,-0.35,1);	
		this.scene.scale(2,2,1);
		this.green.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.scale(2,2,2);	//back
		this.blue.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,5,1);	//front
		this.scene.scale(1.25,1.25,1.5);
		this.scene.rotate(Math.PI/6,0,0,1);
		this.green.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();	
		this.scene.rotate(Math.PI/50,1,0,0);
		this.scene.translate(0,0.6,0.7);
		this.scene.scale(0.2,0.5,0.5);
		this.scene.translate(-1.5,-0.5,-1.5);	//cabine
		this.white.apply();
		this.cabine.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					//wing
		this.scene.translate(0,0,0.5);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.dark.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(0,0,0.5);
		this.scene.rotate(-Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.dark.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(0,0,0.5);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.dark.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(0,0,0.5);
		this.scene.rotate(-Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.dark.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					//wing front
		this.scene.translate(3,1,0);
		this.scene.scale(0.6,0.6,1.5);
		this.scene.rotate(-Math.PI/8,0,1,0);
		this.scene.rotate(Math.PI/25,1,0,0);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.blue.apply();
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(3,-1,0);
		this.scene.scale(0.6,0.6,1.5);
		this.scene.rotate(-Math.PI/8,0,1,0);
		this.scene.rotate(-Math.PI/25,1,0,0);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.blue.apply();
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(-3,1,0);
		this.scene.scale(0.6,0.6,1.5);
		this.scene.rotate(Math.PI/8,0,1,0);
		this.scene.rotate(Math.PI/25,1,0,0);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.blue.apply();
		this.cylinder2.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(-3,-1,0);
		this.scene.scale(0.6,0.6,1.5);
		this.scene.rotate(Math.PI/8,0,1,0);
		this.scene.rotate(-Math.PI/25,1,0,0);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.blue.apply();
		this.cylinder2.display();
	this.scene.popMatrix();

 };