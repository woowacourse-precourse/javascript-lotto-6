import { Console } from '@woowacourse/mission-utils';
import { COST_PROMPT } from '../constants/prompt.js';

class Input {
  /**
   * 로또 구입 금액을 입력받아 number로 반환하는 메서드
   * @returns {Promise<number>} 구입금액
   */
  static async getCost() {
    const cost = await Input.readIntegerAsync(COST_PROMPT);

    if (cost % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }

    if (cost < 1000) {
      throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
    }

    return cost;
  }

  /**
   * 정수를 입력받아 number로 반환하는 메서드
   * @param {string} message - 사용자에게 출력할 메시지
   * @returns {Promise<number>} 정수
   */
  static async readIntegerAsync(message) {
    const userInput = await Console.readLineAsync(message);
    if (userInput.trim().length === 0) {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    return new Promise((resolve, reject) => {
      const numberInput = Number(userInput);

      if (!Number.isSafeInteger(numberInput)) {
        reject(new Error('[ERROR] 정수를 입력해주세요.'));
      }
      resolve(numberInput);
    });
  }
}

export default Input;
