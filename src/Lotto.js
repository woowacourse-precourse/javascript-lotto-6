import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validateWinningNumber(numbers);
  }

  #validateWinningNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] 로또 번호는 6개여야 합니다.`);
    } else if (new Set(numbers).size != numbers.length) {
      throw new Error('[ERROR] 서로 다른 숫자를 입력해야 합니다.');
    }
    this.#compareElement(numbers);
  }

  #validateBonusNumber(winningNumber, bonusNumber) {
    const validBonusNum = winningNumber.concat(bonusNumber);
    if (validBonusNum.length !== 7) {
      throw new Error(`[ERROR] 보너스 번호는 1개여야 합니다.`);
    } else if (new Set(validBonusNum).size != validBonusNum.length) {
      throw new Error('[ERROR] 당첨 번호와 다른 숫자를 입력해야 합니다.');
    }
    this.#compareElement(validBonusNum);
  }

  #compareElement(numbers) {
    numbers.forEach(el => {
      if ((el < 1) || (el > 45)) {
        throw new Error("[ERROR] 1부터 45 사이의 숫자만 가능합니다.");
      } else if(isNaN(el)) {
        throw new Error("[ERROR] 로또 번호는 숫자 형식으로 입력해 주세요.");
      }
    }) 
  }

  #validatePurchase(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    } else if (Number(purchaseAmount) % 1000 !== 0) {
      throw new Error("[ERROR] 구매 단위는 1000원 입니다.");
    }
  }

  async inputPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync('구입급액을 입력해 주세요. \n');
    this.#validatePurchase(purchaseAmount);
    const ticketAmount = Number(purchaseAmount) / 1000;
    return ticketAmount;
  }
  
  async inputWinningNumber() {
    const stringWinningNumber = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    let winningNumber = stringWinningNumber.split(',').map(Number);
    if (winningNumber.at(-1) === 0) {
      winningNumber.pop();
    }
    this.#validateWinningNumber(winningNumber);
    return winningNumber;
  }

  async inputBonusNumber(winningNumber) {
    const stringBonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(stringBonusNumber);
    this.#validateBonusNumber(winningNumber, bonusNumber);
    return bonusNumber;
  }
}

export default Lotto;