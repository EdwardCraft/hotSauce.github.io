

class Level{


  constructor(){
    this.selectScreen = new SelectScreen();
    this.isOnAnimationSelect = false;
    this.collision = new Collision();
    this.bullets = new Array();

	}

  update(delta){

    if(playerOnePlane !== undefined)playerOnePlane.update(delta);
    if(cloud !== undefined)cloud.updateClouds(delta);
    if(cloudTwo !== undefined)cloudTwo.updateCloudsTwo(delta);
    if(hotSauceItem !== undefined)hotSauceItem.update(delta);
    if(this.selectScreen !== undefined)this.selectScreen.update(delta);
    if(hotSouceBanner !== undefined)hotSouceBanner.update(delta);

    if(this.isOnAnimationSelect == true){
      this.checkForPlayerSelect();
    }


    this.collision.checkCollisions();
    this.updateBullets(delta);
  }

  render(canvas, canvasctx){
    // World Objects
		canvasctx.globalAlpha = 1;
    if(background !== undefined )background.render(canvas, canvasctx);
    if(cloud !== undefined)cloud.render(canvas, canvasctx);
    if(cloudTwo !== undefined)cloudTwo.render(canvas, canvasctx);


    canvasctx.globalAlpha = 1;
    if(playerOnePlane !== undefined)playerOnePlane.render(canvas, canvasctx);
    this.renderBullets(canvas, canvasctx);
    if(hotSauceItem !== undefined)hotSauceItem.render(canvas, canvasctx);
    if(hotSouceBanner !== undefined)hotSouceBanner.render(canvas, canvasctx);

    canvasctx.globalAlpha = 1;
    if(this.selectScreen !== undefined)this.selectScreen.render(canvas, canvasctx);

  }


  getSelectScreen(){
    return this.selectScreen;
  }

  checkForPlayerSelect(){
    if(redSelect != undefined){
      if(redSelect.getEndAnimation() == true){
        this.selectScreen  = undefined;
      }
    }

    if(blueSelect != undefined){
      if(blueSelect.getEndAnimation() == true){
        this.selectScreen  = undefined;
      }
    }
  }

  updateBullets(delta){

    if(this.bullets !== undefined){
      for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].update(delta);
      }

      for (var i = 0; i < this.bullets.length; i++) {
        if(this.bullets[i].gettBulletOutOfScreen()){
          this.bullets.splice(i, 1);
        }
      }

    }



  }

  renderBullets(){
    if(this.bullets !== undefined){
      for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].render(canvas, canvasctx);
      }
    }
  }

  setIsOnAnimationSelect(isOnAnimationSelect){
    this.isOnAnimationSelect = isOnAnimationSelect;
  }

  getBullets(){
    return this.bullets;
  }

  addBullet(bullet){
    this.bullets.push(bullet);
    console.log("bullet array size: " + this.bullets.length);
  }

}
