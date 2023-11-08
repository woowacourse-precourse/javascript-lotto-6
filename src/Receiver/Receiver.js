import { MissionUtils } from '@woowacourse/mission-utils';
import {
  LOTTIO_SIZE,
  MONEY_UNIT,
  RANGE_END_NUM,
  RANGE_START_NUM,
} from '../Constant/Constant.js';

const Receiver = class {
  static async receiveMoney() {
    const answer = await MissionUtils.Console.readLineAsync(
      `구입금액을 ${MONEY_UNIT}원 단위로 입력해 주세요.`,
    );

    return answer;
  }

  static async receiveLottomNumbs() {
    const answer = await MissionUtils.Console.readLineAsync(
      `${RANGE_START_NUM}~${RANGE_END_NUM} 사이의 당첨 번호 ${LOTTIO_SIZE}개를 입력해 주세요(입력 시','로 구분해주세요).`,
    );

    return answer;
  }
};

export default Receiver;
