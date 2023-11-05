import ErrorCheck from "./utils/ErrorCheck.js";

class LottoController{
  #model;
  #inputView;
  #outputView;

  constructor(model,inputView,outputView){
    this.#model = model;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async play(){
    this.#model.setPurchasedLottoArray( await this.getPurchasePrice() );
  }

  async getPurchasePrice(){
    while(true){
      const input=this.#inputView.purchasePrice();
      try{
        ErrorCheck.purchasePrice(input);
        return input;
      }
      catch(error){
        this.#outputView.errorMessage(error);
      }
    }
  }
}

export default LottoController;