/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  async inputMoney() {
    const inputMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return inputMoney;
  }

  async getWinningNum() {
    const getNum = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNum = String(getNum).split(','); // 문자열 형태

    return winningNum; // 문자열 상태
  }

  async getBonusNum() {
    const bonusNum = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    return bonusNum;
  }
}

export default Input;
