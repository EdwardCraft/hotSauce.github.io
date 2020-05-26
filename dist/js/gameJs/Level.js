

class Level{


  constructor(){
    this.selectScreen = new SelectScreen();
    this.scoreScreen = new ScoreScreen([0, 0], 0, 0);
    this.isOnAnimationSelect = false;
    this.collision = new Collision();
    this.pauseScreen = new PauseScreen();
    this.bullets = new Array();
    this.foods = new Array();
    this.addFood( Math.floor(Math.random() * FOOD_MOVE_VELOCITY) + 1);
    this.addFood( Math.floor(Math.random() * FOOD_MOVE_VELOCITY) + 1);
    this.addFood( Math.floor(Math.random() * FOOD_MOVE_VELOCITY) + 1);
    this.startGame = false;
    this.pauseGame = false;
	}

  update(delta){

    if(this.pauseGame)
      return;



    if(playerOnePlane !== undefined ){

      playerOnePlane.update(delta);
      if(playerOnePlane.getHealth() != 0 && this.startGame){
        if(cloud !== undefined)cloud.updateClouds(delta);
        if(cloudTwo !== undefined)cloudTwo.updateCloudsTwo(delta);
        if(hotSauceItem !== undefined)hotSauceItem.update(delta);

        if(hotSouceBanner !== undefined)hotSouceBanner.update(delta);
        if(this.scoreScreen !== undefined)this.scoreScreen.update(delta);

        if(this.pauseScreen !== undefined)this.pauseScreen .update(delta);


        this.collision.checkCollisions();
        this.updateBullets(delta);
        this.updateFoods(delta);
      }
    }

    if(this.selectScreen !== undefined)this.selectScreen.update(delta);
    if(this.isOnAnimationSelect == true){
      this.checkForPlayerSelect();
    }


  }

  render(canvas, canvasctx){
    // World Objects
		canvasctx.globalAlpha = 1;
    if(background !== undefined )background.render(canvas, canvasctx);
    if(cloud !== undefined)cloud.render(canvas, canvasctx);
    if(cloudTwo !== undefined)cloudTwo.render(canvas, canvasctx);


    canvasctx.globalAlpha = 1;
    if(playerOnePlane !== undefined)playerOnePlane.render(canvas, canvasctx);
    this.renderBullets(canvas, canvasctx);
    this.renderFood(canvas, canvasctx);
    if(hotSauceItem !== undefined)hotSauceItem.render(canvas, canvasctx);
    if(hotSouceBanner !== undefined)hotSouceBanner.render(canvas, canvasctx);
    if(this.scoreScreen !== undefined)this.scoreScreen.render(canvas, canvasctx);
    canvasctx.globalAlpha = 1;
    if(this.selectScreen !== undefined)this.selectScreen.render(canvas, canvasctx);

    if(this.pauseGame)
      if(this.pauseScreen !== undefined)this.pauseScreen .render(canvas, canvasctx);


  }


  getSelectScreen(){
    return this.selectScreen;
  }

  checkForPlayerSelect(){
    if(redSelect != undefined){
      if(redSelect.getEndAnimation() == true){
        this.selectScreen  = undefined;
        this.startGame = true
      }
    }

    if(blueSelect != undefined){
      if(blueSelect.getEndAnimation() == true){
        this.selectScreen  = undefined;
        this.startGame = true;
      }
    }
  }

  updateBullets(delta){

    if(this.bullets !== undefined){
      for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].update(delta);
      }

      for (var i = 0; i < this.bullets.length; i++) {
        if(this.bullets[i].gettBulletOutOfScreen()){
          this.bullets.splice(i, 1);
        }
      }

    }

  }


  updateFoods(delta){
    if(this.foods !== undefined){

      for (var i = 0; i < this.foods.length; i++) {
        this.foods[i].update(delta);
      }

      for (var i = 0; i < this.foods.length; i++) {
        if(this.foods[i].getIsOutOfScreen()){
          this.foods.splice(i, 1);
          this.addFood( Math.floor(Math.random() * FOOD_MOVE_VELOCITY) + 1);
        }
      }

    }

  }


  renderBullets(){
    if(this.bullets !== undefined){
      for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].render(canvas, canvasctx);
      }
    }
  }

  renderFood(){

    if(this.foods !== undefined){
      for (var i = 0; i < this.foods.length; i++) {
        this.foods[i].render(canvas, canvasctx);
      }
    }

  }

  setIsOnAnimationSelect(isOnAnimationSelect){
    this.isOnAnimationSelect = isOnAnimationSelect;
  }

  getBullets(){
    return this.bullets;
  }

  addBullet(bullet){
    this.bullets.push(bullet);

  }


  addFood(foodVel){
    var rand =  Math.floor(Math.random() * 3) + 1;
    var randFood = Math.floor(Math.random() * 5) + 1;
    foodVel = foodVel / 5;

    var foodImg;

    switch (randFood) {
      case 1:
        foodImg = food_img_1;
        break;
      case 2:
        foodImg = food_img_2;
        break;
      case 3:
        foodImg = food_img_3;
        break;
      case 4:
        foodImg = food_img_4;
        break;
      case 5:
        foodImg = food_img_5;
        break;
      default:

    }

    switch (rand) {
      case 1:
          this.foods.push(new Food(GAME_WORLD_WIDTH, 50, FOOD_IMG_WIDTH, FOOD_IMG_HEIGHT,
        		    foodImg, 0, foodVel));
        break;
      case 2:
          this.foods.push(new Food(GAME_WORLD_WIDTH, GAME_WORLD_HEIGHT - FOOD_IMG_HEIGHT,
                      FOOD_IMG_WIDTH, FOOD_IMG_HEIGHT, foodImg, 0, foodVel));
        break;
      case 3:
          this.foods.push(new Food(GAME_WORLD_WIDTH, (GAME_WORLD_HEIGHT / 2) - 50,
                      FOOD_IMG_WIDTH, FOOD_IMG_HEIGHT, foodImg, 0, foodVel));
        break;
      case 4:

        break;
      default:

    }
  }

  getFocusCanvas(){
    return  this.pauseGame;
  }

  setFocusCanvas(pauseGame){
    this.pauseGame =  pauseGame;
  }


}
