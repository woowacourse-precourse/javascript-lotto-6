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
    // 구매금액이 1000원 단위인지 확인
    if (formattedValue % MIN_PURCHASE_AMOUNT >= 1){
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
    // 쉼표 검증
    if (this.winNumber.startsWith(',') || this.winNumber.endsWith(',')) {
      throw new LottoError(ERROR_MESSAGE.WRONG_COMMA);
    }
    const formattedList = this.winNumber.split(",").map(item => Number(item));
    console.log(formattedList);
    
    // 타입 검증 (문자열, 정수) 
    formattedList.forEach((element) => {
      if (Number.isNaN(element) || !(Number.isInteger(element))) {
        throw new LottoError(ERROR_MESSAGE.WRONG_TYPE);
      }
    })

    // 번호 갯수(6개) 검증
    if (formattedList.length !== 6){
      throw new LottoError(ERROR_MESSAGE.WRONG_LENGTH);
    }

    // 1-45 사이인지 검증
    formattedList.forEach((num) => {
      if (num < 1 || num > 45){
        throw new LottoError(ERROR_MESSAGE.WRONG_RANGE);
      }
    })

    // 리스트 내 중복 숫자 여부 검증
    const winNumberSet = new Set(formattedList);
    console.log(winNumberSet)
    if (winNumberSet.size !== formattedList.length){
      throw new LottoError(ERROR_MESSAGE.OVERLAPPED_VALUE);
    } 
  }
}

export default User;