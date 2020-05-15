
class HotBottle extends AbstractEntity{



  constructor(positionX, positionY, width, height,
		assets, animationVelocity, movementVelocity){
		super(positionX, positionY, width, height, assets, animationVelocity, movementVelocity);

    this.startingXposition = positionX;
    this.visible = true;
	}


  update(delta){

    if((this.positionX + this.imageWith ) <= 0 ){
      this.getRandPositionYHotSouce();
    }
    this.positionX -= this.movementVelocityX *  delta;

  }


  getRandPositionYHotSouce(){
    var rand =  Math.floor(Math.random() * 3) + 1;
    this.visible = true;
    switch (rand) {
      case 1:
          this.positionY = 50;
          this.positionX  =  this.startingXposition;
        break;
      case 2:
          this.positionY = (GAME_WORLD_HEIGHT - this.imageHeight) - 50;
          this.positionX  =  this.startingXposition;
        break;
      case 3:
          this.positionY  = (GAME_WORLD_HEIGHT / 2) - 50;
          this.positionX  =  this.startingXposition;
        break;
      case 4:

        break;
      default:

    }
  }

  render(canvas, ctx){

    if(this.visible){
      ctx.drawImage(
        this.assets,
        this.positionX,
        this.positionY,
        this.imageWith,
        this.imageHeight
        );
    }



  }

  setVisible(visible){
    this.visible = visible;
  }

  getVisible(){
    return   this.visible;
  }


}
