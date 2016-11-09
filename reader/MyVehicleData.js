 function MyVehicleDataData(id) {
     this.id = id;
 }

 MyVehicleDataData.prototype = new MyPrimitive(this.id); 
 MyVehicleDataData.prototype.constructor = MyVehicleDataData;

 /**
  * GETS
  */

 MyVehicleDataData.prototype.getId = function(){
     return this.id;
 }

  /*
 LIVRE
 */