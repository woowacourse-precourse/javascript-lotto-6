import { MissionUtils } from '@woowacourse/mission-utils';
import { MONEY_UNIT } from '../Constant/Constant.js';

const Receiver = class {
  static async receiveMoney() {
    const answer = await MissionUtils.Console.readLineAsync(
      `구입금액을 ${MONEY_UNIT}원 단위로 입력해 주세요.`,
    );

    return answer;
  }
};

export default Receiver;
