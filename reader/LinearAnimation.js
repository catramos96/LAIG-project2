/**
 * Descendent of MyPrimitive
 */
 function LinearAnimation(id,p0,p1,p2,time) {
    this.id = id;
	this.p0 = p0;
	this.p1 = p1;
	this.p2 = p2;
	this.time = time;
 }

 LinearAnimation.prototype = new Animation(this.id);   
 LinearAnimation.prototype.constructor = LinearAnimation;
