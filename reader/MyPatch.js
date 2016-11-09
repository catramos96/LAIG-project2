 function MyPatch(scene, data) {
     CGFobject.call(this,scene);

     this.func = data.getFunc();
     this.uDivs = data.getUDivs();
     this.vDivs = data.getVDivs();
     
	//MyPatch.prototype = new CGFnurbsObject( scene, func, uDivs, vDivs );
     
     this.initBuffers();
 }

 
 MyPatch.prototype = Object.create(CGFobject.prototype);

 /**
  * Init
  */
 MyPatch.prototype.initBuffers = function() {

	//Properties
    this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords = [];

	
    this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };