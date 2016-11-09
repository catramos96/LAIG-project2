/**
 * Descendent of MyAnimation
 */
 function LinearAnimation(id,time, controlPoints) {
    this.id = id;
	this.time = time;
	this.controlPoints = controlPoints;
 }

 LinearAnimation.prototype = new Animation(this.id);   
 LinearAnimation.prototype.constructor = LinearAnimation;

 LinearAnimation.prototype.printInfo = function(){
	 
	console.log("Linear Transformation\n\nID : "+this.id+ "\nTime : "+this.time);
	console.log("Control Points :\n");
	for(var i = 0; i < this.controlPoints.length; i++){
		this.controlPoints[i].printInfo();
	}
}