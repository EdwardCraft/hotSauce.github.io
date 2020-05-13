

class Level{


  constructor(){
    this.selectScreen = new SelectScreen();
    this.isOnAnimationSelect = false;
	}

  update(delta){

    if(playerOnePlane !== undefined)playerOnePlane.updatePlayerOne(delta);
    if(cloud !== undefined)cloud.updateClouds(delta);
    if(cloudTwo !== undefined)cloudTwo.updateCloudsTwo(delta);
    if(hotSauceItem !== undefined)hotSauceItem.updateHotSouce(delta);
    if(this.selectScreen !== undefined)this.selectScreen.update(delta);


    if(this.isOnAnimationSelect == true){
      this.checkForPlayerSelect();
    }

  }

  render(canvas, canvasctx){
    // World Objects
		canvasctx.globalAlpha = 1;
    if(background !== undefined )background.render(canvas, canvasctx);
    if(cloud !== undefined)cloud.render(canvas, canvasctx);
    if(cloudTwo !== undefined)cloudTwo.render(canvas, canvasctx);


    canvasctx.globalAlpha = 1;
    if(playerOnePlane !== undefined)playerOnePlane.render(canvas, canvasctx);
    if(hotSauceItem !== undefined)hotSauceItem.render(canvas, canvasctx);


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

  setIsOnAnimationSelect(isOnAnimationSelect){
    this.isOnAnimationSelect = isOnAnimationSelect;
  }

}
