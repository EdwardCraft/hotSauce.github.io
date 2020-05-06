

class Level{


  constructor(){


	}

  update(delta){

    if(playerOnePlane !== undefined)playerOnePlane.updatePlayerOne(delta);

  }

  render(canvas, canvasctx){
    // World Objects
		canvasctx.globalAlpha = 1;
    if(background !== undefined )background.render(canvas, canvasctx);
    if(cloud !== undefined)cloud.render(canvas, canvasctx);



    canvasctx.globalAlpha = 1;
    if(playerOnePlane !== undefined)playerOnePlane.render(canvas, canvasctx);



  }



}
