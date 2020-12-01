class STONE{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking+mangoes\Plucking mangoes/stone.png");
        World.add(world, this.body);
      }

      fly(){
        this.stone.x = null;
    }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}