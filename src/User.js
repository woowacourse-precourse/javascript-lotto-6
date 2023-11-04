import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE, MIN_PURCHASE_AMOUNT } from './constant.js';
import LottoError from './LottoError.js';

class User {
  async inputPurchaseAmount(){
    this.purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
    this.#validatePurchaseAmount();
    return this.purchaseAmount
  }

  #validatePurchaseAmount(){
    const formattedValue = Number(this.purchaseAmount);
    if (Number.isNaN(formattedValue) || !Number.isInteger(formattedValue)){
      throw new LottoError(ERROR_MESSAGE.WRONG_TYPE);
    }
    if (formattedValue % MIN_PURCHASE_AMOUNT >= 1){
      throw new LottoError(ERROR_MESSAGE.MIN_AMOUNT);
    }
  }
}

export default User;