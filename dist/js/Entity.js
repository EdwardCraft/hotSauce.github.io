

class Entity {

  /*
	 1-argument = postion X
	 2-argument = postion Y
	 3-argument = width
	 4-argument = height
	 5-argument = arry of images
	 6.argument = animation speed;
	*/

  /*just  a coment to commit*/

  constructor() {
    var data = arguments;
		switch(arguments.length){
			case 5:
			   this.firstConstructor(
				arguments[0], arguments[1],
				arguments[2], arguments[3], arguments[4]);
        break;
      case 6:
  			  this.secondConstructor(
  				arguments[0], arguments[1],
  				arguments[2], arguments[3],
  				arguments[4], arguments[5]);
        break;
			case 7:
          this.thirdConstructor(
            arguments[0], arguments[1],
    				arguments[2], arguments[3],
    				arguments[4], arguments[5],
            arguments[6]
          );
        break;
			case 8:

        break;

			default: break;
		}

  }


  firstConstructor(postionX, postionY, width, height, asset){
		this.postionX = postionX;
		this.postionY = postionY;
		this.width = width;
		this.height = height;
		this.asset = asset;
	}

  secondConstructor(postionX, postionY, width, height, asset , velocity){
		this.postionX = postionX;
		this.postionY = postionY;
		this.width = width;
		this.height = height;
		this.asset = asset;
    this.startingXposition = postionX;
    this.statingCloudTwoPosition = GAME_WORLD_WIDTH;
    this.movementVelocityX = velocity;
    this.movementVelocityY = velocity;

	}

  thirdConstructor(postionX, postionY, width, height, asset , velocity, animationVelocity){
    this.postionX = postionX;
		this.postionY = postionY;
		this.width = width;
		this.height = height;
    this.currentImg  = asset[0];
    this.frames = asset.length;
    this.index = 0;
    this.count = 0;
    this.assets = asset;
    this.animationVelocity = animationVelocity;
    this.startAnimationSelect = false;
    this.endAnimation = false;
  }


  update(delta){


	}

  updatePlayerOne(delta){
    this.postionX += this.movementVelocityX *  delta;
    this.postionY += this.movementVelocityY *  delta;


  }

  updateClouds(delta){
    if((this.postionX + (this.width - CLEAR_GAP_BETWEEN_CLODS)) <=  0){
      this.postionX = this.statingCloudTwoPosition;
    }
    this.postionX -= this.movementVelocityX *  delta;

  }

  updateCloudsTwo(delta){
    if((this.postionX + (this.width)) <=  0){
      this.postionX = this.statingCloudTwoPosition;
    }
    this.postionX -= this.movementVelocityX *  delta;

  }




  updateHotSouce(delta){
    if((this.postionX + this.width ) <= 0 ){
      this.getRandPositionYHotSouce();
    }
    this.postionX -= this.movementVelocityX *  delta;

  }

  updateSelectedPlayer(delta){

      if(this.startAnimationSelect)this.runAnimation();
  }



  getRandPositionYHotSouce(){
    var rand =  Math.floor(Math.random() * 3) + 1;

    switch (rand) {
      case 1:
          this.postionY = 50;
          this.postionX  =  this.startingXposition;
        break;
      case 2:
          this.postionY = (GAME_WORLD_HEIGHT - this.height) - 50;
          this.postionX  =  this.startingXposition;
        break;
      case 3:
          this.postionY  = (GAME_WORLD_HEIGHT / 2) - 50;
          this.postionX  =  this.startingXposition;
        break;
      case 4:

        break;
      default:

    }
  }


  render(canvas , ctx ){
		ctx.drawImage(
			this.asset,
			this.postionX,
			this.postionY,
      this.width,
      this.height
			);
	}


  setVelocityX(velocity){
    this.movementVelocityX = velocity;
  }

  setVelocityY(velocity){
    this.movementVelocityY = velocity;
  }

  runAnimation(){
		this.index++;
		if(this.index > this.animationVelocity){
			this.index = 0;
			this.nextFrame();
		}
	}


	nextFrame(){
		if(this.count >= this.frames){
			this.count = 0;
      this.endAnimation = true;
		}
		this.currentImg = this.assets[this.count % this.frames];
		this.count++;
	}

  renderSelect( canvas , canvasctx){

		canvasctx.drawImage(
			this.currentImg,
			this.postionX,
			this.postionY,
      this.width,
      this.height
			);
	}


  getBounds(){
		return [this.postionX, this.postionY, this.width, this.height];
	}

  setCurrentImg(isOver, stopCheck){
    if(stopCheck != true)
      isOver == true ? this.currentImg = this.assets[1] : this.currentImg = this.assets[0];
  }

  setStartAnimation(start){
      this.startAnimationSelect = start;
  }

  getEndAnimation(){
    return this.endAnimation;
  }

}
