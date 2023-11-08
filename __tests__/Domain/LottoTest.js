import Lotto from '../../src/Lotto.js';
import ERROR from '../../src/constants/error.js';
import LOTTO from '../../src/constants/lotto.js';

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

  describe('로또 생성시 예외가 발생하는 경우', () => {
    describe('로또 번호의 개수가 6개 미만인 경우, 예외가 발생한다.', () => {
      // given
      const cases = [
        { input: [] },
        { input: [1] },
        { input: [1, 2] },
        { input: [1, 2, 3] },
        { input: [1, 2, 3, 4] },
        { input: [1, 2, 3, 4, 5] },
      ];

      test.each(cases)(
        '로또 번호로 $input가 주어지는 경우, 예외가 발생한다.',
        ({ input }) => {
          // when
          const createLotto = () => new Lotto(input);

          // then
          expect(createLotto).toThrow(ERROR.message.lotto.length);
        },
      );
    });

    test('로또 번호가 주어지지 않는 경우, 예외가 발생한다', () => {
      // when
      const createLotto = () => new Lotto();

      // then
      expect(createLotto).toThrow(ERROR.message.lotto.falsy);
    });

    describe('로또 번호에 범위 밖의 숫자가 포함되어 있는 경우, 예외가 발생한다.', () => {
      // given
      const cases = [
        { input: [0, 1, 2, 3, 4, 5], invalidNumber: 0 },
        { input: [-1, 1, 2, 3, 4, 5], invalidNumber: -1 },
        { input: [1, 2, 3, 4, 5, 46], invalidNumber: 46 },
      ];

      test.each(cases)(
        '로또 번호로 $input가 주어지는 경우, 범위 밖의 값 $invalidNumber으로 예외가 발생한다.',
        ({ input }) => {
          // when
          const createLotto = () => new Lotto(input);

          // then
          expect(createLotto).toThrow(ERROR.message.lotto.notInRange);
        },
      );
    });

    describe('로또 번호에 정수가 아닌 값이 포함되어 있는 경우, 예외가 발생한다.', () => {
      // given
      const cases = [
        { input: [1, 2, 3e3, 4, 5, 6], invalidNumber: 3e3 },
        { input: [1, 2, 3, 4, 5, 6.6], invalidNumber: 6.6 },
        { input: [1, 'two', 3, 4, 5, 6], invalidNumber: 'two' },
        { input: [1, 2, 3, NaN, 5, 6], invalidNumber: NaN },
      ];

      test.each(cases)(
        '로또 번호로 $input이 주어지는 경우, 정수가 아닌 값 $invalidNumber으로 예외가 발생한다.',
        ({ input }) => {
          // when
          const createLotto = () => new Lotto(input);

          // then
          expect(createLotto).toThrow(ERROR.message.lotto.notAnInteger);
        },
      );
    });
  });

  describe('메서드 테스트', () => {
    describe('getNumbers 메서드는 로또 번호 배열을 정렬하여 반환한다.', () => {
      // given
      const cases = [
        { input: [34, 12, 6, 22, 18, 45], expected: [6, 12, 18, 22, 34, 45] },
        { input: [20, 10, 30, 25, 15, 5], expected: [5, 10, 15, 20, 25, 30] },
        { input: [9, 12, 4, 18, 3, 15], expected: [3, 4, 9, 12, 15, 18] },
      ];

      test.each(cases)(
        '로또 번호로 $input이 주어지는 경우, getNumbers()는 정렬된 배열 $expected를 반환한다.',
        ({ input, expected }) => {
          // when
          const lotto = new Lotto(input);
          const lottoNumbers = lotto.getNumbers();

          // then
          expect(lottoNumbers).toEqual(expected);
        },
      );
    });

    describe('toString 메서드는 로또 번호를 문자열로 반환한다.', () => {
      // given
      const cases = [
        { input: [3, 12, 6, 7, 15, 23], expected: '[3, 6, 7, 12, 15, 23]' },
        { input: [34, 12, 6, 22, 18, 45], expected: '[6, 12, 18, 22, 34, 45]' },
        { input: [20, 10, 30, 25, 15, 5], expected: '[5, 10, 15, 20, 25, 30]' },
        { input: [9, 12, 4, 18, 3, 15], expected: '[3, 4, 9, 12, 15, 18]' },
      ];

      test.each(cases)(
        '로또 번호로 $input이 주어지는 경우, toString()은 배열에 담은 문자열을 반환한다.',
        ({ input, expected }) => {
          // when
          const lotto = new Lotto(input);

          // then
          expect(lotto.toString()).toBe(expected);
        },
      );
    });

    describe('isLottoNumber 메서드는 인자로 들어온 숫자가 로또 숫자인지 판별한다.', () => {
      // given
      const lottoInstance = new Lotto([1, 2, 3, 4, 5, 6]);

      const cases = [
        { number: 1, expected: true },
        { number: 0, expected: false },
        { number: LOTTO.maxNumber, expected: true },
        { number: LOTTO.minNumber, expected: true },
        { number: LOTTO.maxNumber + 1, expected: false },
        { number: LOTTO.minNumber - 1, expected: false },
        { number: 65, expected: false },
        { number: -1, expected: false },
        { number: 1.5, expected: false },
      ];

      test.each(cases)(
        '$number이 주어지는 경우, $expected를 반환해야 한다.',
        ({ number, expected }) => {
          // when
          const checkLottoNumber = (value) =>
            lottoInstance.isLottoNumber(value);

          // then
          expect(checkLottoNumber(number)).toBe(expected);
        },
      );
    });

    describe('hasInclude 메서드는 인자로 들어온 숫자가 로또 번호에 포함되어 있는지 판별한다.', () => {
      // given
      const cases = [
        { number: 1, expected: true, lottoNumbers: [1, 22, 33, 44, 5, 6] },
        { number: 22, expected: true, lottoNumbers: [1, 22, 33, 44, 5, 6] },
        {
          number: LOTTO.maxNumber,
          expected: true,
          lottoNumbers: [1, 8, 15, 22, 29, 45],
        },
        {
          number: LOTTO.maxNumber - 1,
          expected: true,
          lottoNumbers: [1, 8, 15, 22, 44, 45],
        },
        {
          number: LOTTO.minNumber,
          expected: true,
          lottoNumbers: [1, 7, 14, 21, 28, 35],
        },
        {
          number: LOTTO.maxNumber + 1,
          expected: false,
          lottoNumbers: [2, 9, 16, 23, 30, 37],
        },
        {
          number: LOTTO.minNumber - 1,
          expected: false,
          lottoNumbers: [3, 10, 17, 24, 31, 38],
        },
        { number: 30, expected: true, lottoNumbers: [5, 12, 19, 26, 30, 41] },
        { number: 50, expected: false, lottoNumbers: [7, 14, 21, 28, 35, 43] },
        { number: 0, expected: false, lottoNumbers: [8, 15, 22, 29, 36, 44] },
        { number: -5, expected: false, lottoNumbers: [9, 16, 23, 30, 37, 45] },
        {
          number: 1.5,
          expected: false,
          lottoNumbers: [1, 17, 24, 31, 38, 40],
        },
        { number: 7, expected: false, lottoNumbers: [8, 18, 20, 28, 38, 42] },
        { number: 19, expected: false, lottoNumbers: [6, 13, 20, 27, 34, 42] },
      ];

      test.each(cases)(
        '로또 번호로 $lottoNumbers가 주어지는 경우, $number의 포함여부 $expected를 반환한다.',
        ({ number, expected, lottoNumbers }) => {
          // given
          const lottoInstance = new Lotto(lottoNumbers);

          // when
          const doesNumberInclude = lottoInstance.hasInclude(number);

          // then
          expect(doesNumberInclude).toBe(expected);
        },
      );
    });
  });
});
