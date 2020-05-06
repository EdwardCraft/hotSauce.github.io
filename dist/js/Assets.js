
//here where a gong to load the assets amd create the Objects correspoding to each one


let background;
let cloud;
let playerOnePlane;


function  getAssetsLevelOne() {
  var backgroundImg = new Image();
  backgroundImg.onload = function(){
    // we create the  Objects and then we send the asset
		background = new Entity(0, 0, GAME_WORLD_WIDTH, GAME_WORLD_HEIGHT, backgroundImg);
	}
	backgroundImg.src = 'assets/BackgroundBlue1.png';

  var cloudImg = new Image();
  cloudImg.onload = function(){
    cloud = new Entity(0, 0, GAME_WORLD_WIDTH , GAME_WORLD_HEIGHT, cloudImg);
  }
  cloudImg.src = 'assets/clouds.png';

  var palneImg = new Image();
  palneImg.onload = function()  {
    playerOnePlane = new Entity(0, 0, PLAYER_WIDTH , PLAYER_HEIGHT, palneImg, 0);
  }
  palneImg.src = 'assets/bluePlane.png';



}
