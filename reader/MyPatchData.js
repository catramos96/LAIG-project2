 function MyPatchData(id,func, uDivs, vDivs) {
     this.id = id;
     this.func = func;
     this.uDivs = uDivs;
     this.vDivs = vDivs;
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
     return this.UDivs;
 }

 MyPatchData.prototype.getVDivs = function(){
     return this.VDivs;
 }