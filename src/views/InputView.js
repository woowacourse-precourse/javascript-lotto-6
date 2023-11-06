import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/constants';

const InputView = {
  /**
   * 구입금액을 입력받는 함수
   * @returns {string} 구입금액
   */
  async readMoney() {
    const money = await Console.readLineAsync(INPUT.MONEY);
    return money;
  },

  async readWinningNumber() {
    const numbers = await Console.readLineAsync(INPUT.WINNING_NUMBERS);
    return numbers.split(',').map(Number);
  },

  async readBonusNumber() {
    const bonus = await Console.readLineAsync(INPUT.BONUS_NUMBERS);
    return Number(bonus);
  },
};

export default InputView;
