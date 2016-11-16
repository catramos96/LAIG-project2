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
	this.c3 = data.getC3();	//cor de peão selecionada

	this.plane = new MyPlane(this.scene,new MyPlaneData("plane",1,1,this.dU,this.dV));
	this.shader = new CGFshader(this.scene.gl, "shaders/flat.frag", "shaders/flat.vert");
	/*this.shader.setUniformsValues({uSampler2: 1});
		console.log("APOS INIT");*/
	//this.shader.setLineMode();
 }

 
 MyChessBoard.prototype = Object.create(CGFobject.prototype);
 MyChessBoard.prototype.constructor = MyChessBoard;


 MyChessBoard.prototype.getTexture= function() {
		return this.texture;
  };

  MyChessBoard.prototype.display= function() {
  	this.scene.setActiveShader(this.shader);
  	//this.texture.bind(0);
	this.plane.display();
  };