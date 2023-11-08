import { MissionUtils } from '@woowacourse/mission-utils';
import { checkValueIsNumber, checkValueIsInteger } from './utils/checkValue.js';
import Lotto from './repository/Lotto.js';

class UserInput {
  async getInputMoney() {
    while (true) {
      try {
        const inputMoney = await MissionUtils.Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
        );
        if (!checkValueIsNumber(inputMoney)) {
          throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
        }
        const lottoCnt = Number(inputMoney) / 1000;
        if (!checkValueIsInteger(lottoCnt)) {
          throw new Error(
            '[ERROR] 잔돈 반환이 불가능합니다. 로또 수의 딱 맞는 금액을 입력해주세요.'
          );
        }
        return inputMoney;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumberStr = await MissionUtils.Console.readLineAsync(
          '\n당첨 번호를 입력해 주세요.\n'
        );

        const winningNumberArr = winningNumberStr
          .split(',')
          .map((item) => Number(item));

        const lottoList = new Lotto(winningNumberArr).getLotto();

        return lottoList;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await MissionUtils.Console.readLineAsync(
          '\n보너스 번호를 입력해 주세요.\n'
        );
        return Number(bonusNumber);
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
}

export default UserInput;
