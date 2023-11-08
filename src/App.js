import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ValidateMoney from './Validation/ValidateMoney.js';
import PrintLottoNumber from './Utils/PrintLottoNumber.js';
import ValidateBonusNumber from './Validation/ValidateBonusNumber.js';
import CalculatePrize from './Utils/CalculatePrize.js';
import CalculateTotalMoney from './Utils/CalculateTotalMoney.js';
import { MESSAGE } from './Constants/constant.js';

class App {
  async play() {
    let money = Number(
      await MissionUtils.Console.readLineAsync(MESSAGE.GET_MONEY),
    );

    let calculatedMoney = 0;

    while (true) {
      try {
        calculatedMoney = ValidateMoney(money);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);

        money = Number(
          await MissionUtils.Console.readLineAsync(MESSAGE.GET_MONEY),
        );
      }
    }

    MissionUtils.Console.print(`\n${calculatedMoney}${MESSAGE.BUY_LOTTO}`);
    const LOTTO_ARRAY = PrintLottoNumber(calculatedMoney);

    let userNumber = (
      await MissionUtils.Console.readLineAsync(MESSAGE.GET_LOTTO_NUMBER)
    ).split(',');

    while (true) {
      try {
        new Lotto(userNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);

        userNumber = (
          await MissionUtils.Console.readLineAsync(MESSAGE.GET_LOTTO_NUMBER)
        ).split(',');
      }
    }

    let bonusNumber = await MissionUtils.Console.readLineAsync(
      MESSAGE.GET_BONUS_NUMBER,
    );

    while (true) {
      try {
        ValidateBonusNumber(bonusNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);

        bonusNumber = await MissionUtils.Console.readLineAsync(
          '\n보너스 번호를 입력해 주세요.\n',
        );
      }
    }

    const PRIZE_ARRAY = CalculatePrize(LOTTO_ARRAY, userNumber, bonusNumber);

    const TOTAL_PRIZE_MONEY = CalculateTotalMoney(PRIZE_ARRAY);

    const EARNING_LATE = (TOTAL_PRIZE_MONEY / money) * 100;

    MissionUtils.Console.print(MESSAGE.WINNING_STATISTICS);
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`${MESSAGE.FIFTH} - ${PRIZE_ARRAY[4]}개`);
    MissionUtils.Console.print(`${MESSAGE.FOURTH} - ${PRIZE_ARRAY[3]}개`);
    MissionUtils.Console.print(`${MESSAGE.THIRD} - ${PRIZE_ARRAY[2]}개`);
    MissionUtils.Console.print(`${MESSAGE.SECOND} - ${PRIZE_ARRAY[1]}개`);
    MissionUtils.Console.print(`${MESSAGE.FIRST} - ${PRIZE_ARRAY[0]}개`);
    MissionUtils.Console.print(
      `총 수익률은 ${EARNING_LATE.toFixed(1)}%입니다.`,
    );
  }
}

export default App;
