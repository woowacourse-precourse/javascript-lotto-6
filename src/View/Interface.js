import { MissionUtils } from '@woowacourse/mission-utils';

class Interface {
  static async request(content) {
    const inputValue = await MissionUtils.Console.readLineAsync(content);
    return inputValue;
  }

  static async requestPayment() {
    return Interface.request('구입금액을 입력해 주세요.');
  }

  static async requestWinNums() {
    return Interface.request('당첨 번호를 입력해 주세요.');
  }

  static async requestBonusNum() {
    return Interface.request('보너스 번호를 입력해 주세요.');
  }
}

export default Interface;
