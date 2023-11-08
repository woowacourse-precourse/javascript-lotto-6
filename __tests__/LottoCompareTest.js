import LottoCompare from '../src/domain/LottoCompare.js';

describe('로또 번호 비교 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 5, 6, 7], 5],
    [[1, 2, 3, 6, 7, 8], 4],
    [[1, 2, 6, 7, 8, 9], 3],
    [[1, 6, 7, 8, 9, 10], 2],
    [[7, 8, 9, 10, 11, 12], 0],
  ])('로또 번호와 당첨 번호를 비교하여 포함된 개수를 구한다.', (number, expected) => {
    // given
    const WINNING_NUMBERS = '[1, 2, 3, 4, 5, 6]';
    const BONUS_NUMBER = 7;

    // when
    const lottoCompare = new LottoCompare(WINNING_NUMBERS, BONUS_NUMBER);
    const result = lottoCompare.getCountIncludesWinningNumbers(number);

    // then
    expect(result).toBe(expected);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], false],
    [[1, 2, 3, 5, 6, 7], true],
  ])('로또 번호에 보너스 번호가 포함되는지 구한다.', (numbers, expected) => {
    // given
    const WINNING_NUMBERS = '[1, 2, 3, 4, 5, 6]';
    const BONUS_NUMBER = 7;

    // when
    const lottoCompare = new LottoCompare(WINNING_NUMBERS, BONUS_NUMBER);
    const result = lottoCompare.hasBonusNumber(numbers);

    // then
    expect(result).toBe(expected);
  });
});
