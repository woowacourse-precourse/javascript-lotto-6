import inputView from './views/inputView';
import validator from './utils/validator';
import { ERROR_MESSAGE } from './constants/message';
import converter from './utils/converter';
import { LOTTO, PURCHASE_AMOUNT } from './constants/api';
import outputView from './views/outputView';

class User {
  constructor() {
    this.lottoNumbers = [];
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!validator.isPositiveInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }

    if (!validator.isPositiveInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }

    // 구입 금액이 로또 가격으로 나누어 떨어지지 않는 경우 예외 처리한다.
    if (!validator.isDividedBy(purchaseAmount, LOTTO.PRICE)) {
      throw new Error(ERROR_MESSAGE.NOT_SEPERATED_BY(LOTTO.PRICE));
    }

    if (purchaseAmount > PURCHASE_AMOUNT.MAX) {
      throw new Error(ERROR_MESSAGE.BIGGER_THAN_MAX(PURCHASE_AMOUNT.MAX));
    }
  }

  async setPurchaseAmount() {
    try {
      // 입력
      this.purchaseAmount = await inputView.inputPurchaseAmount();

      // 형변환
      if (!validator.isNumericString(this.purchaseAmount)) {
        throw new Error(ERROR_MESSAGE.NAN);
      }
      this.purchaseAmount = converter.numbericStringToNumber(this.purchaseAmount);
  
      // 검증
      this.validatePurchaseAmount(this.purchaseAmount);
    } catch (e) {
      outputView.printError(e.message);

      return this.setPurchaseAmount();
    }
  }

  buyLottos(numberOfLottos, generator) {
    for (let i = numberOfLottos; i > 0; i -= 1) {
      this.lottoNumbers.push(generator());
    }
  }

  async setWinningNumbers() {
    const winningNumbersString = await inputView.inputWinningNumbers();
    const winningNumbersArray = converter
      .stringToArray(winningNumbersString)
      .map(Number);
    return winningNumbersArray;
  }

  async setBonusNumber() {
    const bonusNumberString = await inputView.inputBonusNumber();

    if (!validator.isNumericString(bonusNumberString)) {
      throw new Error(ERROR_MESSAGE.NAN);
    }

    const bonusNumber = Number(bonusNumberString);

    return bonusNumber;
  }
};

export default User;
