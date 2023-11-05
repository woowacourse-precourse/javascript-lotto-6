import Lotto from '../../src/Lotto';
import LottoError from '../../src/errors/LottoError.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(new LottoError(ERROR_MESSAGES.lotto_not_match_length));
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(new LottoError(ERROR_MESSAGES.lotto_have_duplication_number));
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'hi', 4, 5, 6]);
    }).toThrow(new LottoError(ERROR_MESSAGES.lotto_not_a_number));
  });

  test('로또 번호에 범위에 벗어난 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 52, 4, 5, 6]);
    }).toThrow(new LottoError(ERROR_MESSAGES.lotto_out_of_range));
  });
});
