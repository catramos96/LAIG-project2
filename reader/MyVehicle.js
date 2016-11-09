 function MyVehicle(scene, data) {
     CGFobject.call(this,scene);

     this.x = data.getX();
     
     this.initBuffers();
 }

 MyVehicle.prototype = Object.create(CGFobject.prototype);

 /**
  * Init
  */
 MyVehicle.prototype.initBuffers = function() {

	//Properties
    this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords = [];

	
    this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

 /*
 LIVRE
 */