import ErrorCheck from './utils/ErrorCheck.js';

import CONSTANTS from '../../constants/CONSTANTS.js';

const {
  LOTTO_PRICE,
  FIRST_PLACE_WINNINGS,
  SECOND_PLACE_WINNINGS,
  THIRD_PLACE_WINNINGS,
  FOURTH_PLACE_WINNINGS,
  FIFTH_PLACE_WINNINGS,
} = CONSTANTS;

class LottoController {
  #model;
  #inputView;
  #outputView;

  constructor(model, inputView, outputView) {
    this.#model = model;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async play() {
    await this.#purchaseLottos();
    this.#printPurchasedLottos();

    await this.#setLottoBoard();
    const lottoResult = this.#model.getLottoResult();

    this.#printLottoResult(lottoResult);
    this.#printLottoReturnRatio(lottoResult);
  }

  async #purchaseLottos() {
    const purchasePrice = await this.#inputPurchasePrice();
    this.#model.purchaseLottos(purchasePrice / LOTTO_PRICE);
  }

  async #printPurchasedLottos() {
    this.#outputView.printPurchasedLotto(this.#model.getPurchasedLottoArray());
    this.#outputView.printLineBreak();
  }

  async #setLottoBoard() {
    const winningNumbersArray = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber(winningNumbersArray);
    this.#model.makeLottoBoard(winningNumbersArray, bonusNumber);
  }

  async #printLottoResult(lottoResult) {
    this.#outputView.printLineBreak();
    this.#outputView.printLottoResult(lottoResult);
  }

  async #inputPurchasePrice() {
    while (true) {
      const input = await this.#inputView.purchasePrice();
      try {
        ErrorCheck.purchasePrice(input, LOTTO_PRICE);
        return Number(input);
      } catch (error) {
        this.#outputView.printErrorMessage(error);
      }
    }
  }

  async #inputWinningNumbers() {
    while (true) {
      const numbersString = await this.#inputView.winningNumbers();
      try {
        ErrorCheck.lottoNumbersString(numbersString);
        return numbersString.split(',').map(Number);
      } catch (error) {
        this.#outputView.printErrorMessage(error);
      }
    }
  }

  async #inputBonusNumber(winningNumbers) {
    while (true) {
      const numberString = await this.#inputView.bonusNumber();
      try {
        ErrorCheck.bonusNumberString(numberString, winningNumbers);
        return Number(numberString);
      } catch (error) {
        this.#outputView.printErrorMessage(error);
      }
    }
  }

  #printLottoReturnRatio(lottoResult) {
    const returnRatio = this.#getLottoReturnRatio(
      lottoResult,
      this.#model.getNumberOfLottos()
    );

    this.#outputView.printLottoReturnRatio(returnRatio);
  }

  #getLottoReturnRatio(resultArray, numberOfLotto) {
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
