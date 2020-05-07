

class Level{


  constructor(){


	}

  update(delta){

    if(playerOnePlane !== undefined)playerOnePlane.updatePlayerOne(delta);
    if(cloud !== undefined)cloud.updateClouds(delta);
    if(cloudTwo !== undefined)cloudTwo.updateClouds(delta);
    if(hotSauceItem !== undefined)hotSauceItem.updateHotSouce(delta);

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


  }



}
