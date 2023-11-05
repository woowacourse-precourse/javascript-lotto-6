import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validateWinningNumber(numbers, length) {
    if (isNaN(numbers.join(''))) {
      throw new Error("[ERROR] 로또 번호는 숫자 형식으로 입력해 주세요.");
    } else if (numbers.length !== length) {
      throw new Error(`[ERROR] 로또 번호는 ${length}개여야 합니다.`);
    } else if (new Set(numbers).size != numbers.length) {
      throw new Error('[ERROR] 서로 다른 숫자를 입력해야 합니다.');
    }
    this.#compareElement(numbers);
  }

  #compareElement(numbers) {
    numbers.forEach(el => {
      if ((el < 1) || (el > 45)) {
        throw new Error("[ERROR] 1부터 45 사이의 숫자만 가능합니다.");
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
    const stringWinningNumber = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    let winningNumber = stringWinningNumber.split(',').map(Number);
    if (winningNumber.at(-1) === 0) {
      winningNumber.pop();
    }
    this.#validateWinningNumber(winningNumber, 6);
    const stringBonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(stringBonusNumber);
    console.log('bonusNumber', bonusNumber)
    winningNumber.push(bonusNumber);
    console.log('winningNumber', winningNumber)
    this.#validateWinningNumber(winningNumber, 7);
    return winningNumber;
  }
}

export default Lotto;
