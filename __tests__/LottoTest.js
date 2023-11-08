import Lotto from '../src/models/Lotto';
import ErrorMessage from '../src/constants/ErrorMessage';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_LENGTH);
  });

  test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_LENGTH);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
  });

  test('로또 번호에 숫자가 아닌 입력이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6j']);
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
  });

  test('로또 번호가 1~45 사이의 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 60]);
    }).toThrow(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
  });
});