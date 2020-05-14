
class HotSouceBanner{



  constructor(){

    this.positionXBanner = HOT_SOUCE_BANNER_POSITION_X;
    this.positionYBanner = HOT_SOUCE_BANNER_POSITION_Y;
    this.widthBanner = HOT_SOUCE_BANNER_WIDTH;
    this.heightBanner =  HOT_SOUCE_BANNER_HEIGHT;
    this.widthBannerLimit = HOT_SOUCE_BANNER_WIDTH_LIMIT;
    this.widthBannerUpdateVelocity = HOT_SOUCE_BANNER_WIDTH_UPDATE_VELOCITY;
    this.widthBannerLimitReach = false;

    this.textOverLayPositionX = HOT_SOUCE_TEXT_POSITION_X;
    this.textOverLayPositionY = HOT_SOUCE_TEXT_POSITION_Y;
    this.textOverLayWidth = HOT_SOUCE_TEXT_WIDTH;
    this.textOverLayHeight = HOT_SOUCE_TEXT_HEIGHT;
    this.textOverLayWidthLimit = HOT_SOUCE_TEXT_RESIZE_WIDTH_LIMIT;
    this.textOverLayHeightLimit = HOT_SOUCE_TEXT_RESIZE_HEIGHT_LIMIT;
    this.textOverLayResizevelocity = HOT_SOUCE_TEXT_RESIZE_VELOCITY;
    this.textOverLayResizeReach = false;

    this.bottleImgPositionX = HOT_SOUCE_BOTTLE_IMG_POSITION_X;
    this.bottleImgPositionY = HOT_SOUCE_BOTTLE_IMG_POSITION_Y;
    this.bottleImgWidth =  HOT_SOUCE_BOTTLE_IMG_WIDHT;
    this.bottleImgHeight = HOT_SOUCE_BOTTLE_IMG_HEIGHT;
    this.bottleImgWidthLimit = HOT_SOUCE_BOTTLE_IMG_RESIZE_WIDTH_LIMIT;
    this.bottleImgHeightLimit = HOT_SOUCE_BOTTLE_IMG_RESIZE_HEIGHT_LIMIT;
    this.bottleImgResizeVelocity = HOT_SOUCE_BOTTLE_IMG_RESIZE_VELOCITY;

    this.explosionImgPositionX = EXPLOSION_IMG_POSITION_X;
    this.explosionImgPositionY = EXPLOSION_IMG_POSITION_Y;
    this.explosionImgWidth = EXPLOSION_IMG_WIDTH;
    this.explosionImgHeight = EXPLOSION_IMG_HEIGHT;
    this.explosionImgWidthLimit = EXPLOSION_IMG_RESIZE_WIDTH_LIMIT;
    this.explosionImgHeightLimit = EXPLOSION_IMG_RESIZE_HEIGHT_LIMIT;
    this.explosionImgResizeVelocity = EXPLOSION_IMG_RESIZE_VELOCITY;


  }

  update(delta){


    this.resiceBannerWidth(delta);
    this.resizeTextOverLay(delta);
    this.resizeBottleImg(delta);
    this.resizeExplosion(delta);
  }

  resiceBannerWidth(delta){
    if(impactHotSouceFramesLoaded){
        if(this.widthBanner >= -this.widthBannerLimit){
          this.widthBanner -= delta * this.widthBannerUpdateVelocity;
          console.log(  this.widthBanner );
        }else{
          this.widthBannerLimitReach = true;
        }
    }
  }

  resizeTextOverLay(delta){
    if(this.widthBannerLimitReach){
      if((this.textOverLayWidth <= this.textOverLayWidthLimit) && (this.textOverLayHeight <= this.textOverLayHeightLimit) ){
        this.textOverLayWidth += delta * this.textOverLayResizevelocity;
        this.textOverLayHeight += delta * this.textOverLayResizevelocity;
        this.textOverLayPositionX -=  (delta * this.textOverLayResizevelocity) / 2;
        this.textOverLayPositionY -= (delta * this.textOverLayResizevelocity) / 2;
      }else{
          this.textOverLayResizeReach = true;
      }

    }
  }

  resizeBottleImg(delta){
    if(hotSouceImgLoaded){
      if(this.widthBannerLimitReach){
        if((this.bottleImgWidth <= this.bottleImgWidthLimit) && (this.bottleImgHeight <= this.bottleImgHeightLimit)){
          this.bottleImgWidth += delta * this.bottleImgResizeVelocity;
          this.bottleImgHeight += delta * this.bottleImgResizeVelocity;
          this.bottleImgPositionX -= (delta * this.bottleImgResizeVelocity) / 2;
          this.bottleImgPositionY -= (delta * this.bottleImgResizeVelocity) / 2;
        }
      }
    }
  }

  resizeExplosion(delta){
    if(impactHotSouceFramesLoaded){
      if(this.textOverLayResizeReach){
        if((this.explosionImgWidth <= this.explosionImgWidthLimit) ){
          this.explosionImgWidth += delta * (this.explosionImgResizeVelocity + 0.7);

          this.explosionImgPositionX -= (delta * (this.explosionImgResizeVelocity  + 0.7)) / 2;

        }

        if((this.explosionImgHeight <= this.explosionImgHeightLimit)){
          this.explosionImgHeight += delta * this.explosionImgResizeVelocity;
          this.explosionImgPositionY -= (delta * this.explosionImgResizeVelocity) / 2;

        }
      }
    }
  }


  render(canvas, canvasctx){


    this.renderBanner(canvas , canvasctx );
    if(this.textOverLayResizeReach)this.renderExplosionImg(canvas , canvasctx);
    if(this.widthBannerLimitReach)this.renderText(canvas , canvasctx );
    if(this.widthBannerLimitReach)this.renderBottleImg(canvas , canvasctx);

  }

  renderBanner(canvas , ctx ){
    if(impactHotSouceFramesLoaded){
      ctx.drawImage(
  			impactHotSouceFrames[0],
  			this.positionXBanner,
  			this.positionYBanner,
        this.widthBanner,
        this.heightBanner
  			);
    }
	}

  renderText(canvas , ctx ){
    if(impactHotSouceFramesLoaded){
      ctx.drawImage(
  			impactHotSouceFrames[2],
  		  this.textOverLayPositionX,
  			this.textOverLayPositionY,
        this.textOverLayWidth,
        this.textOverLayHeight
  			);
    }
  }

  renderBottleImg(canvas , ctx){
    if(hotSouceImgLoaded){
      ctx.drawImage(
  			hotSauceImg,
  		  this.bottleImgPositionX,
  			this.bottleImgPositionY,
        this.bottleImgWidth,
        this.bottleImgHeight
  			);
    }
  }

  renderExplosionImg(canvas , ctx){

    if(impactHotSouceFramesLoaded){
      ctx.drawImage(
  			impactHotSouceFrames[1],
  		  this.explosionImgPositionX,
  			this.explosionImgPositionY,
        this.explosionImgWidth,
        this.explosionImgHeight
  			);
    }


  }




}
