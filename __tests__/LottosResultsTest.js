import LottosResults from '../src/domain/LottosResults.js';

describe('로또 당첨 결과 테스트', () => {
  test.each([
    [1, false, undefined],
    [2, false, undefined],
    [3, false, 'fifth'],
    [4, false, 'fourth'],
    [5, false, 'third'],
    [5, true, 'second'],
    [6, false, 'first'],
  ])('로또 번호의 당첨 등수를 구한다.', (includesCount, hasBonusNumber, expected) => {
    // given
    const LOTTOS = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 7],
      [1, 5, 6, 7, 8, 9],
      [1, 20, 30, 40, 41, 45],
    ];
    const WINNING_NUMBERS = '[1, 2, 3, 4, 5, 6]';
    const BONUS_NUMBER = 7;

    // when
    const lottosResults = new LottosResults(LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    const result = lottosResults.getLottoRank(includesCount, hasBonusNumber);

    // then
    expect(result).toBe(expected);
  });

  test('로또 번호들의 당첨 등수를 구한다.', () => {
    // given
    const LOTTOS = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 7],
      [1, 3, 4, 5, 6, 9],
      [1, 4, 5, 6, 7, 9],
      [1, 5, 6, 7, 8, 9],
      [1, 20, 30, 40, 41, 45],
    ];
    const WINNING_NUMBERS = '[1, 2, 3, 4, 5, 6]';
    const BONUS_NUMBER = 7;
    const LOTTOS_RANKS = ['first', 'second', 'third', 'fourth', 'fifth'];

    // when
    const lottosResults = new LottosResults(LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    const result = lottosResults.getLottosRanks();

    // then
    expect(result).toStrictEqual(LOTTOS_RANKS);
  });

  test('로또 번호의 당첨 등수에 따른 개수를 구한다.', () => {
    // given
    const LOTTOS = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 4, 5, 6, 7],
      [1, 3, 4, 5, 6, 9],
      [1, 4, 5, 6, 7, 9],
      [1, 5, 6, 7, 8, 9],
      [1, 20, 30, 40, 41, 45],
    ];
    const WINNING_NUMBERS = '[1, 2, 3, 4, 5, 6]';
    const BONUS_NUMBER = 7;
    const LOTTOS_RANKS_COUNT = { first: 1, second: 1, third: 1, fourth: 1, fifth: 1 };

    // when
    const lottosResults = new LottosResults(LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    const result = lottosResults.getLottosResultsCount();

    // then
    expect(result).toStrictEqual(LOTTOS_RANKS_COUNT);
  });
});
