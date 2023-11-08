import Lotto from '../src/Lotto.js';
import { LOTTO_NUMBERS_ERROR_MESSAGES } from '../src/Constant/Constants.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test.each(['', '1,2,3,4,5,6', 123456, null, undefined, {}])(
    '로또 번호가 배열의 형태로 주어지지 않았을 때 예외가 발생한다.',
    (invalidLottoNumbers) => {
      expect(() => {
        new Lotto(invalidLottoNumbers);
      }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_ARRAY);
    }
  );

  test.each(['', '1', 'dfsf', null, undefined, [], {}])(
    '로또 번호의 자료형이 숫자형이 아닐 때 예외가 발생한다.',
    (invalidLottoNumber) => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, invalidLottoNumber]);
      }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_NUMERIC);
    }
  );

  test('로또 번호의 개수는 6개가 아닐 때 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_LENGTH);
  });
  test('로또 번호의 개수는 6개가 아닐 때 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_LENGTH);
  });

  test.each([-1, 46, 0])(
    '로또 번호가 1이상 45이하의 숫자가 아닐 때 예외가 발생한다.',
    (invalidLottoNumber) => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, invalidLottoNumber]);
      }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  );
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 1, 1, 1, 2, 2]);
    }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.DUPLICATED);
  });
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 1, 2, 3, 4, 5]);
    }).toThrow(LOTTO_NUMBERS_ERROR_MESSAGES.DUPLICATED);
  });
});
