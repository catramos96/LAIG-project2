/*
Class MyVehicle
*/
 function MyVehicle(scene) {
     CGFobject.call(this,scene);
     this.scene = scene;

	//composition
     this.cylinder = new MyCylinder(scene,new MyCylinderData("",0.5,0.1,5,25,25));
     this.cylinder2 = new MyCylinder(scene,new MyCylinderData("",0.25,0.15,1.2,20,20));
     this.wing = new MyCylinder(scene,new MyCylinderData("",0.5,0.2,2,4,4));
     this.front = new MySphere(scene,new MySphereData("",0.08,20,20));
     this.torus = new MyTorus(scene,new MyTorusData("",0.3,0.2,20,20));

	//materials
     this.lightPink = new CGFappearance(scene);
     this.blue = new CGFappearance(scene);
     this.pink = new CGFappearance(scene);

     this.init();
 }

 MyVehicle.prototype = Object.create(CGFobject.prototype);

 MyVehicle.prototype.init = function(){

 	var cabineCP = [							//cabine control points
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

	//materials specifications
 	 this.lightPink.setAmbient(1, 0.7, 0.8, 1);
	 this.lightPink.setDiffuse(1, 1, 1, 1);
	 this.lightPink.setSpecular(1, 1, 1, 1);	
	 this.lightPink.setShininess(120);
	 
	 this.blue.setAmbient(0, 0.8,0.8, 1);
	 this.blue.setDiffuse(0.8, 0.8, 0.8, 1);
	 this.blue.setSpecular(1, 1, 1, 1);	
	 this.blue.setShininess(120);

	 this.pink.setAmbient(0.8, 0.2,0.3, 1);
	 this.pink.setDiffuse(0.8, 0.8,0.8, 1);
	 this.pink.setSpecular(1, 1, 1, 1);	
	 this.pink.setShininess(120);
 }

 MyVehicle.prototype.display = function() {

	this.scene.pushMatrix();					//body
		this.pink.apply();
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
		this.blue.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,0.35,-0.2);	
		this.scene.scale(1,1,3);
		this.blue.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,-0.35,-0.2);	
		this.scene.scale(1,1,3);
		this.blue.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,0.35,-0.2);	
		this.scene.scale(1,1,3);
		this.blue.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,0.35,1);		//motor front
		this.scene.scale(2,2,1);
		this.blue.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(+0.45,0.35,1);	
		this.scene.scale(2,2,1);
		this.blue.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.45,-0.35,1);	
		this.scene.scale(2,2,1);
		this.blue.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.45,-0.35,1);	
		this.scene.scale(2,2,1);
		this.blue.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		
		this.scene.scale(2,2,2);				//back
		this.lightPink.apply();
		this.torus.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,5,1);			//front
		this.scene.scale(1.25,1.25,1.5);
		this.scene.rotate(Math.PI/6,0,0,1);
		this.blue.apply();
		this.front.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();	
		this.scene.rotate(Math.PI/50,1,0,0);
		this.scene.translate(0,0.6,0.7);
		this.scene.scale(0.2,0.5,0.5);
		this.scene.translate(-1.5,-0.5,-1.5);	//cabine
		this.lightPink.apply();
		this.cabine.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					//wing
		this.scene.translate(0,0,0.5);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.pink.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(0,0,0.5);
		this.scene.rotate(-Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.pink.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(0,0,0.5);
		this.scene.rotate(Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.pink.apply();
		this.wing.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();					
		this.scene.translate(0,0,0.5);
		this.scene.rotate(-Math.PI/10,0,0,1);
		this.scene.scale(1.5,0.2,1);
		this.scene.rotate(Math.PI/4,1,0,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.pink.apply();
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