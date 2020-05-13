
//here where a gong to load the assets amd create the Objects correspoding to each one


let background;
let cloud;
let cloudTwo;
let playerOnePlane;
let hotSauceItem;
let selectScreen;
let blueSelect;
let redSelect;

var planeRedImg;
var palneBlueImg;

var selectPlayerRedAnimation = [
  SELECTION_RED_PLAYER_IMG_ONE,
  SELECTION_RED_PLAYER_IMG_TWO,
  SELECTION_RED_PLAYER_IMG_THREE
];

var selectPlayerRedFrames = [];

var selectPlayerBlueAnimation = [
  SELECTION_BLUE_PLAYER_IMG_ONE,
  SELECTION_BLUE_PLAYER_IMG_TWO,
  SELECTION_BLUE_PLAYER_IMG_THREE
];

var selectPlayerBlueFrames = [];


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
    cloudTwo =  new Entity(GAME_WORLD_WIDTH, 0, GAME_WORLD_WIDTH + CLEAR_GAP_BETWEEN_CLODS, GAME_WORLD_HEIGHT, cloudImg, CLOUD_MOVEMENT_VELOCITY);
  }
  cloudImg.src = 'assets/clouds.png';

  planeRedImg = new Image();
  planeRedImg.onload = function()  {

  }
  planeRedImg.src = 'assets/bluePlane.png';

  var hotSauceImg = new Image();
  hotSauceImg.onload = function() {
    hotSauceItem = new Entity(GAME_WORLD_WIDTH, 0, HOT_SOUCE_WIDTH , HOT_SOUCE_HEIGHT, hotSauceImg, HOT_SOUCE_VELOCITY);
  }
  hotSauceImg.src = HOT_SOUCE_IMG_DIR;

  loadAnimationAssets(selectPlayerRedAnimation, RED_OPTION, selectPlayerRedFrames, true);
  loadAnimationAssets(selectPlayerBlueAnimation, BLUE_OPTION, selectPlayerBlueFrames, true);


}



function loadAnimationAssets(assets, object, assetArray, initializeObject){

	var assetsFrames = [];
	var loaded = 0;
	for(var i = 0; i < assets.length; i++){
		var img = new Image();
		img.onload = function(){
			++loaded;
			if(loaded >= assets.length){
				for(var i = 0; i < assetsFrames.length; i++){
					assetArray.push(assetsFrames[i]);
				}
				if(initializeObject)
					createObject(object, assetsFrames);
			}
		}
		img.src = assets[i];
		assetsFrames.push(img);
	}
}


function createObject(object, assetsFrames) {
    switch (object) {
      case BLUE_OPTION:
          blueSelect =  new Entity(SELECTION_IMG_OPTION_WIDTH + 20, 100, SELECTION_IMG_OPTION_WIDTH, SELECTION_IMG_OPTION_HEIGHT,
                                      assetsFrames, 0, SELECTION_ANIMATION_VELOCITY);
        break;
      case RED_OPTION:
          redSelect =  new Entity(50, 100, SELECTION_IMG_OPTION_WIDTH, SELECTION_IMG_OPTION_HEIGHT,
                                      assetsFrames, 0, SELECTION_ANIMATION_VELOCITY);
        break;
      default:

    }


}
