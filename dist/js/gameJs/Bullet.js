


class Bullet extends AbstractEntity{



  constructor(positionX, positionY, width, height,
    assets, animationVelocity, movementVelocity){
    super(positionX, positionY, width, height, assets, animationVelocity, movementVelocity);
    // console.log("bullet x: "  + this.positionX);
    // console.log("bullet y: "  + this.positionY);

    this.bulletOutOfScreen = false;
    this.visible = true;
    this.outOfWindow = GAME_WORLD_WIDTH;
  }



  update(delta){

    this.shootMovementOne(delta);

  }

  shootMovementOne(delta){

    if(this.positionX <= (this.outOfWindow )){
      this.positionX += this.movementVelocity * delta;

    }else{
      this.bulletOutOfScreen = true;
    }

  }


  render(canvas, ctx){
    if(this.visible){
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        this.positionX,
        this.positionY,
        this.imageWith,
        this.imageHeight
        );
    }

  }

  gettBulletOutOfScreen(){
    return this.bulletOutOfScreen;
  }

  setVisible(visible){
    this.visible = visible;
  }

  getVisible(){
    return   this.visible;
  }



}
