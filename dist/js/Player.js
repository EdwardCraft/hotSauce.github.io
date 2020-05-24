
class Player extends AbstractEntity{



  constructor(positionX, positionY, width, height,
		assets, animationVelocity, movementVelocity){
		super(positionX, positionY, width, height, assets, animationVelocity, movementVelocity);
    this.timer = 0;
    this.endTimer = 1000;
    this.hitAnimationOn = false;
    this.isHit = false;
    this.health = PLAYER_LIVES;

	}


  update(delta){
    this.positionX += this.movementVelocityX *  delta;
    this.positionY += this.movementVelocityY *  delta;


    if(this.isHit)this.hitAnimation(delta);
    this.isOver();
  }


  render(canvas, ctx){
    if(!this.hitAnimationOn){
      ctx.drawImage(
  			this.assets,
  			this.positionX,
  			this.positionY,
        this.imageWith,
        this.imageHeight
  			);
    }

  }

  hitAnimation(delta){

       if(this.timer <= this.endTimer){
         this.timer += delta;
         //console.log(this.timer);
         //if((this.timer % 1) == 0) {
           this.hitAnimationOn = !this.hitAnimationOn;
         //}
       }else{
         this.isHit = false;
         this.hitAnimationOn = false;
         this.timer = 0;
       }


  }

  isOver(){
    if(this.health == 0){
      //this variable was declare ton the gameEngine.js
      endGame = true;
    }
  }

  setIsHit(isHit){
    this.isHit = isHit;
  }

  getIsHit(){
    return this.isHit;
  }



}
