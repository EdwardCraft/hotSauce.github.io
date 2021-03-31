

function onClick(e){

	if(!startGame || e.keyCode === 13){
		startGame = !startGame;
		fontSize = originalFontSize;
		canvasctx.font = fontSize + "px" + " Passion One";
	}

	if(endGame){
		//init();
		initial();

	}





	/*console.log('x: ', e.x);
	console.log('y: ', e.y);*/
	/*xCoordinates  = (e.x / canvas.width) * canvas.width;
	yCoordinates  = (e.y / canvas.height) * canvas.height;*/
	xCoordinates = e.pageX - canvas.offsetLeft;
	yCoordinates = e.pageY - canvas.offsetTop;
	/*console.log('new x: ', xCoordinates);
	console.log('new y: ', yCoordinates);*/



  /*if(level !== undefined){
    if(level.getSelectScreen() !== undefined){
      if(level.getSelectScreen().getIsOverRed() == true){
        level.getSelectScreen().setStopMouseOver(true);
        level.setIsOnAnimationSelect(true);
        if(redSelect != undefined){
          redSelect.setStartAnimation(true);
        }
      }else if(level.getSelectScreen().getIsOverBlue() == true){
        level.getSelectScreen().setStopMouseOver(true);
        level.setIsOnAnimationSelect(true);
        if(blueSelect != undefined){
          blueSelect.setStartAnimation(true);
        }
      }
    }
  }*/


}


function onClickPause(e) {
	var elementCanvas =  document.getElementById('canvas');
	var targetElement = e.target;


	if(elementCanvas === targetElement){
		console.log("hello");
		level.setFocusCanvas(false);
	}else{
		if(level !== undefined){
			level.setFocusCanvas(true);
		}
		console.log("afuera");
	}

}

function onkeydown(e){
	var keyCode = e.keyCode;
  console.log(keyCode);
    if(keyCode == ESCAPE) {
       if(fullScreen){
       	document.getElementById('mobile').style.display = 'none';
    		document.getElementById('desktop').style.display = 'block';
    		//startEngine('canvasMobile');
    		//resize();
    		document.getElementById("fullScreen").checked = false;
    		fullScreen = false;
       }
    }

    //UP
    if(keyCode === W){
			if(playerOnePlane != undefined){
				playerOnePlane.setMovementVelocityY(-PLAYER_MOVEMENT_VELOCITY);
			}

    }

    //DOWN
    if(keyCode === S){
      if(playerOnePlane !== undefined){
        playerOnePlane.setMovementVelocityY(PLAYER_MOVEMENT_VELOCITY);
      }
    }

    //LEFT
    if(keyCode === A){

      if(playerOnePlane !== undefined){
        playerOnePlane.setMovementVelocityX(-PLAYER_MOVEMENT_VELOCITY);
      }

      if(level !== undefined){
        if(level.getSelectScreen() !== undefined){
          level.getSelectScreen().setIsOverRed(true);
          if(redSelect !== undefined){
            redSelect.setCurrentImg(true, false);
            blueSelect.setCurrentImg(false, false);
          }
        }
      }


    }

    //RIGHT
    if(keyCode === D){
      if(playerOnePlane !== undefined){
        playerOnePlane.setMovementVelocityX(PLAYER_MOVEMENT_VELOCITY);
      }

      if(level !== undefined){
        if(level.getSelectScreen() !== undefined){
          level.getSelectScreen().setIsOverRed(false);
          if(blueSelect !== undefined){
            redSelect.setCurrentImg(false, false);
            blueSelect.setCurrentImg(true, false);
          }
        }
      }
    }

    if(keyCode === ENTER || keyCode === SHOOT){
      if(level !== undefined){
        if(level.getSelectScreen() !== undefined){

          if(level.getSelectScreen().getIsOverRed() == true){
            level.setIsOnAnimationSelect(true);
            if(redSelect != undefined){
              redSelect.setStartAnimation(true);
              playerOnePlane = new Player(0, 0, PLAYER_WIDTH , PLAYER_HEIGHT, planeRedImg, 0, 0);
            }
          }else{
            level.setIsOnAnimationSelect(true);
            if(blueSelect != undefined){
              blueSelect.setStartAnimation(true);
              playerOnePlane = new Player(0, 0, PLAYER_WIDTH , PLAYER_HEIGHT, planeRedImg, 0, 0);
            }
          }

        }
      }
    }

		if(keyCode === SHOOT){
			 if(level !== undefined){
				 if(playerOnePlane !== undefined){
					 level.addBullet(new Bullet((playerOnePlane.positionX  + playerOnePlane.imageWith) - ( BULLET_SHOOT_WIDTH ) ,
					 													  ((playerOnePlane.positionY  +  (playerOnePlane.imageHeight  / 2) + 20)) - (BULLET_SHOOT_HEIGHT / 2),
				                              BULLET_SHOOT_WIDTH, BULLET_SHOOT_HEIGHT , "", 0, BULLET_SHOOT_MOVEMENT_VELOCITY));
				 }
			 }
		}

}

function onkeyUp(e) {
  var keyCode = e.keyCode;

  //RIGHT

  if(keyCode === W_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setMovementVelocityY(0);
    }
  }

  if(keyCode === S_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setMovementVelocityY(0);
    }
  }

  if(keyCode === A_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setMovementVelocityX(0);
    }
  }

  if(keyCode === D_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setMovementVelocityX(0);
    }
  }

}






function mouseoverSelectScreen(e) {
  var xCoordinates = e.pageX - canvas.offsetLeft;
	var yCoordinates = e.pageY - canvas.offsetTop;

  /*if(level.getSelectScreen() !== undefined){
    level.getSelectScreen().setMouseCoordinates(xCoordinates, yCoordinates);
  }*/

}
