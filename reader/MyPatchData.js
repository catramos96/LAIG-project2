 function MyPatchData(id, uDivs, vDivs,uOrder,vOrder,controlPoints) {
     this.id = id;
     this.uDivs = uDivs;
     this.vDivs = vDivs;
     this.uOrder = uOrder;
     this.vOrder = vOrder;
     this.controlPoints = controlPoints;
 }

 MyPatchData.prototype = new MyPrimitive(this.id); 
 MyPatchData.prototype.constructor = MyPatchData;

 /**
  * GETS
  */

 MyPatchData.prototype.getId = function(){
     return this.id;
 }

 MyPatchData.prototype.getFunc = function(){
     return this.func;
 }

 MyPatchData.prototype.getUDivs = function(){
     return this.uDivs;
 }

 MyPatchData.prototype.getVDivs = function(){
     return this.vDivs;
 }
  MyPatchData.prototype.getUOrder = function(){
     return this.uOrder;
 }

 MyPatchData.prototype.getVOrder = function(){
     return this.vOrder;
 }
  MyPatchData.prototype.getControlPoints = function(){
     return this.controlPoints;
 }