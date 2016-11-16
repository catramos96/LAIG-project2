function MyPlane(scene,data){
        CGFobject.call(this,scene);
        this.dX = data.getDX();
        this.dY = data.getDY();
        this.uDivs = data.getUDivs();
        this.vDivs = data.getVDivs();

      

        this.surfaces;
        this.init();                            
};
 
MyPlane.prototype = Object.create(CGFobject.prototype);
MyPlane.prototype.constructor = MyPlane;

MyPlane.prototype.init = function (){
  
  var knotsU = [0,0,1,1];
  var knotsV = [0,0,1,1];

  var controlvertexes = [    // U = 0   
                                   [ // V = 0..1
                                     [-this.dX/2, -this.dY/2, 0.0, 1],  //(0,0)
                                     [-this.dX/2, this.dY/2, 0.0, 1 ] //(0,1)
                                   ],    // U = 1
                            // U = 1
                                   [ // V = 0..1
                                     [this.dX/2, -this.dY/2, 0.0, 1 ],  //(1,0)
                                     [this.dX/2, this.dY/2, 0.0, 1 ] //(1,1)                                           
                                   ]
                              ];

  var nurbsSurface = new CGFnurbsSurface(1, 1, knotsU, knotsV, controlvertexes);
        getSurfacePoint = function(u, v) {
                return nurbsSurface.getPoint(u, v);
        };
 
        this.surfaces = new CGFnurbsObject(this.scene, getSurfacePoint, this.uDivs, this.vDivs);  
};

MyPlane.prototype.display = function ()
{
    this.surfaces.display();
};