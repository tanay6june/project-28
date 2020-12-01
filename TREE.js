class TREE{
    constructor(x,y,r)
    {
          var options={
              isStatic:true,
              restitution:0,
              friction:1,
          }
         this.x=x;
         this.y=y;
         this.r=r;
         this.image=loadImage("Plucking+mangoes\Plucking mangoes/tree.png")
         this.body=Bodies.rectangle(this.x,this.y,this.r,options)
         World.add(world,this.body);
        }
    
    
    }