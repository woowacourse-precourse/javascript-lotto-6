import { Console } from '@woowacourse/mission-utils';
import { ERROR } from './ErrorText.js';

export default class input  {
  static async inputPurchaseAmount() {
        let purchaseAmount;
        while (1) {
        try {
            purchaseAmount = parseInt(await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
            if (this.isInvalidPurchaseAmount(purchaseAmount)) {
            throw new Error(ERROR.PURCHASE_AMOUNT);
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return purchaseAmount;
  }

  static isInvalidPurchaseAmount(purchaseAmount) {
    return purchaseAmount % 1000 !== 0 || isNaN(purchaseAmount);
  }


  static async inputWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        winningNumbers = await this.readWinningNumbers();
        this.validateWinningNumbers(winningNumbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumbers;
  }
  
  static async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return winningNumbers.split(',').map(Number);
  }
  
  static validateWinningNumbers(winningNumbersMap) {
    if (!this.validateNumbers(winningNumbersMap)) {
      throw new Error(ERROR.LOTTO_NUMBER);
    }
    if (winningNumbersMap.length !== 6) {
      throw new Error(ERROR.LENGTH);
    }
    const uniqueNumbers = [...new Set(winningNumbersMap)]; // 중복 제거
    if (uniqueNumbers.length !== 6) {
      throw new Error(ERROR.DUPLICATION);
    }
  }
  


  static async inputBonusNumber() {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await this.readBonusNumber();
        this.validateBonusNumber(bonusNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }
  
  static async readBonusNumber() {
    return parseInt(await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"));
  }
  
  static validateBonusNumber(bonusNumber) {
    if (!this.validateNumber(bonusNumber)) {
      throw new Error(ERROR.BONUS_NUMBER);
    }
  }
  


  static validateNumbers(numbers) {
    return numbers.every(this.validateNumber);
  }

  static validateNumber(number) {
    return number >= 1 && number <= 45;
  }
}
