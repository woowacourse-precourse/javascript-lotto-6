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
    this.#outputView.printPurchasedLotto( this.#model.PurchasedLottoArray );
    this.#outputView.printLineBreak();
  }

  async getPurchasePrice(){
    while(true){
      const input = this.#inputView.purchasePrice();
      try{
        ErrorCheck.purchasePrice(input);
        return Number(input);
      }
      catch(error){
        this.#outputView.errorMessage(error);
      }
    }
  }

  async winningNumbersArray() {
    while (true) {
      const numbersString = this.#inputView.winningNumbers();
      try {
        ErrorCheck.lottoNumbersString(numbersString);
        return numbersString.split(',').map(Number);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }
}

export default LottoController;