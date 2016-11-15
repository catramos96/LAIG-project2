function MyPlane(scene,data){
 
        CGFobject.call(this,scene);
        this.dX = data.getDX();
        this.dY = data.getDY();
        this.uDivs = data.getUDivs();
        this.vDivs = data.getVDivs(); 

        this.surfaces;

        /*
               -----|-----      (0,1)-  -  -  - (1,1)
              |     |     |         |             |
              |     |     |         |
           -------------------      |             |
              |     |     |         |
              |     |     |         |             |
               -----|-----          -------------
                                (0,0)           (1,0)

           knots = [    0,0,
                        1,0,
                        1,1,
                        0,1     
           ]
        */
        this.makeSurface("0", 1, // degree on U: 2 control vertexes U
                                         1, // degree on V: 2 control vertexes on V
                                        [0, 1, 0, 1], // knots for U
                                        [0, 0, 1, 1], // knots for V
                                        [       // U = 0
                                                [ // V = 0..1;
                                                         [-this.dX/2, this.dY/2, 0.0, 1 ],  //(0,0)
                                                         [-this.dX/2,  -this.dY/2, 0.0, 1 ] //(0,-1)
                                                       
                                                ],
                                                // U = 1
                                                [ // V = 0..1
                                                         [ this.dX/2, this.dY/2, 0.0, 1 ],  //(1,0)
                                                         [ this.dX/2,  -this.dY/2, 0.0, 1 ] //(1,-1)                                           
                                                ]
                                        ]
                                );
};
 
MyPlane.prototype = Object.create(CGFobject.prototype);
MyPlane.prototype.constructor = MyPlane;
 
MyPlane.prototype.makeSurface = function (id, degree1, degree2, knots1, knots2, controlvertexes, translation) {
               
        var nurbsSurface = new CGFnurbsSurface(degree1, degree2, knots1, knots2, controlvertexes);
        getSurfacePoint = function(u, v) {
                return nurbsSurface.getPoint(u, v);
        };
 
        this.surfaces = new CGFnurbsObject(this.scene, getSurfacePoint, this.uDivs, this.vDivs);                    
};

MyPlane.prototype.display = function ()
{
    this.surfaces.display();
};