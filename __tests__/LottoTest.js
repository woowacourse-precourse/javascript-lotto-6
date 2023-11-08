import Lotto from '../src/Lotto.js';
import { ERROR, LOTTO_NUMBER, RANK } from '../src/constants/Constant.js';

describe('로또 클래스 검증 테스트', () => {
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
    `로또 번호의 개수가 ${LOTTO_NUMBER.count}개가 아니면 예외가 발생한다.`,
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
    `로또 번호 중 ${LOTTO_NUMBER.minNum} ${LOTTO_NUMBER.maxNum} 사이의 숫자가 아닌 요소가 있으면 예외가 발생한다.`,
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
    `로또 번호가 ${LOTTO_NUMBER.minNum}과 ${LOTTO_NUMBER.maxNum}사이의 서로 다른 숫자 ${LOTTO_NUMBER.count}개로 이루어져 있다면 예외가 발생하지 않는다.`,
    (input) => {
      expect(() => {
        new Lotto(input);
      }).not.toThrow();
    },
  );
});

describe('로또 클래스 기능 테스트', () => {
  test.each([
    { input: [6, 5, 4, 3, 2, 1], output: [1, 2, 3, 4, 5, 6] },
    { input: [43, 21, 33, 11, 5, 17], output: [5, 11, 17, 21, 33, 43] },
  ])('로또 생성시 번호가 오름차순으로 정렬되는지 테스트', ({ input, output }) => {
    // given
    const lotto = new Lotto(input);

    // when
    const lottoNumbers = lotto.getNumbers();

    // then
    expect(lottoNumbers).toEqual(output);
  });

  test.each([
    {
      lottoNumber: [1, 2, 3, 4, 5, 6],
      winningNumber: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      matchingCount: RANK.first.match,
    },
    {
      lottoNumber: [6, 5, 4, 3, 2, 1],
      winningNumber: [1, 2, 3, 4, 5, 7],
      bonusNumber: 6,
      matchingCount: RANK.bonus.match,
    },
    {
      lottoNumber: [13, 14, 15, 16, 17, 18],
      winningNumber: [7, 8, 9, 10, 11, 12],
      bonusNumber: 13,
      matchingCount: 0,
    },
  ])(
    '로또 번호와 당첨 번호를 비교해서 일치하는 개수를 구하는 기능 테스트',
    ({ lottoNumber, winningNumber, bonusNumber, matchingCount }) => {
      // given
      const lotto = new Lotto(lottoNumber);
      const winning = new Lotto(winningNumber);

      // when
      const result = lotto.getMatchingCount(winning, bonusNumber);

      // then
      expect(result).toBe(matchingCount);
    },
  );

  test.each([
    { matchingCount: RANK.first.match, rank: 'first' },
    { matchingCount: RANK.bonus.match, rank: 'bonus' },
    { matchingCount: 2, rank: null },
  ])('로또의 순위를 구하는 기능 테스트', ({ matchingCount, rank }) => {
    // given
    const mockGetMatchingCount = jest.fn();
    mockGetMatchingCount.mockReturnValueOnce(matchingCount);

    // when
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.getMatchingCount = mockGetMatchingCount;
    const result = lotto.getRank(); // winningNumber와 bonusNumber가 필요하지만 matchingCount 계산을 mock으로 대체해서 입력하지 않음

    // then
    expect(result).toBe(rank);
  });

  test.each([
    {
      lottoNumber: [1, 2, 3, 4, 5, 6],
      winningNumber: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      rank: 'first',
    },
    {
      lottoNumber: [6, 5, 4, 3, 2, 1],
      winningNumber: [1, 2, 3, 4, 5, 7],
      bonusNumber: 6,
      rank: 'bonus',
    },
    {
      lottoNumber: [13, 14, 15, 16, 17, 18],
      winningNumber: [7, 8, 9, 10, 11, 12],
      bonusNumber: 13,
      rank: null,
    },
  ])(
    '로또의 매칭 카운트를 구해서 순위를 구하는 기능 테스트',
    ({ lottoNumber, winningNumber, bonusNumber, rank }) => {
      // given
      const lotto = new Lotto(lottoNumber);
      const winningLotto = new Lotto(winningNumber);

      // when
      const result = lotto.getRank(winningLotto, bonusNumber);

      // then
      expect(result).toBe(rank);
    },
  );
});
