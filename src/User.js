import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE, LOTTO_PICK, MIN_PURCHASE_AMOUNT } from './constant.js';
import LottoError from './LottoError.js';

class User {
  async inputPurchaseAmount(){
    this.purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
    this.#validatePurchaseAmount();
    return this.purchaseAmount
  }

  #validatePurchaseAmount(){
    const formattedValue = Number(this.purchaseAmount);
    this.#validateType(formattedValue);
    this.#validateMinAmount(formattedValue);
  }

  #validateType(value){
    if (Number.isNaN(value) || !(Number.isInteger(value))){
      throw new LottoError(ERROR_MESSAGE.WRONG_TYPE);
    }
  }

  #validateMinAmount(amount){
    if (amount % MIN_PURCHASE_AMOUNT >= 1){
      throw new LottoError(ERROR_MESSAGE.MIN_AMOUNT);
    }
  }

  async inputWinNumber(){
    this.winNumber = await Console.readLineAsync(INPUT_MESSAGE.WIN_NUMBER);
    this.#validateWinNumber(this.winNumber);
    const formattedList = this.winNumber.split(',').map(item => Number(item));
    return formattedList;
  }

  #validateWinNumber(){
    this.#validateComma(this.winNumber);
    const formattedList = this.winNumber.split(",").map(item => Number(item));
    formattedList.forEach((element) => this.#validateType(element));
    this.#validateLength(formattedList);
    this.#validateRange(formattedList);
    this.#validateOverlap(formattedList);
  }

  #validateComma(inputValue){
    if (inputValue.startsWith(',') || inputValue.endsWith(',')) {
      throw new LottoError(ERROR_MESSAGE.WRONG_COMMA);
    }
  }

  #validateLength(targetArray){
    if (targetArray.length !== LOTTO_PICK.DRAW_UNITS){
      throw new LottoError(ERROR_MESSAGE.WRONG_LENGTH);
    }
  }

  #validateRange(targetArray){
    targetArray.forEach((number) => {
      if (number < LOTTO_PICK.MIN_NUMBER || number > LOTTO_PICK.MAX_NUMBER){
        throw new LottoError(ERROR_MESSAGE.WRONG_RANGE);
      }
    })
  }
  #validateOverlap(targetArray){
    const targetArraySet = new Set(targetArray);
    if (targetArraySet.size !== targetArray.length){
      throw new LottoError(ERROR_MESSAGE.OVERLAPPED_VALUE); 
    }
  }
}

export default User;