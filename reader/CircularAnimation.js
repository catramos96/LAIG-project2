/**
 * Descendent of MyAnimation
 */
 function CircularAnimation(id,time,pc,r,startAng,rotAng) {
    this.id = id;
	this.time = time;
	this.pc = pc;
	this.r = r;
	this.startAng = startAng;
	this.rotAng = rotAng;
 }

 CircularAnimation.prototype = new Animation(this.id);   
 CircularAnimation.prototype.constructor = CircularAnimation;

 CircularAnimation.prototype.printInfo = function(){
	 
	console.log("Circular Transformation\n\nID : "+this.id+ "\nTime : "+this.time+"\nCenter : ");
	this.pc.printInfo();
	console.log("Radius : "+this.r+"\nStart Angle : "+this.startAng+"\nRotate Angle : "+this.rotAng+"\n");
}