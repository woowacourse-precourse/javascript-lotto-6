import Lotto from '../src/model/Lotto.js';
import { ERROR } from '../src/constants/Constant.js';

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

  test.each([[[1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 6, 7]]])(
    '로또 번호의 개수가 6개가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.isInvalidCount);
    },
  );

  test.each([[[1, 2, 3, 4, 5, '']], [[1, 2, 3, 4, 5, 'a']]])(
    '로또 번호 중 숫자가 아닌 요소가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.hasNonNumericElements);
    },
  );

  test.each([[[1, 2, 3, 4, 5, 5]], [[2, 2, 3, 3, 4, 4]]])(
    '로또 번호 중 중복되는 숫자가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.hasDuplicate);
    },
  );

  test.each([[[0, 1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 46]]])(
    '로또 번호 중 1-45 사이의 숫자가 아닌 요소가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.hasOutOfRange);
    },
  );

  test.each([
    [[1, 2, 3, 4, 5, 6]],
    [['1', '2', '3', '4', '5', '6']],
    [[1, '2', 3, '4', 5, '6']],
    [[39, 31, 21, 5, 43, 12]],
  ])(
    '로또 번호가 1-45사이의 서로 다른 숫자 6개로 이루어져 있다면 예외가 발생하지 않는다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).not.toThrow();
    },
  );
});
