import App from '../src/App';

describe('App - calculateRankByMatched() 테스트', () => {
  test.each([
    [6, false, 1],
    [5, true, 2],
    [5, false, 3],
    [4, false, 4],
    [3, false, 5],
  ])(
    '일치하는 숫자 개수에 맞는 등수를 반환한다',
    (matched, matchedBonus, expected) => {
      const result = App.calculateRankByMatched(matched, matchedBonus);
      expect(result).toEqual(expected);
    },
  );
});

describe('App - calculateMatchedByRank() 테스트', () => {
  test.each([
    [1, 6],
    [2, 5],
    [3, 5],
    [4, 4],
    [5, 3],
  ])('등수별 일치하는 숫자 개수를 반환한다', (rank, expected) => {
    const result = App.calculateMatchedByRank(rank);
    expect(result).toEqual(expected);
  });
});
