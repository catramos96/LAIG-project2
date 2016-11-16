/**
 * Descendent of MyAnimation
 */
 function LinearAnimation(id,time,controlPoints) {
	Animation.call(this,id,time);
	this.controlPoints = controlPoints;
	this.doCalculations();
 }

 LinearAnimation.prototype = Object.create(Animation.prototype);

 LinearAnimation.prototype.doCalculations = function(){
	 
	//calcular a velocidade 
	this.totalDist = 0;
	this.allDistances = [];
	
	for(var i = 0; i < this.controlPoints.length-1; i++)
	{
		//vetor 2D no plano xOz
		var deltaX = this.controlPoints[i+1].getX()-this.controlPoints[i].getX();
		var deltaZ = this.controlPoints[i+1].getZ()-this.controlPoints[i].getZ();
		
		var tempDist = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaZ,2));
		
		this.allDistances.push(tempDist);
		
		this.totalDist += tempDist;
	}
	this.vel = this.totalDist/this.time;

 }
 
  LinearAnimation.prototype.getTransformation = function(time){
	
	transformation = new MyTransformation(this.id);
	
	var atualPos = this.getAtualInfo(time);		//x,y,z,ang

	transformation.translate(atualPos[0],atualPos[1],atualPos[2]);
	transformation.rotate('y',atualPos[3]);

	return transformation;
 }

 LinearAnimation.prototype.getAtualInfo = function(time)
 {
	var atualDist = time*this.vel;
	var allDist = 0;
	var position = [];
	position[0] = this.controlPoints[0].getX();
	position[1] = 0;
	position[2] = this.controlPoints[0].getZ();
	position[3] = 0;
	
	//encontra entre que pontos se encontra a distancia atual
	for(var i = 0; i < this.allDistances.length; i++)
	{
		position[1] = this.controlPoints[i].getY();
		
		allDist += this.allDistances[i];
		var temp = atualDist;
		
		if(atualDist <= allDist)	//significa que os pontos de controlo são i e i+1
		{
			if(i != 0)
				temp = atualDist-this.allDistances[i-1]; //distancia percorida desde o ultimo ponto de controlo
			
			//calculo do deltaX e deltaY
			var a = this.controlPoints[i+1].getX()-this.controlPoints[i].getX();
			var b = this.controlPoints[i+1].getZ()-this.controlPoints[i].getZ();
			
			position[3] = Math.atan(b/a);
			
			if(a == 0 || b == 0)
			{
				position[0] += Math.cos(position[3])*temp;
				position[2] += Math.sin(position[3])*temp;
			}
			else
			{
				position[0] -= Math.cos(position[3])*temp;
				position[2] -= Math.sin(position[3])*temp;
			}
			
			break;
		}
		else
		{
			position[0] += this.controlPoints[i+1].getX()-this.controlPoints[i].getX();		//deltaX
			position[2] += this.controlPoints[i+1].getZ()-this.controlPoints[i].getZ();		//deltaz
		}
	}
	return position;
 }
 
 LinearAnimation.prototype.printInfo = function(){
	 
	//console.log("Linear Transformation\n\nID : "+this.id+ "\nTime : "+this.time);
	//console.log("Control Points :\n");
	for(var i = 0; i < this.controlPoints.length; i++){
		this.controlPoints[i].printInfo();
	}
}