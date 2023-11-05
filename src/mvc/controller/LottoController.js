class LottoController{
  #model;
  #inputViewer;
  #outputViewer;

  constructor(model,inputViewer,outputViewer){
    this.#model=model;
    this.#inputViewer=inputViewer;
    this.#outputViewer=outputViewer;
  }

}

export default LottoController;