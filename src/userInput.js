import { Console } from '@woowacourse/mission-utils';

export default class input  {
  static async inputPurchaseAmount() {
        let purchaseAmount;
        while (1) {
        try {
            purchaseAmount = parseInt(await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
            if (this.isInvalidPurchaseAmount(purchaseAmount)) {
            throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
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
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbersMap.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    const uniqueNumbers = [...new Set(winningNumbersMap)]; // 중복 제거
    if (uniqueNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
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
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
  


  static validateNumbers(numbers) {
    return numbers.every(this.validateNumber);
  }

  static validateNumber(number) {
    return number >= 1 && number <= 45;
  }
}
