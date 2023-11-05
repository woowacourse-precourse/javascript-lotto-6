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
    this.#model.purchaseLotto(await this.inputPurchasePrice());
    this.#outputView.printPurchasedLotto(this.#model.PurchasedLottoArray);
    this.#outputView.printLineBreak();
    
    const winningNumbersArray = this.inputWinningNumbers();
    const bonusNumber = this.inputBonusNumber(winningNumbersArray);
    this.#model.makeLottoBoard(winningNumbersArray, bonusNumber);
  }

  async inputPurchasePrice(){
    while(true){
      const input = await this.#inputView.purchasePrice();
      try{
        ErrorCheck.purchasePrice(input);
        return Number(input);
      }
      catch(error){
        this.#outputView.errorMessage(error);
      }
    }
  }

  async inputWinningNumbers() {
    while (true) {
      const numbersString = await this.#inputView.winningNumbers();
      try {
        ErrorCheck.lottoNumbersString(numbersString);
        return numbersString.split(',').map(Number);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }

  async inputBonusNumber(winningNumbers) {
    while (true) {
      const numberString = await this.#inputView.bonusNumber();
      try {
        ErrorCheck.bonusNumberString(numberString, winningNumbers);
        return Number(numberString);
      } catch (error) {
        Print.errorMessage(error);
      }
    }
  }
}

export default LottoController;