 function MyPlaneDataData(id,dX,dY, uDivs, vDivs) {
     this.id = id;
     this.dX = dX;
     this.dY = dY;
     this.uDivs = uDivs;
     this.vDivs = vDivs;
 }

 MyPlaneDataData.prototype = new MyPrimitive(this.id); 
 MyPlaneDataData.prototype.constructor = MyPlaneDataData;

 /**
  * GETS
  */

 MyPlaneDataData.prototype.getId = function(){
     return this.id;
 }

 MyPlaneDataData.prototype.getDX = function(){
     return this.dX;
 }

 MyPlaneDataData.prototype.getDY = function(){
     return this.dY;
 }

 MyPlaneDataData.prototype.getuDivs = function(){
     return this.uDivs;
 }

 MyPlaneDataData.prototype.getvDivs = function(){
     return this.vDivs;
 }