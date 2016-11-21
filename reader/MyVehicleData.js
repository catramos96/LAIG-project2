 /**
 * Data Struct of MyVehicleData
 * Descendent of MyPrimitive
 */
 function MyVehicleData(id) {
     this.id = id;
 }

 MyVehicleData.prototype = new MyPrimitive(this.id); 
 MyVehicleData.prototype.constructor = MyVehicleData;

/*
GETS
*/
 MyVehicleData.prototype.getId = function(){
     return this.id;
 }
