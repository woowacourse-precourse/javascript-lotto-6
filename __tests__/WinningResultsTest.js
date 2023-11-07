import WinningResults from '../src/WinningResults';

describe('당첨 결과 클래스 테스트', () => {
  const winningResults = new WinningResults();
  winningResults.saveResultBy(3);

  test('getReversedResultMap()', () => {
    const map = new Map([
      [5, 1],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
    ]);
    expect(winningResults.getReversedResultMap()).toStrictEqual(map);
  });
});
