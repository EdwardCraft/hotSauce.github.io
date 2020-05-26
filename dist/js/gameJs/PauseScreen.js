
class PauseScreen{


  constructor(){


  }

  update(delta){

  }

  render(canvas, canvasctx){

    canvasctx.globalAlpha = 0.8;
    canvasctx.fillStyle = "black";
    canvasctx.fillRect( 0, 0,  GAME_WORLD_WIDTH, GAME_WORLD_HEIGHT );

    canvasctx.font = 70 +"px" + " Passion One";
    canvasctx.strokeStyle = 'white';
    canvasctx.lineWidth = 8;
    canvasctx.strokeText("CLICK TO START GAME AGAIN " , (GAME_WORLD_WIDTH /2) - 350, (GAME_WORLD_HEIGHT / 2)  + 20);
    canvasctx.fillStyle = '#FFA4EE';
    canvasctx.fillText("CLICK TO START GAME AGAIN " , (GAME_WORLD_WIDTH /2) - 350, (GAME_WORLD_HEIGHT / 2) + 20);


  }




}
