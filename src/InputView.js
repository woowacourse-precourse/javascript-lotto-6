import { Console } from '@woowacourse/mission-utils';

const INPUT_PURCHASING_AMOUNT = '구입금액을 입력해 주세요.\n';
const INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUST_NUMBER = '보너스 번호를 입력해 주세요.';

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

  async inputAmountOfMoney() {
    const playerInputMoney = await Console.readLineAsync(INPUT_PURCHASING_AMOUNT);
    this.playerMoney = Number(playerInputMoney);
  }

  async inputBonusNumber() {
    const playerInputBonus = await Console.readLineAsync(INPUT_BONUST_NUMBER);
    this.bonusNumber = Number(playerInputBonus);
    return this.bonusNumber;
  }

  stringToNumberArray(inputNumber) {
    return inputNumber.split(',').map(Number);
  }
}

export default InputView;
