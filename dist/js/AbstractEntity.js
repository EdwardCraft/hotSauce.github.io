class AbstractEntity{

	constructor(positionX, positionY, width, height,
		assets, animationVelocity, movementVelocity){
		this.positionX = positionX;
		this.positionY = positionY;
		this.imageWith = width;
		this.imageHeight = height;
		this.assets = assets;
		this.movementVelocityX = movementVelocity;
    this.movementVelocityY = movementVelocity
		this.animationVelocity = animationVelocity;

		this.frames = 0;
		this.count = 0;
		this.endLoop = false;
		this.currentImg = new Image();
		this.index = 0;

		this.health = 1;
		this.second = 0;

	}

  update(delta){}
  render(canvas, ctx){}

	getPositionX(){return this.positionX;}
	setPositionX(positionX){this.positionX = positionX;}
	getPositionY(){return this.positionY;}
	setPositionY(positionY){this.positionY = positionY;}
	getImageWidth(){return this.imageWith;}
	setImageWidth(imageWith){this.imageWith = imageWith;}
	getImageHeight(){return this.imageHeight;}
	setImageHeight(imageHeight){this.imageHeight = imageHeight;}
	getAssets(){return this.assets;}
	setAssets(assets){this.assets = assets;}

	getMovementVelocityX(){return this.movementVelocityX;}
	setMovementVelocityX(movementVelocityX){this.movementVelocityX = movementVelocityX;}
  getMovementVelocityY(){return this.movementVelocityY;}
	setMovementVelocityY(movementVelocityY){this.movementVelocityY = movementVelocityY;}

	getAnimationVelocity(){return animationVelocity;}
	setAnimationVelocity(animationVelocity){this.animationVelocity = animationVelocity;}


	setFrames(){this.frames = this.assets.length;}
	setCurrentImg(img){this.currentImg = img;}


	setHealth(health){this.health = health;}
	getHealth(){return this.health;}




	getBounds(){
		return [this.positionX, this.positionY,  this.positionX + this.imageWith, this.positionY + this.imageHeight];
	}


}
