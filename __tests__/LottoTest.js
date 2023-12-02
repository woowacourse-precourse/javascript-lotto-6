import Lotto from '../src/Lotto.js';
import { LOTTO_NUMBERS } from '../src/constant/constant.js';
import { ERROR } from '../src/constant/message.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  describe('로또 기능 테스트', () => {
    const opponent = new Lotto([1, 2, 3, 4, 5, 6]);

    test.each([
      {
        inputs: [6, 5, 4, 3, 2, 1],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        inputs: [23, 17, 11, 2, 5, 34],
        expected: [2, 5, 11, 17, 23, 34],
      },
    ])('로또를 생성하면 숫자가 오름차순으로 정렬되어 저장된다.', ({ inputs, expected }) => {
      // when
      const lotto = new Lotto(inputs);

      // then
      const result = lotto.getNumbers();
      expect(result).toStrictEqual(expected);
    });

    test.each([
      {
        inputs: [23, 17, 11, 2, 5, 34],
        expected: 2,
      },
      {
        inputs: [2, 4, 6, 8, 10, 12],
        expected: 3,
      },
    ])('로또끼리 비교해서 일치하는 개수가 몇개인지 반환한다.', ({ inputs, expected }) => {
      // when
      const lotto = new Lotto(inputs);

      // then
      const result = lotto.getMatchingCounts(opponent);
      expect(result).toBe(expected);
    });

    test.each([
      {
        lottoNumbers: [23, 17, 11, 2, 5, 34],
        bonusNumber: 2,
        expected: true,
      },
      {
        lottoNumbers: [2, 4, 6, 8, 10, 12],
        bonusNumber: 14,
        expected: false,
      },
    ])('로또가 특정 번호를 가지고 있는지 반환한다.', ({ lottoNumbers, bonusNumber, expected }) => {
      // when
      const lotto = new Lotto(lottoNumbers);

      // then
      const result = lotto.hasNumber(bonusNumber);
      expect(result).toBe(expected);
    });
  });

  describe('로또 번호 검증 테스트', () => {
    test.each([[[1, 2, 3, 4, 5]], [1, 2, 3, 4, 5, 6, 7]])(
      '로또 번호가 6개가 아니면 예외가 발생한다.',
      (inputs) => {
        expect(() => new Lotto(inputs)).toThrow(ERROR.invalidCount);
      },
    );

    test.each([[[1, 2, 3, 4, 5, 'yuna']], [[1, 2, 3, 4, 5, '!']]])(
      '로또 번호에 정수가 아닌 요소가 있으면 예외가 발생한다.',
      (inputs) => {
        expect(() => new Lotto(inputs)).toThrow(ERROR.hasNonNumeric);
      },
    );

    test.each([[[LOTTO_NUMBERS.min - 1, 1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, LOTTO_NUMBERS.max + 1]]])(
      `로또 번호에 ${LOTTO_NUMBERS.min}~${LOTTO_NUMBERS.max} 범위 밖의 요소가 있으면 예외가 발생한다.`,
      (inputs) => {
        expect(() => new Lotto(inputs)).toThrow(ERROR.hasNotInRange);
      },
    );

    test.each([[[1, 2, 3, 4, 5, 1]], [[1, 1, 1, 1, 1, 1]]])(
      `로또 번호에 중복되는 요소가 있다면 예외가 발생한다.`,
      (inputs) => {
        expect(() => new Lotto(inputs)).toThrow(ERROR.hasDuplicate);
      },
    );

    test.each([[[1, 2, 3, 4, 5, 6]], [[33, 29, 7, 45, 2, 16]]])(
      `로또 번호가 모두 다르고 ${LOTTO_NUMBERS.min}~${LOTTO_NUMBERS.max} 범위 내의 6개의 숫자라면, 예외가 발생하지 않는다.`,
      (inputs) => {
        expect(() => new Lotto(inputs)).not.toThrow();
      },
    );
  });
});
