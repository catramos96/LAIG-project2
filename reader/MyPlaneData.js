/**
 * Data Struct of MyPlaneData
 * Descendent of MyPrimitive
 */

 function MyPlaneData(id,dX,dY, uDivs, vDivs) {
     this.id = id;
     this.dX = dX;        //X dimensions
     this.dY = dY;        //Y dimensions
     this.uDivs = uDivs;  //u divisions
     this.vDivs = vDivs;  //v divisions
 }

 MyPlaneData.prototype = new MyPrimitive(this.id); 
 MyPlaneData.prototype.constructor = MyPlaneData;

 /**
  * GETS
  */

 MyPlaneData.prototype.getId = function(){
     return this.id;
 }

 MyPlaneData.prototype.getDX = function(){
     return this.dX;
 }

 MyPlaneData.prototype.getDY = function(){
     return this.dY;
 }

 MyPlaneData.prototype.getUDivs = function(){
     return this.uDivs;
 }

 MyPlaneData.prototype.getVDivs = function(){
     return this.vDivs;
 }