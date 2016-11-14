 function MyPlane(scene, data) {
     CGFobject.call(this,scene);

	 this.scene = scene;
     this.dX = data.getDX();
     this.dY = data.getDY();
     this.uDivs = data.getUDivs();
     this.vDivs = data.getVDivs();
		 
     this.initBuffers();
 }


 MyPlane.prototype = Object.create(CGFobject.prototype);
 
 MyPlane.prototype.constructor = MyPlane;



 /**
  * Init
  */
 MyPlane.prototype.initBuffers = function() {

	//Properties

   /* this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords = [];

 	for(var i = 0; i < this.vDivs+1;i++){

 		for(var j = 0; j < this.uDivs+1;j++){
 		
			//this.vertices.push(this.dX/this.uDivs*j,this.dY/this.vDivs*i,0);
			this.normals.push(0,0,1);
			this.texCoords.push(1/this.uDivs*j,1-1/this.vDivs*i);

			if(j != this.uDivs && i != this.vDivs){
				this.indices.push(j+(this.uDivs+1)*i , j+1+(this.uDivs+1)*i , j+(this.uDivs+1)*(i+1));
				this.indices.push(j+1+(this.uDivs+1)*i , j+1+(this.uDivs+1)*(i+1) , j+(this.uDivs+1)*(i+1));
			}
 		}
 	}*/

 	this.uKnots = [
 					0,0,
 					this.dX,this.dY
 					];

 	this.vKnots = [
 					0,0,
 					this.dX,this.dY
 					];

	this.controlPoints = [
					0.5 , 0,
					0 , 0.5,
					1 , 0.5,
					0.5 , 1
					];

	this.surface = new CGFnurbsSurface( 1, 1, this.uKnots, this.vKnots, this.controlPoints);
	getSurfacePoint = function(u, v) { return surface.getPoint(u, v); };	
 	this.obj =  new CGFnurbsObject(this.scene,getSurfacePoint, this.uDivs, this.vDivs );

 	this.obj.initBuffers();

    this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };