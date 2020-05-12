

var canvas;
var canvasctx;


//  variables to setup the game engine
var FPS = 60;
var fps = 30;
var lastFrameTimeMs = 0; // last time the was run
var maxFPS = FPS; // the maximun FPS we want to allow
var framesThisSecond = 0;
var lastFpsUpdate = 0;
var delta = 0;
var frameID = 0;

// We want to simulate  1000 ms / 60 FPS  = 16.667 ms per frame, every time
// we run  update()
var timestep = 1000 / FPS;

//  game states
var startGame = false;
var endGame = false;
var running = false;
var started = false;
var frameID = 0;

//game variables
var fontSize = 35;
var addSize = 0;
var originalFontSize = fontSize;
var fullScreen = false;
var fullScreenSlider;
var xCoordinates;
var yCoordinates;

// here we are going to check on what device the game is playing, and we are
// going yo adjust the gamescreen

window.onload = function() {
  onMobile();
}


function onMobile(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.getElementById('mobile').style.display = 'block';
		startEngine('canvasMobile');
	}else{
		document.getElementById('desktop').style.display = 'block';
		startEngine('canvas');
	}
}

function startEngine(device){

	console.log("hero from page loaded function");

	canvas = document.getElementById(device);
	canvasctx = canvas.getContext('2d');
	canvasctx.font = originalFontSize +"px" + " Passion One";
	scoreCount = 0;
	window.addEventListener('orientationchange', doOnOrientationChange);
	canvas.addEventListener("click", onClick, false);

  canvas.addEventListener("keyup", onkeyUp, false);
	canvas.addEventListener("keypress", onkeydown, false);
  canvas.addEventListener("mousemove", mouseoverSelectScreen, false);

	/*if(device == 'canvasMobile'){
		doOnOrientationChange();
	}*/
  getAssetsLevelOne();
  start();

}

//Change the orientation in case the game start on a devide
function doOnOrientationChange() {
	switch(window.orientation) {
      	case -90 || 90:
     	resize();
        break;
      	default: break;
    }
}


function onClick(e){

	if(!startGame || e.keyCode === 13){
		startGame = !startGame;
		fontSize = originalFontSize;
		canvasctx.font = fontSize + "px" + " Passion One";
	}

	if(endGame){
		//init();
	}
	/*console.log('x: ', e.x);
	console.log('y: ', e.y);*/
	/*xCoordinates  = (e.x / canvas.width) * canvas.width;
	yCoordinates  = (e.y / canvas.height) * canvas.height;*/
	xCoordinates = e.pageX - canvas.offsetLeft;
	yCoordinates = e.pageY - canvas.offsetTop;
	/*console.log('new x: ', xCoordinates);
	console.log('new y: ', yCoordinates);*/
  if(level !== undefined){
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
  }



}

function onkeydown(e){
	var keyCode = e.keyCode;

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
      playerOnePlane.setVelocityY(-PLAYER_MOVEMENT_VELOCITY);
    }

    //DOWN
    if(keyCode === S){
      if(playerOnePlane !== undefined){
        playerOnePlane.setVelocityY(PLAYER_MOVEMENT_VELOCITY);
      }
    }

    //LEFT
    if(keyCode === A){
      if(playerOnePlane !== undefined){
        playerOnePlane.setVelocityX(-PLAYER_MOVEMENT_VELOCITY);
      }
    }

    //RIGHT
    if(keyCode === D){
      if(playerOnePlane !== undefined){
        playerOnePlane.setVelocityX(PLAYER_MOVEMENT_VELOCITY);
      }

    }

}

function onkeyUp(e) {
  var keyCode = e.keyCode;

  //RIGHT

  if(keyCode === W_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setVelocityY(0);
    }
  }

  if(keyCode === S_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setVelocityY(0);
    }
  }

  if(keyCode === A_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setVelocityX(0);
    }
  }

  if(keyCode === D_UN_SELECTED){
    if(playerOnePlane !== undefined){
      playerOnePlane.setVelocityX(0);
    }
  }

}

function mouseoverSelectScreen(e) {
  var xCoordinates = e.pageX - canvas.offsetLeft;
	var yCoordinates = e.pageY - canvas.offsetTop;

  if(level.getSelectScreen() !== undefined){
    level.getSelectScreen().setMouseCoordinates(xCoordinates, yCoordinates);
  }

}







// Start The Engine
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function start(){
	if(!started){ //don't request multiple frames
		started = true;
		//Dummy frame to get  our timestamps and initial drawing right
		//Track the frane ID  so we cancel it if we stop quickly.
		frameID = requestAnimationFrame(function(timestamp){
			render();
			running = true;
			//reset some time tracking variables
			lastFrameTimeMs = timestamp;
			lastFpsUpdate = timestamp;
			framesThisSecond = 0;
			//actually start the main loop
			frameID = requestAnimationFrame(mainLoop);
		});


    initial();

	}
}

function mainLoop(timestamp){

	//throttle the frame rate.
	if(timestamp < lastFrameTimeMs + (1000 / maxFPS)){
		frameID = requestAnimationFrame(mainLoop);
		return;
	}

	//track the accumulated time that hasn't been simulated yet
	delta += timestamp - lastFrameTimeMs; // get the delta time since last frame
	lastFrameTimeMs = timestamp;

	if(timestamp > lastFpsUpdate + 1000){
		fps = 0.25 * framesThisSecond + 0.75 * fps;
		lastFpsUpdate = timestamp;
		framesThisSecond = 0;
	}
	framesThisSecond++;


	var numUpdatesSteps = 0;
	while(delta >= timestep){
		update(timestep);
		delta -= timestep;
		//Sanity check
		if(++numUpdatesSteps >= 240){
			rebuild();
			break;
		}
	}
	render();
	frameID = requestAnimationFrame(mainLoop);

}

function rebuild(){
	delta = 0; //discard the unsimulated time
	//... snap the player to the  authoritative state
}


////////////////////////////////////////////////////////////////////////////////////////////////////


function update(update){
  if(level !== undefined )
    level.update(update);

}


function render() {

  	//clear background
    clearScreen(0, 0, canvas.width, canvas.height, 'black');
    if(level !== undefined )
        level.render(canvas, canvasctx);

}


function clearScreen(leftX, topY, width, height, color){
	canvasctx.clearRect(0, 0, canvas.width, canvas.height);
	canvasctx.fillStyle = color;
	canvasctx.fillRect( leftX, topY, width, height);

}




function initial() {
  level = new Level();

}
