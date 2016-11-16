function MyChessBoard(scene, data) {
     CGFobject.call(this,scene);

	this.scene = scene;
    this.dU = data.getDU();	//dimensões
    this.dV = data.getDV();	//dimensões
    this.sU = data.getSU();	//posição do "peão"
	this.sV = data.getSV();	//posição do "peão"
	this.texture = data.getTexture();
	this.c1 = data.getC1();	//cor primaria
	this.c2 = data.getC2();	//cor secundaria
	this.c3 = data.getC3();	//cor de peão selecionado

	console.log(this.dU); 
	console.log(this.dV);
	console.log(this.sU);
	console.log(this.sV);
	console.log(this.texture);
	console.log(this.c1);
	console.log(this.c2);
	console.log(this.c3);

	this.plane = new MyPlane(this.scene,new MyPlaneData("plane",1,1,this.dU,this.dV));
 }

 
 MyChessBoard.prototype = Object.create(CGFobject.prototype);
 MyChessBoard.prototype.constructor = MyChessBoard;


 MyChessBoard.prototype.getTexture= function() {
		return this.texture;
  };

  MyChessBoard.prototype.display= function() {
  	this.scene.pushMatrix();
		this.plane.display();
	this.scene.popMatrix();
  };