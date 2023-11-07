import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants/LottoMsg.js';
import InputValidate from '../utils/InputValidate.js';
import OutputView from './OutputView.js';

class InputView {
  constructor() {
    this.INPUT_VAL = new InputValidate();
    this.OUTPUT_VIEW = new OutputView();
  }

  async purchaseMoney() {
    try {
      const inputMoney = await Console.readLineAsync(INPUT_MSG.PURCHASE_MONEY);
      await this.INPUT_VAL.inputMoney(inputMoney);
      return Number(inputMoney);
    } catch (error) {
      this.OUTPUT_VIEW.printError(error.message);
      return error.name;
    }
  }

  async winLotteryNumber() {
    const winNumber = await Console.readLineAsync(INPUT_MSG.WIN_LOTTERY_NUMBER);
    console.log(winNumber);
    return winNumber.split(',').map((number) => Number(number));
  }

  async bonusNumber(winNumber) {
    try {
      const bonusNumber = await Console.readLineAsync(INPUT_MSG.BONUS_NUMBER);
      await this.INPUT_VAL.bonusNumber(bonusNumber, winNumber);
      return Number(bonusNumber);
    } catch (error) {
      this.OUTPUT_VIEW.printError(error.message);
      return error.name;
    }
  }
}

export default InputView;
