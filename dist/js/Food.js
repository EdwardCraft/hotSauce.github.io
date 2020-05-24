class Food  extends AbstractEntity{



  constructor(positionX, positionY, width, height,
		assets, animationVelocity, movementVelocity){
		super(positionX, positionY, width, height, assets, animationVelocity, movementVelocity);

    this.startingXposition = positionX;
    this.visible = true;
    this.isOutOfScreen = false;
  
	}



  update(delta){

    if((this.positionX + this.imageWith ) <= 0 ){
        this.isOutOfScreen = true;
    }
    this.positionX -= this.movementVelocityX *  delta;

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

  setIsOutOfScreen(isOutOfScreen){
    this.isOutOfScreen = isOutOfScreen;
  }

  getIsOutOfScreen(){
    return this.isOutOfScreen;
  }

  setVisible(visible){
    this.visible = visible;
  }

  getVisible(){
    return   this.visible;
  }



}
