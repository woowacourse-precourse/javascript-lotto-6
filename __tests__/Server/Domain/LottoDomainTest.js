/* eslint-disable prettier/prettier */
import Lotto from '../../../src/Lotto.js';
import CONSTANTS from '../../../src/Util/Constants.js';
import { ERROR_MESSAGE } from '../../../src/Util/Message';

describe('Lotto 도메인 테스트', () => {
  const {lottoMin} = CONSTANTS;
  const {lottoMax} = CONSTANTS;

  test(`로또의 길이는 ${CONSTANTS.lottoCount}이아니면 에러가 발생해야 한다.`, () => {
    // given
    const testCases = [
      [1, 2, 3, 4, 5], 
      [1, 2, 3, 4, 5, 6, 7], 
      [1], 
      [],
    ];

    // then
    testCases.forEach((testCase) => {
      expect(() => new Lotto(testCase)).toThrow(ERROR_MESSAGE.isNotLength);
    })
  })

  test(`로또가 모두 숫자가 아니면 에러가 발생해야 한다.`, () => {
    // given
    const testCases = [
      [1, 2, 3, 4, 5, '홍'], 
      [1, 2, 3, 4, 5, 'a'], 
      [1, 2, 3, 4, 5, '!'], 
    ];

    // then
    testCases.forEach((testCase) => {
      expect(() => new Lotto(testCase)).toThrow(ERROR_MESSAGE.isChar);
    })
  })

  test(`user객체의 구입한 로또번호는 ${lottoMin} 이상 ${lottoMax}가 아니면 에러가 발생되어야 한다.`, () => {
    // given
    const testCases = [
      [0, 2, 3, 4, 5, 6], 
      [1, 2, 3, 4, 5, 46], 
      [1, 2, 3, 4, 5, ''], 
    ];

    // then
    testCases.forEach((testCase) => {
      expect(() => new Lotto(testCase)).toThrow(ERROR_MESSAGE.isNotInRange);
    })
  })

  test(`user객체의 구입한 로또번호는 중복된 값이 있으면 에러가 발생되어야 한다.`, () => {
    // given
    const testCases = [
      [2, 2, 3, 4, 5, 6], 
      [1, 2, 3, 4, 5, 5], 
      [1, 2, 3, 4, 5, 4], 
    ];

    // then
    testCases.forEach((testCase) => {
      expect(() => new Lotto(testCase)).toThrow(ERROR_MESSAGE.isDuplicate);
    })
  })
})