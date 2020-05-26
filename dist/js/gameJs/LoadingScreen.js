
class LoadingScreen{

    constructor(){
      this.timer = 0;
      this.seconds = 0;
      this.offetWidth = 0;
      this.offsetHeight = 0;
      this.positionX = 0;
      this.positionY = 0;
      this.showImg = true;
      this.showPinkColor = true;
      this.textAlpha = 1;
      this.stroke = 550;
    }


    update(delta){

      if(this.loadingAssets(delta)){
        this.exitScreen(delta);

      }else{
        this.updateTimer(delta);
      }



    }


     updateTimer(delta){
       if(this.seconds > 3 ){
         this.timer =  0;
         this.seconds =  0;
       }else{
         this.timer +=   0.1 * delta;
         this.seconds =   this.timer / 100;
       }


     }

     exitScreen(delta){


       if(!this.showPinkColor){
          if(this.stroke > 30){
            this.stroke -=  0.5 * delta;
          }

    
       }

       if(this.offsetHeight + 15 >= GAME_WORLD_HEIGHT &&   this.showPinkColor){
         this.showPinkColor = false;
       }else if(this.showPinkColor){
         this.timer +=   30 * delta;
         this.textAlpha -= 0.0005 * delta;
         this.seconds =   this.timer / 100;
         this.offetWidth += this.seconds;
         this.offsetHeight += this.seconds;

       }


     }

    loadingAssets(delta){

      if(backgroundLoaded && cloudLoaded && planeLoaded
          && hotSouceImgLoaded &&
          isloadedBlueSelect && redSelectLoaded  && planeLoaded && food_img_1Loaded &&
          food_img_2Loaded && food_img_3Loaded && food_img_4Loaded
          && food_img_5Loaded && selectPlayerRedFrames !== undefined &&
          selectPlayerBlueFrames !== undefined && impactHotSouceFramesLoaded ){
            //if the asset are loaded we create the objet Level
            if(level === undefined){
              level = new Level();
            }


            this.timer =  0;
            this.seconds =  0;
            this.showImg = false;
            return true;
      }


      return false;

    }

    render(canvas, canvasctx){



      canvasctx.globalAlpha = 1;
      canvasctx.lineWidth = this.stroke;
      canvasctx.strokeStyle = "white";
      canvasctx.strokeRect( 0, 0, GAME_WORLD_WIDTH , GAME_WORLD_HEIGHT );

      if(this.showPinkColor){
        canvasctx.fillStyle = "#FFA6EB";
        canvasctx.fillRect( this.positionX + 15 + this.offetWidth / 2, this.positionY + 15 + this.offsetHeight / 2, (GAME_WORLD_WIDTH - 30) - this.offetWidth, (GAME_WORLD_HEIGHT - 30) - this.offsetHeight);

        canvasctx.globalAlpha = this.textAlpha;
        canvasctx.font = 100 +"px" + " Passion One";
        canvasctx.strokeStyle = 'white';
        canvasctx.lineWidth = 8;
        canvasctx.strokeText("LOADING GAME" ,
                                (GAME_WORLD_WIDTH /2) - 270, (GAME_WORLD_HEIGHT / 2) + 20);
        canvasctx.fillStyle = '#FFA4EE';
        canvasctx.fillText("LOADING GAME" ,
                               (GAME_WORLD_WIDTH /2)  - 270, (GAME_WORLD_HEIGHT / 2) + 20);

      }








      if(  this.showImg ){
        switch (parseInt(this.seconds, 10)) {
          case 0:
          if(food_img_1 !== undefined){
            canvasctx.drawImage(
              food_img_1,
              (GAME_WORLD_WIDTH / 2) - 100,
              (GAME_WORLD_HEIGHT / 2)  + 50,
              150,
              150
              );
          }
            break;
          case 1:
          if(food_img_2 !== undefined){
            canvasctx.drawImage(
              food_img_2,
              (GAME_WORLD_WIDTH / 2) - 100,
              (GAME_WORLD_HEIGHT / 2)  + 50,
              150,
              150
              );
          }
              break;
          case 2:
          if(food_img_3 !== undefined){
            canvasctx.drawImage(
              food_img_3,
              (GAME_WORLD_WIDTH / 2) - 100,
              (GAME_WORLD_HEIGHT / 2)  + 50,
              150,
              150
              );
          }
              break;
          default:

            break

        }
      }











    }




}
