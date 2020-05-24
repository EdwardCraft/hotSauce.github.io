
//here where a gong to load the assets amd create the Objects correspoding to each one


let background;
let cloud;
let cloudTwo;
let playerOnePlane;
let hotSauceItem;
let selectScreen;
let blueSelect;
var isloadedBlueSelect = false;
let redSelect;
let hotSouceBanner;


var planeRedImg;
var palneBlueImg;

var food_img_1;
var food_img_2;
var food_img_3;
var food_img_4;
var food_img_5;

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

var impactHotSouceAnimation = [
  HOT_SOUCE_COLLISION_STRIPE_IMG,
  HOT_SOUCE_COLLISION_EXPLOSION_IMG,
  HOT_SOUCE_COLLISION_TEXT_IMG
];

var impactHotSouceFrames = [];

var impactHotSouceFramesLoaded = false;
var hotSouceImgLoaded = false;
var hotSauceImg;

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

  hotSauceImg = new Image();
  hotSauceImg.onload = function() {
    hotSauceItem = new HotBottle(GAME_WORLD_WIDTH, 0, HOT_SOUCE_WIDTH , HOT_SOUCE_HEIGHT, hotSauceImg, 0, HOT_SOUCE_VELOCITY);
    hotSouceImgLoaded = true;
  }
  hotSauceImg.src = HOT_SOUCE_IMG_DIR;


  food_img_1 = new Image();
  food_img_1.onload = function() {

  }
  food_img_1.src = PIZZA_IMG;

  food_img_2 = new Image();
  food_img_2.onload = function() {

  }
  food_img_2.src = SUSHI_IMG;

  food_img_3 = new Image();
  food_img_3.onload = function() {

  }
  food_img_3.src = BREAD_IMG;

  food_img_4 = new Image();
  food_img_4.onload = function() {

  }
  food_img_4.src = HABURGUESA_IMG;

  food_img_5 = new Image();
  food_img_5.onload = function() {

  }
  food_img_5.src = BOWL_IMG;

  loadAnimationAssets(selectPlayerRedAnimation, RED_OPTION, selectPlayerRedFrames, true);
  loadAnimationAssets(selectPlayerBlueAnimation, BLUE_OPTION, selectPlayerBlueFrames, true);
  loadAnimationAssets(impactHotSouceAnimation, HOT_SOUCE_BANNER, impactHotSouceFrames, false);

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

        updateLoadingState(object);
			}
		}
		img.src = assets[i];
		assetsFrames.push(img);
	}
}


function createObject(object, assetsFrames) {
    switch (object) {
      case BLUE_OPTION:
          isloadedBlueSelect = true;
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

function updateLoadingState(object) {
    if(object == HOT_SOUCE_BANNER) impactHotSouceFramesLoaded = true;
}
