
class Player extends AbstractEntity{



  constructor(positionX, positionY, width, height,
		assets, animationVelocity, movementVelocity){
		super(positionX, positionY, width, height, assets, animationVelocity, movementVelocity);


	}


  update(delta){
    this.positionX += this.movementVelocityX *  delta;
    this.positionY += this.movementVelocityY *  delta;
  }


  render(canvas, ctx){
    ctx.drawImage(
			this.assets,
			this.positionX,
			this.positionY,
      this.imageWith,
      this.imageHeight
			);
  }



}
