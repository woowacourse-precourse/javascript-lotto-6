import WinningCount from '../src/WinningCount';
import Lotto from '../src/Lotto';

describe('WinningCount test', () => {
  test('당첨 결과 계산을 테스트한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([2, 3, 4, 5, 6, 7]),
      new Lotto([3, 4, 5, 6, 7, 8]),
      new Lotto([4, 5, 6, 7, 8, 9]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([6, 7, 8, 9, 10, 11]),
    ];
    const winningCount = new WinningCount(winningNumbers, bonusNumber, lottos);

    const result = {
      first: 1,
      second: 1,
      third: 1,
      fourth: 1,
      fifth: 1,
    };
    expect(winningCount.getWinningRate()).toStrictEqual(result);
  });
});
