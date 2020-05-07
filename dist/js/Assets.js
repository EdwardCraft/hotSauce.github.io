
//here where a gong to load the assets amd create the Objects correspoding to each one


let background;
let cloud;
let cloudTwo;
let playerOnePlane;
let hotSauceItem;

function  getAssetsLevelOne() {
  var backgroundImg = new Image();
  backgroundImg.onload = function(){
    // we create the  Objects and then we send the asset
		background = new Entity(0, 0, GAME_WORLD_WIDTH, GAME_WORLD_HEIGHT, backgroundImg);
	}
	backgroundImg.src = 'assets/BackgroundBlue1.png';

  var cloudImg = new Image();
  cloudImg.onload = function(){
    cloud = new Entity(0, 0, GAME_WORLD_WIDTH + CLEAR_GAP_BETWEEN_CLODS, GAME_WORLD_HEIGHT, cloudImg, CLOUD_MOVEMENT_VELOCITY);
    cloudTwo =  new Entity(GAME_WORLD_WIDTH, 0, GAME_WORLD_WIDTH + CLEAR_GAP_BETWEEN_CLODS + 1.5, GAME_WORLD_HEIGHT, cloudImg, CLOUD_MOVEMENT_VELOCITY);
  }
  cloudImg.src = 'assets/clouds.png';

  var palneImg = new Image();
  palneImg.onload = function()  {
    playerOnePlane = new Entity(0, 0, PLAYER_WIDTH , PLAYER_HEIGHT, palneImg, 0);
  }
  palneImg.src = 'assets/bluePlane.png';

  var hotSauceImg = new Image();
  hotSauceImg.onload = function() {
    hotSauceItem = new Entity(GAME_WORLD_WIDTH, 0, HOT_SOUCE_WIDTH , HOT_SOUCE_HEIGHT, hotSauceImg, HOT_SOUCE_VELOCITY);
  }
  hotSauceImg.src = HOT_SOUCE_IMG_DIR;

}
