import { Console } from '@woowacourse/mission-utils';
import { LOTTO } from '../Constant/Constants';
import validate from '../util/validation';

const InputView = {
  async moneyInput() {
    const money = await Console.readLineAsync(LOTTO.INPUT_START);
    await validate.moneyValidation(money);
    const ticketCount = Number(money) / LOTTO.MONEY_UNIT;
    return ticketCount;
  },

  async winningNumerInput() {
    const winningNumber = await Console.readLineAsync(LOTTO.INPUT_WINNING_NUM);
    const numList = winningNumber.split(',').map((num) => Number(num));
    return numList;
  },

  async bonusNumberInput() {
    const bonusNumber = await Console.readLineAsync(LOTTO.INPUT_BONUS_NUM);
    return Number(bonusNumber);
  },
};

export default InputView;
