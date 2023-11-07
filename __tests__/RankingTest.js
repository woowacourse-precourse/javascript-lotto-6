import App from '../src/App';

describe('App -calculateRankByMatched() 테스트', () => {
  test.each([
    [6, false, 1],
    [5, true, 2],
    [5, false, 3],
    [4, false, 4],
    [3, false, 5],
  ])(
    '일치하는 숫자 개수에 맞는 등수를 반환한다',
    (matched, matchedBonus, expected) => {
      const app = new App();
      const result = app.calculateRankByMatched(matched, matchedBonus);

      expect(result).toEqual(expected);
    },
  );
});
