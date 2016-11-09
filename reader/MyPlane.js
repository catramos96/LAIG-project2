 function MyPlane(scene, data) {
     CGFobject.call(this,scene);

     this.dX = data.getDX();
     this.dY = data.getDY();
     this.uDivs = data.getUDivs();
     this.vDivs = data.getVDivs();

	 //MyPlane.prototype = new CGFnurbsObject(scene, null, uDivs, vDivs );

     this.initBuffers();
 }

 
 MyPlane.prototype = Object.create(CGFobject.prototype);


 /**
  * Init
  */
 MyPlane.prototype.initBuffers = function() {

	//Properties
    this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords = [];

 	for(var i = 0; i < this.vDivs+1;i++){

 		for(var j = 0; i < this.uDivs+1;j++){
 		
			this.vertices.push(this.dX/this.uDivs*j,this.dY/this.vDivs*i);
			this.normals.push(0,0,1);
			//this.texCoords.push();

			if(j != this.uDivs && i != this.vDivs){
				this.indices.push(j+(this.uDivs+1*i) , j+1+(this.uDivs+1*i) , j+(this.uDivs+1*(i+1)));
				this.indices.push(j+1+(this.uDivs+1*i) , j+(this.uDivs+1*(i+1)) , j+1+(this.uDivs+1*(i+1)));
			}
 		}
 	}

    this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };