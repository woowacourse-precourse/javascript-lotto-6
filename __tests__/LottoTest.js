import Lotto from '../src/domain/Lotto.js';
import { ERROR_MESSAGES } from '../src/Constants.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.LOTTO.NO_LENGTH);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.LOTTO.NO_UNIQUE);
  });

  test('로또의 각 번호가 양의정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3.3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.LOTTO.NO_POSITIVE);
  });

  test('로또 번호가 1~45안에 들어가지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.LOTTO.NO_RANGE);
  });

  test('getNumbers 메소드가 로또 번호를 반환한다.', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // when
    const LOTTO_NUMBERS = lotto.getNumbers();

    // then
    expect(LOTTO_NUMBERS).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('getMatchingCount 메소드가 주어진 매개변수와 로또 번호와의 일치하는 개수를 반환한다.', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // when
    const MATCHING_COUNT = lotto.getMatchingCount([1, 3, 4, 7, 8, 9]);

    // then
    expect(MATCHING_COUNT).toBe(3);
  });
});
