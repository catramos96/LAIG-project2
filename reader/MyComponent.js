/**
 * Data Struct of MyComponent
 */
  function MyComponent(id,defined) {
     this.id = id;
     this.defined = defined;    //To know if it has been processed in the parser
     this.materialIndex = 0;    //Index of the material in use
     this.materials = [];       //List of materials
     this.components = [];      //Children components
     
     this.animTransformation = new MyTransformation("anim");
 }

 /**
  * Each component can have more than one materials
  * This function changes the component material to the next one
  * by incrementing the materialIndex
  */
 MyComponent.prototype.incMaterialIndex = function(){
 	this.materialIndex++;
 	if(this.materials.length == this.materialIndex)
		this.materialIndex = 0;
 }

 /**
  * GETS
  */

 MyComponent.prototype.getCurrMaterial = function(){      //Material in use
 	return this.materials[this.materialIndex];
 }
 
 MyComponent.prototype.isDefined = function(){            //Has been processed
 	return this.defined;
 }

 MyComponent.prototype.getId = function(){                //Id
 	return this.id;
 }

 //NEW
 MyComponent.prototype.getAnimTransformation = function(deltaTime)  //Animation Transformation
 {  
    var tempTime = 0;
   
    //ciclo que percorre as animacoes para saber se este deltaTime se adequa a alguma animacao
    for(var i = 0; i < this.animations.length; i++)
    {
		tempTime += this.animations[i].getTime();	//total time of i animation
		
		if(deltaTime <= tempTime)	//esta nesta animacao
		{
			var deltaAnim = deltaTime-tempTime+this.animations[i].getTime();	//time since animation begined
			this.animTransformation = this.animations[i].getTransformation(deltaAnim);	//update the animTransformation
			break;
		}
    }
    return this.animTransformation;	//returns the animTransformation. If it wasnt updated it means that this is the last position of the last animation
 }

  MyComponent.prototype.getTransformation = function()  //Transformation
 {  
 	return this.transformation;
 }
 
 MyComponent.prototype.getMaterials = function(){         //List of materials
 	return this.materials;
 }
 
 MyComponent.prototype.getTexture = function(){           //Texture
 	return this.texture;
 }

 MyComponent.prototype.getPrimitives = function(){        //Primitives
 	return this.primitives;
 }
 
 MyComponent.prototype.getComponentsChilds = function(){  //Components children
 	return this.components;
 }

 /**
  * SETS
  */
  
 MyComponent.prototype.setDefined = function(b){
 	this.defined = b;
 }
 
 MyComponent.prototype.setTransformation = function(m){
 	this.transformation = m;
 }

 MyComponent.prototype.setMaterials = function(mt){
 	this.materials =  mt;
 }

 MyComponent.prototype.setTexture = function(t){
 	this.texture = t;
 }

 MyComponent.prototype.setComponents = function(c){
 	this.components = c;
 }

 MyComponent.prototype.setPrimitives = function(p){
 	this.primitives = p;
 }
 
  MyComponent.prototype.setAnimations = function(a){
 	this.animations = a;
 }

 /*
  * DISPLAY
  */
 MyComponent.prototype.display = function(){
    console.log("START");
 	console.log("Component id: " + this.id);
 	console.log("Matrix: " + this.transformation.getId());
 	console.log("Texture id: " + this.texture.getId());
 	for(var [key, value] of this.materials){
 	  console.log("Materials id: " + key);
 	}
 	for(var [key, value] of this.components){
 	  console.log("Components id: " + key);
 	}
 	for(var [key, value] of this.primitives){
 	  console.log("Primitives id: " + key);
 	}
 	console.log("END");
 }

