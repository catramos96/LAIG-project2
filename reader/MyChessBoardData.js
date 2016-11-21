/**
 * Data Struct of MyChessBoardData
 * Descendent of MyPrimitive
 */
 function MyChessBoardData(id, dU,dV,texture,sU,sV,c1,c2,c3) {
     this.id = id;
     this.dU = dU;            //u dimensions
     this.dV = dV;            //v dimensions
     this.texture = texture;  
     this.sU = sU;            //position in u
     this.sV = sV;            //position in v
     this.c1 = c1;            //primary color
     this.c2 = c2;            //secondary color
     this.c3 = c3;            //set color
 }

 MyChessBoardData.prototype = new MyPrimitive(this.id); 
 MyChessBoardData.prototype.constructor = MyChessBoardData;

 /**
  * GETS
  */

 MyChessBoardData.prototype.getId = function(){
     return this.id;
 }

 MyChessBoardData.prototype.getDU = function(){
     return this.dU;
 }

 MyChessBoardData.prototype.getDV = function(){
     return this.dV;
 }

 MyChessBoardData.prototype.getTexture = function(){
     return this.texture;
 }

 MyChessBoardData.prototype.getSU = function(){
     return this.sU;
 }

 MyChessBoardData.prototype.getSV = function(){
     return this.sV;
 }
  MyChessBoardData.prototype.getC1 = function(){
     return this.c1;
 }

 MyChessBoardData.prototype.getC2 = function(){
     return this.c2;
 }
  MyChessBoardData.prototype.getC3 = function(){
     return this.c3;
 }