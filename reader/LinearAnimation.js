/**
 * Descendent of MyAnimation
 */
 function LinearAnimation(id,time,controlPoints) {
	Animation.call(this,id,time);
	this.controlPoints = controlPoints;
	this.doCalculations();
 }

 LinearAnimation.prototype = Object.create(Animation.prototype);

 /**
  * Calculates velocity and distances
  */
 LinearAnimation.prototype.doCalculations = function(){
	 
	//calcular a velocidade 
	this.totalDist = 0;
	this.allDistances = [];
	
	for(var i = 0; i < this.controlPoints.length-1; i++)
	{
		//control point in xz
		var cpoint1 = vec3.fromValues(this.controlPoints[i].getX(),0,this.controlPoints[i].getZ());
		var cpoint2 = vec3.fromValues(this.controlPoints[i+1].getX(),0,this.controlPoints[i+1].getZ());
		
		//displacement in yy
		var deltaY = this.controlPoints[i+1].getY()-this.controlPoints[i].getY();
		
		//distance between cpoint1 and cpoint2
		var tempDist = vec3.distance(cpoint1,cpoint2);
		
		//vetor with all tempDist's
		this.allDistances.push(tempDist);
		
		//total dist is the distance at xz and yy
		this.totalDist += Math.abs(deltaY);
		this.totalDist += tempDist;
	} 
	this.vel = this.totalDist/this.time;
	
	this.angle = 0;
 }
 
/**
 * Calculates the transformation at deltaTime
 */
  LinearAnimation.prototype.getTransformation = function(time){
	
	transformation = new MyTransformation(this.id);	//new transformation
	
	var atualPos = this.getAtualPosition(time);		//x,y,z
	
	transformation.translate(atualPos[0],atualPos[1],atualPos[2]);	//translates for the position calculated
	transformation.rotate('y',this.angle);	//angle between the 2 control points

	return transformation;
 }

 /** 
  * Calculates the atual position and angle whereas the time.
  */
 LinearAnimation.prototype.getAtualPosition = function(time)
 {
	var atualDist = time*this.vel;	//o que percorreu no tempo recebido desde o inicio da animacao
	var allDist = 0;				//distancia desde o inicio da animacao ate ao proximo ponto de controlo
	var lastDist = 0;				//distancia desde o ultimo ponto de controlo passado até a distancia atual
	var newAngle = this.angle;
	var position = vec3.create();	//posicao atual
	var point1, point2, newPoint;
	
	//encontra entre que pontos de controlo se encontra a distancia atual
	for(var i = 0; i < this.allDistances.length; i++)
	{
		//-- calculos para decidir o angulo
		point1 = vec3.fromValues(this.controlPoints[i].getX(),0,this.controlPoints[i].getZ());
		point2 = vec3.fromValues(this.controlPoints[i+1].getX(),0,this.controlPoints[i+1].getZ());
		
		//a direcao do ponto atual sera a subtracao entre os 2 pontos de controlo em xz
		var resVec = vec3.create();
		var dir = vec3.create();
		vec3.subtract(resVec,point2,point1);
		vec3.normalize(dir,resVec);
		
		//as componentes da direcao em x e z nao podem ser as 2 zero 
		var dirX = vec3.dot(dir,vec3.fromValues(1,0,0));
		var dirZ = vec3.dot(dir,vec3.fromValues(0,0,1));

		if(!(dirX == 0 && dirZ == 0)){
			//newAngle = -Math.atan2(dirZ,dirX);
			newAngle = -Math.atan2(dirZ,dirX)+Math.PI/2;
		}
		
		//-- calculos para as distancias
		
		//deslocamento em y entre os 2 pontos
		var deltaY = this.controlPoints[i+1].getY()-this.controlPoints[i].getY();
		allDist += Math.abs(deltaY);		//acrescenta a distancia percorrida em y, antes da distancia entre os 2 pontos em xz
	
		//esta dentro do intervalo, logo esta a deslocar-se em yy entre os pontos de controlo i e i+1
		if(atualDist <= allDist)
		{
			lastDist = atualDist-(allDist-Math.abs(deltaY)); //distancia percorida desde que comecou a subir/descer
	
			if(deltaY < 0)	//esta a descer
				dir = vec3.fromValues(0,-1,0);
			else	//esta a subir
				dir = vec3.fromValues(0,1,0);
			
			//o ponto atual sera acresentado a este ponto (ponto i com y )
			newPoint = vec3.fromValues(this.controlPoints[i].getX(),this.controlPoints[i].getY(),this.controlPoints[i].getZ());

			break;
		}
			
		allDist += this.allDistances[i];	//acresecnta a distancia percorrida em xz
		
		//esta dentro do intervalo, logo esta a deslocar-se em xz entre os pontos de controlo i e i+1
		if(atualDist <= allDist)
		{
			lastDist = atualDist-(allDist-this.allDistances[i]); //distancia percorida desde o ultimo ponto de controlo, em xz
			
			//o ponto atual sera acresentado a este ponto (ponto i com y de i+1 porque ja fez a animacao de subir)
			newPoint = vec3.fromValues(this.controlPoints[i].getX(),this.controlPoints[i+1].getY(),this.controlPoints[i].getZ());
			
			break;
		}
	}
	
	//adiciona ao novo ponto calculado um vetor com a direcao e distancias calculadas
	var tempVec = vec3.create();
	vec3.scale(tempVec,dir,lastDist);
	vec3.add(position,newPoint,tempVec);
	
	this.angle = newAngle; 	//so atualiza no fim
	
	return position;
 }
 
 /** 
  * Prints information
  */
 LinearAnimation.prototype.printInfo = function(){
	 
	console.log("Linear Transformation\n\nID : "+this.id+ "\nTime : "+this.time);
	console.log("Control Points :\n");
	for(var i = 0; i < this.controlPoints.length; i++){
		this.controlPoints[i].printInfo();
	}
}