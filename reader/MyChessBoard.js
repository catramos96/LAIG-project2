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

	this.shader = new CGFshader(this.scene.gl, "shaders/board.vert", "shaders/board.frag");

	this.shader.setUniformsValues({uSampler: 1});
	this.shader.setUniformsValues({du: this.dU});
	this.shader.setUniformsValues({dv: this.dV});

	this.shader.setUniformsValues({c1: [this.c1.getR(),this.c1.getG(),this.c1.getB(),this.c1.getA()]});	//vec4
	this.shader.setUniformsValues({c2: [this.c2.getR(),this.c2.getG(),this.c2.getB(),this.c2.getA()]});	//vec4
	this.shader.setUniformsValues({c3: [this.c3.getR(),this.c3.getG(),this.c3.getB(),this.c3.getA()]});	//vec4

	console.log(this.shader.getUniformsValues());
 }

 
 MyChessBoard.prototype = Object.create(CGFobject.prototype);
 MyChessBoard.prototype.constructor = MyChessBoard;


 MyChessBoard.prototype.getTexture= function() {
		return this.texture;
  };

  MyChessBoard.prototype.display= function() {
  	this.scene.setActiveShader(this.shader);
	this.plane.display();
	this.scene.setActiveShader(this.scene.defaultShader);
  };