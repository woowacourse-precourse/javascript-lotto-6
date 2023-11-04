import { Console } from '@woowacourse/mission-utils';
import { COST_PROMPT } from '../constants/message';

class Input {
  /**
   * 로또 구입 금액을 입력받아 number로 반환하는 메서드
   * @returns {Promise<number>} 구입금액
   */
  static async getCost() {
    const cost = await Console.readLineAsync(COST_PROMPT);

    return cost;
  }
}

export default Input;
