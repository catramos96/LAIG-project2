/**
 * Descendent of MyAnimation
 */
 function CircularAnimation(id,time,pc,r,startAng,rotAng) {
	Animation.call(this,id,time);
	this.pc = pc;
	this.r = r;
	this.startAng = startAng*Math.PI/180;
	this.rotAng = rotAng*Math.PI/180;
	
	var totalDist = this.r*this.rotAng;
	this.vel = totalDist/this.time; 
 }

 CircularAnimation.prototype = Object.create(Animation.prototype);

 /**
  * Print Animation
  */
 CircularAnimation.prototype.printInfo = function(){
	 
	console.log("Circular Transformation\n\nID : "+this.id+ "\nTime : "+this.time+"\nCenter : ");
	this.pc.printInfo();
	console.log("Radius : "+this.r+"\nStart Angle : "+this.startAng+"\nRotate Angle : "+this.rotAng+"\n");
}

/**
 * Calculates the transformation at deltaTime
 */
 CircularAnimation.prototype.getTransformation = function(deltTime){
	
	transformation = new MyTransformation(this.id);
	
	var angAtual = this.vel*deltTime/this.r; //angulo da distancia percorrida ate agora
	
	transformation.translate(this.pc.getX(),this.pc.getY(),this.pc.getZ());
	transformation.rotate('y',(angAtual+this.startAng));
	transformation.translate(this.r,0,0);
	
	//roda no sentido positivo de xx
	if(this.rotAng > 0)	transformation.rotate('y', 90); 
	else if(this.rotAng < 0)	transformation.rotate('y', -90);
	
	return transformation;
 }