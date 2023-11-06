import { Console } from '@woowacourse/mission-utils';

const InputView = {
  /**
   * 구입금액을 입력받는 함수
   * @returns {string} 구입금액
   */
  async readMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return money;
  },
};

export default InputView;
