import { ERROR } from '../src/constant/constant.js';
import Lotto from '../src/model/Lotto.js';

describe('로또 클래스 테스트', () => {
  const testCases = [
    { numbers: [1, 2, 3, 4, 5, 6, 7], expectedError: ERROR.length },
    { numbers: [1, 2, 3, 4, 5, 5], expectedError: ERROR.duplicated },
    { numbers: [1, 2, 3, 4, 5, 99], expectedError: ERROR.range },
    { numbers: [1, 2, 3, 4, 5, 'asdf'], expectedError: ERROR.numberOnly },
  ];

  test.each(testCases)(
    '예외 테스트 numbers: $numbers, toThrow: $expectedError',
    ({numbers,expectedError}) => {
      expect(()=>new Lotto(numbers)).toThrow(expectedError);
    }
  );
});
