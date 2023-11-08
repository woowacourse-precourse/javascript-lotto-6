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

    try {
      this.winningNumber = this.stringToNumberArray(playerWinningNumber);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      return;
    }

    return this.winningNumber;
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
          throw new Error('[ERROR] 보너스 숫자는 숫자로 입력해주세요.');
          
        } 
        this.bonusNumber = Number(playerInputBonus);
          return this.bonusNumber;
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
      }
    }
  }

  async stringToNumberArray(input) {
    const numbers = input.split(',').map((number) => Number(number));

    if (numbers.some((number) => !Number.isInteger(number) || number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }

    return numbers;
  }
}

export default InputView;
