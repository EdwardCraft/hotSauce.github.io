class SelectScreen{

  constructor() {

  }


  update(delta){
    if(blueSelect !== undefined)blueSelect.updateSelectedPlayer(delta);
    if(redSelect !== undefined)redSelect.updateSelectedPlayer(delta);
  }

  render(canvas , ctx){
      if(blueSelect !== undefined)blueSelect.renderSelect(canvas, canvasctx);
      if(redSelect !== undefined)redSelect.renderSelect(canvas, canvasctx);
  }








}
