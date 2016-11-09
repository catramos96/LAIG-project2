 function MyPatchDataData(id,func, uDivs, vDivs) {
     this.id = id;
     this.func = func;
     this.uDivs = uDivs;
     this.vDivs = vDivs;
 }

 PatchDataData.prototype = new MyPrimitive(this.id); 
 MyMyPatchDataData.prototype.constructor = MyPatchDataData;

 /**
  * GETS
  */

 MyPatchDataData.prototype.getId = function(){
     return this.id;
 }

 MyPatchDataData.prototype.getFunc = function(){
     return this.func;
 }

 MyPatchDataData.prototype.getUDivs = function(){
     return this.UDivs;
 }

 MyPatchDataData.prototype.getVDivs = function(){
     return this.VDivs;
 }