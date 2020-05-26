class ScoreScreen{



	constructor(position, width, height){
		this.position = position;
		this.width = width;
		this.height = height;
    this.timer = 0;
    this.endTimer = 600;
    this.fontSize = 50;
    this.fontSizeMax = 100;
    this.startResize = false;
    this.endResie = false;
    this.offsetX = 0;
    this.offsetY = 0;
	}




	update(delta){

    if(playerOnePlane !== undefined){
      if(playerOnePlane.getIsHit() &&   !this.startResize){
        this.startResize  = true;
        console.log("only once");
      }

    }

    if(this.startResize){
      if(this.fontSize <= this.fontSizeMax){
        this.fontSize += PLAYER_SCORE_FONT_RESIZE_VELOCITY * delta;
        this.offsetX += (PLAYER_SCORE_FONT_RESIZE_VELOCITY * delta) / 3;
        this.offsetY -= (PLAYER_SCORE_FONT_RESIZE_VELOCITY * delta) / 3 ;
      }else{
        this.fontSize = 50;
        this.startResize = false;
        this.offsetX = 0;
        this.offsetY = 0;
      }
    }

	}


	render(canvas, canvasctx){

		// canvasctx.globalAlpha = 0.3;
		// canvasctx.fillStyle = "black";
		// canvasctx.fillRect( 0, 0,  canvas.width, canvas.height );
    canvasctx.globalAlpha = 1;
    if(playerOnePlane !== undefined){
      canvasctx.lineWidth = 10;
      canvasctx.strokeStyle = "white";
      canvasctx.strokeRect( this.position[0], this.position[1], this.width, this.height);
      canvasctx.fillStyle = "#FFA6EB";
      canvasctx.fillRect( this.position[0], this.position[1], this.width, this.height);

      //score tag
      canvasctx.font = 50 +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText("SCORE   " + playerOnePlane.getScoreCount(), (this.position[0]) + 50, (this.position[1]) + 60);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText("SCORE   "  + playerOnePlane.getScoreCount(), (this.position[0]) + 50, (this.position[1]) + 60);
      canvasctx.font = originalFontSize +"px" + " Passion One";



      //lives
      canvasctx.font = 50 +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText("LIVES   ", GAME_WORLD_WIDTH - (200), (this.position[1]) + 60);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText("LIVES   ", GAME_WORLD_WIDTH - (200), (this.position[1]) + 60);
      canvasctx.font = originalFontSize +"px" + " Passion One";


      canvasctx.font = this.fontSize +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText(playerOnePlane.getHealth(), (GAME_WORLD_WIDTH - (70)) - this.offsetX,
                                                ((this.position[1]) + 60) - this.offsetY);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText(playerOnePlane.getHealth(), (GAME_WORLD_WIDTH - (70)) - this.offsetX,
                                                ((this.position[1]) + 60) - this.offsetY);
      canvasctx.font = originalFontSize +"px" + " Passion One";




    }

    if(endGame){
      if(playerOnePlane !== undefined){
        var score = playerOnePlane.getScoreCount();
      }


      canvasctx.globalAlpha = 0.5;
      canvasctx.fillStyle = "black";
      canvasctx.fillRect( 0, 0,  GAME_WORLD_WIDTH, GAME_WORLD_HEIGHT );
      canvasctx.globalAlpha = 1;
      canvasctx.lineWidth = 10;
      canvasctx.strokeStyle = "white";
      canvasctx.strokeRect( (GAME_WORLD_WIDTH /2) -150 , (GAME_WORLD_HEIGHT / 2) - 150, 300, 300);
      canvasctx.fillStyle = "#FFA6EB";
      canvasctx.fillRect((GAME_WORLD_WIDTH /2) -150 , (GAME_WORLD_HEIGHT / 2) - 150, 300, 300);

      canvasctx.font = 50 +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText("SCORE   " + score,
                              (GAME_WORLD_WIDTH /2) - 90, (GAME_WORLD_HEIGHT / 2) - 30);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText("SCORE   " + score,
                             (GAME_WORLD_WIDTH /2) - 90, (GAME_WORLD_HEIGHT / 2) - 30);
      canvasctx.font = originalFontSize +"px" + " Passion One";

      canvasctx.font = 50 +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText("CLICK " ,
                              (GAME_WORLD_WIDTH /2) - 50, (GAME_WORLD_HEIGHT / 2) + 20);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText("CLICK " ,
                             (GAME_WORLD_WIDTH /2) - 50, (GAME_WORLD_HEIGHT / 2) + 20);
      canvasctx.font = originalFontSize +"px" + " Passion One";


      canvasctx.font = 50 +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText("TO " ,
                              (GAME_WORLD_WIDTH /2) - 25 , (GAME_WORLD_HEIGHT / 2) + 70);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText("TO " ,
                             (GAME_WORLD_WIDTH /2)  - 25, (GAME_WORLD_HEIGHT / 2) + 70);
      canvasctx.font = originalFontSize +"px" + " Passion One";

      canvasctx.font = 50 +"px" + " Passion One";
      canvasctx.strokeStyle = 'white';
      canvasctx.lineWidth = 8;
      canvasctx.strokeText("PLAY AGAIN " ,
                              (GAME_WORLD_WIDTH /2) - 110 , (GAME_WORLD_HEIGHT / 2) + 120);
      canvasctx.fillStyle = '#FFA4EE';
      canvasctx.fillText("PLAY AGAIN " ,
                             (GAME_WORLD_WIDTH /2)  - 110, (GAME_WORLD_HEIGHT / 2) + 120);
      canvasctx.font = originalFontSize +"px" + " Passion One";

    }


	}

  setStartResize(startResize){
    this.startResize = startResize;
  }



}
