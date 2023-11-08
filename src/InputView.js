import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const INPUT_PURCHASING_AMOUNT = '구입금액을 입력해 주세요.\n';
const INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUST_NUMBER = '보너스 번호를 입력해 주세요.\n';
const INPUT_ERROR_MESSAGES = {
  NON_POSITIVE_AMOUNT: '[ERROR] 금액은 양수여야 합니다.',
  AMOUNT_NOT_MULTIPLE_OF_1000: '[ERROR] 금액은 1000의 배수여야 합니다.',
  DUPLICATE_BONUS_NUMBER: '[ERROR] 보너스 숫자는 당첨 숫자와 중복 될 수 없습니다.',
  INVALID_BONUS_NUMBER_RANGE: '[ERROR] 보너스 숫자는 1-45 사이에서 입력해주세요.',
  INVALID_WINNING_NUMBERS: '[ERROR] 쉼표는 중복되거나 시작 또는 끝에 있어서는 안됩니다.',
  NOT_ALLOW_BLANK: '[ERROR]숫자는 쉼표로 구분해 주세요.',
  ONLY_NUMBER: '[ERROR]보너스 숫자는 하나만 입력 해 주세요.',

};

class InputView {
  constructor() {
    this.inputWinningNumber = [];
    this.playerMoney = 0;
    this.inputBonusNumber = 0;
  }

  async playerWinningNumber() {
    const playerNumber = await Console.readLineAsync(INPUT_WINNING_NUMBER);
    this.validateWinningNumber(playerNumber);
    this.inputWinningNumber = this.toNumberArray(playerNumber);
    Console.print(this.inputWinningNumber);
    return new Lotto(this.inputWinningNumber);
  }

  validateWinningNumber(playerInputNumbers) {
    if (playerInputNumbers.includes(',,') || playerInputNumbers.startsWith(',') || playerInputNumbers.endsWith(',')) {
      throw new Error(INPUT_ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
    }
    if (playerInputNumbers.includes(' ')) {
      throw new Error(INPUT_ERROR_MESSAGES.NOT_ALLOW_BLANK);
    }
  }

  async amountOfMoney() {
    const playerInputMoney = await Console.readLineAsync(INPUT_PURCHASING_AMOUNT);
    this.playerMoney = Number(playerInputMoney);
    this.validateMoneyInput(this.playerMoney);
    return this.playerMoney;
  }

  validateMoneyInput(money) {
    if (money <= 0) {
      throw new Error(INPUT_ERROR_MESSAGES.NON_POSITIVE_AMOUNT);
    }
    if (money % 1000 !== 0) {
      throw new Error(INPUT_ERROR_MESSAGES.AMOUNT_NOT_MULTIPLE_OF_1000);
    }
  }

  async playerBonusNumber() {
    const playerInputBonus = await Console.readLineAsync(INPUT_BONUST_NUMBER);
    this.inputBonusNumber = Number(playerInputBonus);
    this.validateBonusNumber(this.inputBonusNumber, this.inputWinningNumber);
    return this.bonusNumber;
  }

  validateBonusNumber(bonusNumber, sixNumber) {
    if (sixNumber.includes(bonusNumber)) {
      throw new Error(INPUT_ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
    if (bonusNumber > 45) {
      throw new Error(INPUT_ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
    if (bonusNumber.legnth > 2) {
      throw new Error(INPUT_ERROR_MESSAGES.ONLY_NUMBER);
    }
  }

  toNumberArray(inputNumber) {
    return inputNumber.split(',').map(Number);
  }
}

export default InputView;
