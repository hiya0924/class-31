class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = [];
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x > 220 && this.body.speed > 10){
    //add position to path array
    var posAr = [this.body.position.x,this.body.position.y]
    this.path.push(posAr);
    }
    for(var pos=0; pos< this.path.length ; pos = pos+1){
      image(this.smoke,this.path[pos][0],this.path[pos][1]);
    }
    
  }
}
