/**
 * Super classe Animation
 */
function Animation(id,time) {
	this.id = id;
	this.time = time;
}

Animation.prototype.getTime = function()
{
	return this.time;
}

Animation.prototype.getId = function()
{
	return this.id;
}