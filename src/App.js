import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ValidateMoney from './Validation/ValidateMoney.js';
import PrintLottoNumber from './Utils/PrintLottoNumber.js';
import ValidateBonusNumber from './Validation/ValidateBonusNumber.js';
import CalculatePrize from './Utils/CalculatePrize.js';
import CalculateTotalMoney from './Utils/CalculateTotalMoney.js';

class App {
  async play() {
    let money = Number(
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n'),
    );

    let calculatedMoney = 0;

    while (true) {
      try {
        calculatedMoney = ValidateMoney(money);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);

        money = Number(
          await MissionUtils.Console.readLineAsync(
            '구입금액을 입력해 주세요.\n',
          ),
        );
      }
    }

    MissionUtils.Console.print(`\n${calculatedMoney}개를 구매했습니다.`);
    const LOTTO_ARRAY = PrintLottoNumber(calculatedMoney);

    let userNumber = (
      await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n')
    ).split(',');

    while (true) {
      try {
        new Lotto(userNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);

        userNumber = (
          await MissionUtils.Console.readLineAsync(
            '\n당첨 번호를 입력해 주세요.\n',
          )
        ).split(',');
      }
    }

    let bonusNumber = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
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

    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${PRIZE_ARRAY[4]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${PRIZE_ARRAY[3]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${PRIZE_ARRAY[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${PRIZE_ARRAY[1]}개`,
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${PRIZE_ARRAY[0]}개`,
    );
    MissionUtils.Console.print(
      `총 수익률은 ${EARNING_LATE.toFixed(1)}%입니다.`,
    );
  }
}

export default App;
