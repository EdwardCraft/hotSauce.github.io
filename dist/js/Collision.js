
class Collision{


  constructor(){

  }



  checkCollisions(){

      if(playerOnePlane != undefined){
          /*console.log("PYP: " + (playerOnePlane.getBounds()[3] - 50 ) + " B Y: " + hotSauceItem.getBounds()[1]
                      + " B Y + H :" + hotSauceItem.getBounds()[3] );*/
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

  }



}
