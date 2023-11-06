import { Console } from '@woowacourse/mission-utils';
import commonValidation from '../validations/commonValidation/commonValidation.module.js';

/**
 * @module
 * '공통 입/출력'의 책임을 가지고 있는 모듈
 */
const systemConsole = Object.freeze({
  /**
   * 주어진 query를 통해 유저로부터 입력값을 읽어오는 추상화 함수
   * @param {string} query - 유저에게 보여줄 입력 요청 메시지
   * @returns {Promise<string>} 유저로부터 입력 받은 문자열
   */
  async read(query) {
    const inputValue = await Console.readLineAsync(query);
    commonValidation.check(inputValue);
    return inputValue;
  },
});

export default systemConsole;
