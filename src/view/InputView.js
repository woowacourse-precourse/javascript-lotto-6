import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const InputView = {
  async readMoney() {
    const money = await Console.readLineAsync(`${MESSAGE.GET_MONEY_INPUT}\n`);
    return Number(money);
  },
  async readWinningNumbers() {
    const readlottoNumbers = await Console.readLineAsync(
      `${MESSAGE.GET_WINNING_NUMBERS}\n`
    );

    const lottoNumbers = readlottoNumbers
      .split(',')
      .map((num) => Number(num.trim()));

    return lottoNumbers;
  },
  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      `${MESSAGE.GET_BONUS_NUMBER}\n`
    );
    return Number(bonusNumber);
  },
};

export default InputView;
