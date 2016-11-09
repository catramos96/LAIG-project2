 function MyPatch(scene, data) {
     CGFobject.call(this,scene);

     this.func = data.getFunc();
     this.uDivs = data.getUDivs();
     this.vDivs = data.getVDivs();
     
     this.initBuffers();
 }

 MyPatch.prototype = new CGFnurbsObject( scene, func, uDivs, vDivs );

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