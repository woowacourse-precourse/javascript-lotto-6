import { Console } from '@woowacourse/mission-utils';

const INPUT_PURCHASING_AMOUNT = '구입금액을 입력해 주세요.\n';
const INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUST_NUMBER = '보너스 번호를 입력해 주세요.\n';

class InputView {
  constructor() {
    this.winningNumber = [];
    this.playerMoney = 0;
    this.bonusNumber = 0;
  }

  saveLottoWinningNumber() {
    const input = this.inputWinningNumber();
    this.winningNumber = this.stringToNumberArray(input);
    return this.winningNumber;
  }

  async inputWinningNumber() {
    const playerWinningNumber = await Console.readLineAsync(INPUT_WINNING_NUMBER);

    return playerWinningNumber;
  }

  async getPlayerInputMoney() {
    while (true) {
      try {
        const playerInputMoney = await Console.readLineAsync(INPUT_PURCHASING_AMOUNT);
        if (isNaN(playerInputMoney)) {
          throw new Error('[ERROR] 금액은 숫자로 입력해주세요.');
        }

        return Number(playerInputMoney);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
    
  async inputBonusNumber() {
    while (true) {
      try {
        const playerInputBonus = await Console.readLineAsync(INPUT_BONUST_NUMBER);
        if (!isNaN(playerInputBonus)) {
          this.bonusNumber = Number(playerInputBonus);
          return this.bonusNumber;
        } else {
          Console.print('[ERROR] 보너스 숫자는 숫자로 입력해주세요.');
        }
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
      }
    }
  }

  stringToNumberArray(inputNumber) {
    return inputNumber.split(',').map(Number);
  }
}

export default InputView;
