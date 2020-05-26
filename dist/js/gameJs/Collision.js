
class Collision{


  constructor(){

  }



  checkCollisions(){

      if(playerOnePlane != undefined){
         if(hotSauceItem != undefined &&  hotSauceItem.getVisible()){
           if(playerOnePlane.getBounds()[2] >= (hotSauceItem.getBounds()[0]  + 50) &&
              playerOnePlane.getBounds()[0] <= (hotSauceItem.getBounds()[0]  + 50) &&
             (playerOnePlane.getBounds()[3] - 50) >= hotSauceItem.getBounds()[1] &&
             (playerOnePlane.getBounds()[3] - 50) <= hotSauceItem.getBounds()[3]  ){

               hotSauceItem.setVisible(false);
               if(hotSouceBanner == undefined ){
                 hotSouceBanner = new HotSouceBanner();
               }
           }
         }
      }

      if(level !== undefined){
          if(playerOnePlane !== undefined){
            if(level.foods !== undefined){
              for (var i = 0; i < level.foods.length; i++) {
                if(level.foods[i].getVisible() && !playerOnePlane.getIsHit()){
                  if(playerOnePlane.getBounds()[2] >= (level.foods[i].getBounds()[0]  + 50) &&
                     playerOnePlane.getBounds()[0] <= (level.foods[i].getBounds()[0]  + 50) &&
                    (playerOnePlane.getBounds()[3] - 50) >= level.foods[i].getBounds()[1] &&
                    (playerOnePlane.getBounds()[3] - 50) <= level.foods[i].getBounds()[3]  ){
                     playerOnePlane.setIsHit(true);
                     level.foods[i].setVisible(false);
                     playerOnePlane.setHealth(playerOnePlane.getHealth()  - 1 );
                  }
                }
            }
          }
        }
      }

      if(level !== undefined){
        if(level.bullets  !== undefined){
          for (var i = 0; i < level.bullets.length; i++) {
            if(level.foods !== undefined){
              if(!level.bullets[i].gettBulletOutOfScreen() && level.bullets[i].getVisible()){
                for (var j = 0; j < level.foods.length; j++) {
                  if( level.foods[j].getVisible() ){
                    if(level.bullets[i].getBounds()[2] >= level.foods[j].getBounds()[0] &&
                       level.bullets[i].getBounds()[2] <= level.foods[j].getBounds()[2] &&
                       ((level.bullets[i].getBounds()[3]) - (level.bullets[i].getImageHeight() / 2)) >= level.foods[j].getBounds()[1] &&
                       ((level.bullets[i].getBounds()[3]) - (level.bullets[i].getImageHeight() / 2)) <= level.foods[j].getBounds()[3]){
                         level.bullets[i].setVisible(false);
                         level.foods[j].setVisible(false);
                         level.foods[j].setMovementVelocityX(5);
                         playerOnePlane.setScoreCount(playerOnePlane.getScoreCount() + PLAYER_SCORE_COUNT);
                    }
                  }
                }
              }
            }
          }
        }
      }






  }



}
