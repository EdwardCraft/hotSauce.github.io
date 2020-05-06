

class Entity {

  /*
	 1-argument = postion X
	 2-argument = postion Y
	 3-argument = width
	 4-argument = height
	 5-argument = arry of images
	 6.argument = animation speed;
	*/


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
    this.movementVelocityX = velocity;
    this.movementVelocityY = velocity;
	}


  update(delta){


	}

  updatePlayerOne(delta){
    this.postionX += this.movementVelocityX *  delta;
    this.postionY += this.movementVelocityY *  delta;


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


}
