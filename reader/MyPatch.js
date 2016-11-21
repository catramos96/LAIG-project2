/*
Class MyPatch
*/
function MyPatch(scene, data) {
     CGFobject.call(this,scene);
	
     this.uDivs = data.getUDivs();					//u divisions
     this.vDivs = data.getVDivs();					//v divisions
     this.uOrder = data.getUOrder();				//u order
     this.vOrder = data.getVOrder();				//v order
     this.controlPoints = data.getControlPoints();	//control points
     this.surfaces;

     this.init();
 }

 
 MyPatch.prototype = Object.create(CGFobject.prototype);
 MyPatch.prototype.constructor = MyPatch;
 
 MyPatch.prototype.init= function() {

	var uKnots = [];
	var vKnots = [];

 	var i;
 	for(i = 0; i < (this.uOrder+1) * 2;i++){	//uKnots
 		if(i < this.uOrder+1)
 			uKnots.push(0);
 		else
 			uKnots.push(1);
 	}
 	for(i = 0; i < (this.vOrder+1) * 2;i++){	//vKnots
 		if(i < this.vOrder+1)
 			vKnots.push(0);
 		else
 			vKnots.push(1);
 	}
		//surface
	  var nurbsSurface = new CGFnurbsSurface(this.uOrder, this.vOrder, uKnots, vKnots, this.controlPoints);

        getSurfacePoint = function(u, v) {
                return nurbsSurface.getPoint(u, v);
        };
        
 		//object
        this.surfaces = new CGFnurbsObject(this.scene, getSurfacePoint, this.uDivs, this.vDivs); 
        this.surfaces.display(); 
 };

  MyPatch.prototype.display= function() {
  	this.surfaces.display();
  };