import ErrorCheck from "./utils/ErrorCheck.js";

import CONSTANTS from "../../constants/CONSTANTS.js";

const {
  LOTTO_PRICE,
  FIRST_PLACE_WINNINGS,
  SECOND_PLACE_WINNINGS,
  THIRD_PLACE_WINNINGS,
  FOURTH_PLACE_WINNINGS,
  FIFTH_PLACE_WINNINGS,
} = CONSTANTS;


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
    const purchasePrice = await this.inputPurchasePrice();
    this.#model.purchaseLotto(purchasePrice);
    this.#outputView.printPurchasedLotto(this.#model.PurchasedLottoArray);
    this.#outputView.printLineBreak();
    
    const winningNumbersArray = this.inputWinningNumbers();
    const bonusNumber = this.inputBonusNumber(winningNumbersArray);
    this.#model.makeLottoBoard(winningNumbersArray, bonusNumber);
    const lottoResult = this.#model.getLottoResult();

    this.#outputView.printLineBreak();
    this.#outputView.printLottoResult(lottoResult);

    this.#outputView.printLottoReturnRatio(
      this.getLottoReturnRatio(lottoResult, purchasePrice/LOTTO_PRICE)
    );
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

  getLottoReturnRatio(resultArray, numberOfLotto) {
    return (
      (((resultArray[6] + resultArray[7]) * FIFTH_PLACE_WINNINGS +
        (resultArray[8] + resultArray[9]) * FOURTH_PLACE_WINNINGS +
        resultArray[10] * THIRD_PLACE_WINNINGS +
        resultArray[11] * SECOND_PLACE_WINNINGS +
        resultArray[12] * FIRST_PLACE_WINNINGS) /
        (numberOfLotto * LOTTO_PRICE)) *
      100
    );
  }
}

export default LottoController;