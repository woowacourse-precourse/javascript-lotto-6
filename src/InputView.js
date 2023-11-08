import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const INPUT_PURCHASING_AMOUNT = '구입금액을 입력해 주세요.\n';
const INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUST_NUMBER = '보너스 번호를 입력해 주세요.';

class InputView {
  constructor() {
    this.inputWinningNumber = [];
    this.playerMoney = 0;
    this.inputBonusNumber = 0;
  }

  saveLottoWinningNumber() {
    const input = this.WinningNumber();
    this.inputWinningNumber = this.stringToNumberArray(input);
    return this.winningNumber;
  }

  async playerWinningNumber() {
    const playerNumber = await Console.readLineAsync(INPUT_WINNING_NUMBER);
    this.inputWinningNumber = this.toNumberArray(playerNumber);
    return this.inputWinningNumber;
  }

  async amountOfMoney() {
    const playerInputMoney = await Console.readLineAsync(INPUT_PURCHASING_AMOUNT);
    this.playerMoney = Number(playerInputMoney);
    this.validateMoneyInput(this.playerMoney);
    return this.playerMoney;
  }

  validateMoneyInput(money) {
    if (money <= 0) {
      throw new Error('[ERROR]금액은 양수여야 합니다.');
    }
    if (money % 1000 !== 0) {
      throw new Error('[ERROR]금액은 1000의 배수여야 합니다.');
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
      throw new Error('[ERROR] 보너스 숫자는 당첨 숫자와 중복 될 수 없습니다.');
    }
    if (bonusNumber > 45) {
      throw new Error('[ERROR]보너스 숫자는 1-45 사이에서 입력해주세요.');
    }
  }

  toNumberArray(inputNumber) {
    return inputNumber.split(',').map(Number);
  }
}

export default InputView;
