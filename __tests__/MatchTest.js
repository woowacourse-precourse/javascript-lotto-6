import Match from '../src/module/Match';

describe('Match 클래스 테스트', () => {
  test('로또 1개의 번호가 3개 일치하면 threeMatches가 1증가한다.', () => {
    const PURCHASED_LOTTO_ARRAY = [[1, 2, 3, 4, 5, 6]];
    const WINNING_NUMBERS = '1,2,3,11,12,13';
    const BONUS = '14';
    const match = new Match(PURCHASED_LOTTO_ARRAY, WINNING_NUMBERS, BONUS);
    const matchCount = match.getMatchCount();
    expect(matchCount).toEqual({
      threeMatches: 1,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    });
  });

  test('로또 1개의 번호가 4개 일치하면 fourMatches가 1증가한다.', () => {
    const PURCHASED_LOTTO_ARRAY = [[1, 2, 3, 4, 5, 6]];
    const WINNING_NUMBERS = '1,2,3,4,12,13';
    const BONUS = '14';
    const match = new Match(PURCHASED_LOTTO_ARRAY, WINNING_NUMBERS, BONUS);
    const matchCount = match.getMatchCount();
    expect(matchCount).toEqual({
      threeMatches: 0,
      fourMatches: 1,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    });
  });

  test('로또 1개의 번호가 5개 일치하면 fiveMatches가 1증가한다.', () => {
    const PURCHASED_LOTTO_ARRAY = [[1, 2, 3, 4, 5, 6]];
    const WINNING_NUMBERS = '1,2,3,4,5,13';
    const BONUS = '14';
    const match = new Match(PURCHASED_LOTTO_ARRAY, WINNING_NUMBERS, BONUS);
    const matchCount = match.getMatchCount();
    expect(matchCount).toEqual({
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 1,
      fiveBonusMatches: 0,
      sixMatches: 0,
    });
  });

  test('로또 1개의 번호가 5개, 보너스 1개 일치하면 fiveBonusMatches가 1증가한다.', () => {
    const PURCHASED_LOTTO_ARRAY = [[1, 2, 3, 4, 5, 6]];
    const WINNING_NUMBERS = '1,2,3,4,5,13';
    const BONUS = '6';
    const match = new Match(PURCHASED_LOTTO_ARRAY, WINNING_NUMBERS, BONUS);
    const matchCount = match.getMatchCount();
    expect(matchCount).toEqual({
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 1,
      sixMatches: 0,
    });
  });

  test('로또 1개의 번호가 6개 일치하면 sixMatches가 1증가한다.', () => {
    const PURCHASED_LOTTO_ARRAY = [[1, 2, 3, 4, 5, 6]];
    const WINNING_NUMBERS = '1,2,3,4,5,6';
    const BONUS = '7';
    const match = new Match(PURCHASED_LOTTO_ARRAY, WINNING_NUMBERS, BONUS);
    const matchCount = match.getMatchCount();
    expect(matchCount).toEqual({
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 1,
    });
  });

  test('로또 5개 중 번호가 3,3,5개 일치하면 threeMatches가 2증가, fiveMatches 1증가한다.', () => {
    const PURCHASED_LOTTO_ARRAY = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 21, 22, 23],
      [1, 2, 41, 42, 43, 44],
      [1, 2, 11, 12, 13, 44],
      [11, 12, 13, 14, 15, 16],
    ];
    const WINNING_NUMBERS = '1,2,3,41,42,43';
    const BONUS = '7';
    const match = new Match(PURCHASED_LOTTO_ARRAY, WINNING_NUMBERS, BONUS);
    const matchCount = match.getMatchCount();
    expect(matchCount).toEqual({
      threeMatches: 2,
      fourMatches: 0,
      fiveMatches: 1,
      fiveBonusMatches: 0,
      sixMatches: 0,
    });
  });
});
