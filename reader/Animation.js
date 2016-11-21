/**
 * Super classe Animation
 */
function Animation(id,time) {
	this.id = id;
	this.time = time;
}

/**
 * Received time
 */
Animation.prototype.getTime = function()
{
	return this.time;
}

/** 
 * Received id
 */
Animation.prototype.getId = function()
{
	return this.id;
}