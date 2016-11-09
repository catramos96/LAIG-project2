 function MyPlaneData(id,dX,dY, uDivs, vDivs) {
     this.id = id;
     this.dX = dX;
     this.dY = dY;
     this.uDivs = uDivs;
     this.vDivs = vDivs;
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