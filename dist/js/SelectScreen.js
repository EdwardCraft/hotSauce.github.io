class SelectScreen{

  constructor() {
    this.mouseX = 0;
    this.mouseY = 0;
    this.isOverRed = false;
    this.isOverBlue = false;
    this.stopMouseOver = false;
  }


  update(delta){
    if(blueSelect !== undefined)blueSelect.updateSelectedPlayer(delta);
    if(redSelect !== undefined)redSelect.updateSelectedPlayer(delta);
    if(this.stopMouseOver != true)this.checkForMouseOverScreen();
    if(this.stopMouseOver != true)this.checkForMouseOverScreenRed();
  }

  render(canvas , ctx){
      if(blueSelect !== undefined)blueSelect.renderSelect(canvas, canvasctx);
      if(redSelect !== undefined)redSelect.renderSelect(canvas, canvasctx);
  }



  setMouseCoordinates(x, y){
    this.mouseX = x;
    this.mouseY = y;

  }

  checkForMouseOverScreen(){


    if(blueSelect !== undefined){
      if(   (this.mouseX >= (blueSelect.getBounds()[0] + 30)) &&
            (this.mouseX <=  (blueSelect.getBounds()[0] + blueSelect.getBounds()[2]) - 30) &&
            (this.mouseY >= (blueSelect.getBounds()[1] + 30)) &&
            (this.mouseY <=  (blueSelect.getBounds()[1] + blueSelect.getBounds()[3]) - 35)){
                this.isOverBlue = true;
                blueSelect.setCurrentImg(this.isOverBlue, false);
                //console.log("xCoordinates: " +   this.mouseX + " = " + "yCoordinates: " +   this.mouseY);
      }else{
        this.isOverBlue = false;
        blueSelect.setCurrentImg(this.isOverBlue, false);
      }
    }


    // if(blueSelect != undefined && redSelect != undefined){
    //   if(this.isOverBlue == false && this.isOverRed == false){
    //     blueSelect.setCurrentImg(this.isOverBlue, true);
    //     redSelect.setCurrentImg(this.isOverRed, true);
    //   }
    // }


  }

  checkForMouseOverScreenRed(){
    if(redSelect !== undefined){
      if(   (this.mouseX >= (redSelect.getBounds()[0] + 30)) &&
            (this.mouseX <=  (redSelect.getBounds()[0] + redSelect.getBounds()[2]) - 30) &&
            (this.mouseY >= (redSelect.getBounds()[1] + 30)) &&
            (this.mouseY <=  (redSelect.getBounds()[1] + redSelect.getBounds()[3]) - 35)){
                this.isOverRed = true;
                redSelect.setCurrentImg(this.isOverRed, false);
              //  console.log("xCoordinates: " +   this.mouseX + " = " + "yCoordinates: " +   this.mouseY);
      }else{
        this.isOverRed = false;
        redSelect.setCurrentImg(this.isOverRed, false);
      }
    }
  }


  getIsOverRed(){
    return this.isOverRed;
  }

  getIsOverBlue(){
    return this.isOverBlue;
  }

  setStopMouseOver(value){
    this.stopMouseOver = value;
  }


}
