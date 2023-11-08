import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE, LOTTO_PICK, MIN_PURCHASE_AMOUNT } from './constant.js';
import LottoError from './LottoError.js';

class User {
  async inputPurchaseAmount(){
    try {
      this.purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
      this.#validatePurchaseAmount();
    } catch (error) {
      Console.print(error.message)
      await this.inputPurchaseAmount();
    }
    return this.purchaseAmount
  }

  #validatePurchaseAmount(){
    this.#validateEmpty(this.purchaseAmount)
    const formattedValue = Number(this.purchaseAmount);
    this.#validateType(formattedValue);
    this.#validateMinAmount(formattedValue);
  }

  #validateEmpty(inputValue){
    if (inputValue === ""){
      throw new LottoError(ERROR_MESSAGE.WRONG_TYPE);
    }
  }

  #validateType(value){
    if (Number.isNaN(value) || !(Number.isInteger(value) || value < 0)){
      throw new LottoError(ERROR_MESSAGE.WRONG_TYPE);
    }
  }

  #validateMinAmount(amount){
    if (amount % MIN_PURCHASE_AMOUNT >= 1){
      throw new LottoError(ERROR_MESSAGE.MIN_AMOUNT);
    }
  }

  async inputWinNumbers(){
    try {
      this.winNumbers = await Console.readLineAsync(INPUT_MESSAGE.WIN_NUMBER);
      this.#validateWinNumber(this.winNumbers);
    } catch (error) {
      Console.print(error.message);
      await this.inputWinNumbers();
    }
    return this.winNumbers.split(',').map(item => Number(item));
  }

  #validateWinNumber(){
    this.#validateComma(this.winNumbers);
    const formattedList = this.winNumbers.split(",").map(item => Number(item));
    formattedList.forEach((element) => this.#validateType(element));
    this.#validateLength(formattedList);
    formattedList.forEach((number) => this.#validateRange(number));
    this.#validateOverlap(formattedList);
  }

  #validateComma(inputValue){
    if (inputValue.startsWith(",") || inputValue.endsWith(",")) {
      throw new LottoError(ERROR_MESSAGE.WRONG_COMMA);
    }
  }

  #validateLength(targetArray){
    if (targetArray.length !== LOTTO_PICK.DRAW_UNITS){
      throw new LottoError(ERROR_MESSAGE.WRONG_LENGTH);
    }
  }

  #validateRange(value){
    if (value < LOTTO_PICK.MIN_NUMBER || value > LOTTO_PICK.MAX_NUMBER){
      throw new LottoError(ERROR_MESSAGE.WRONG_RANGE);
    }
  }
  #validateOverlap(targetArray){
    const targetArrayDuplicate = new Set(targetArray);
    if (targetArrayDuplicate.size !== targetArray.length){
      throw new LottoError(ERROR_MESSAGE.OVERLAPPED_VALUE); 
    }
  }

  async inputBonusNumber(winNumbers){
    try {
      this.bonusNumber = Number(await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER));
      this.#validateBonusNumber(this.bonusNumber, winNumbers);
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusNumber(winNumbers);
    }
    return this.bonusNumber;
  }

  #validateBonusNumber(inputBonus, winNumbers){
    this.#validateType(inputBonus);
    this.#validateRange(inputBonus);
    this.#isInWinNumbers(inputBonus, winNumbers);
  }

  #isInWinNumbers(inputBonus, winNumbers){
    if (winNumbers.includes(inputBonus)){
      throw new LottoError(ERROR_MESSAGE.OVERLAPPED_VALUE);
    }
  }
}

export default User;