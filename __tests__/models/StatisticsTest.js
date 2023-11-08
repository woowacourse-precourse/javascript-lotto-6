import Stats from '../../src/model/Statistics.js';

describe('Statistics 클래스 테스트', () => {
  let userLottos;
  let winningNumbers;
  let bonusNumber;

  beforeEach(() => {
    userLottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    winningNumbers = [1, 2, 3, 4, 5, 6];
    bonusNumber = 7;
  });

  test('Statistics 인스턴스 생성을 테스트한다.', () => {
    const statsInsatance = new Stats(userLottos, winningNumbers, bonusNumber);

    expect(statsInsatance).toBeInstanceOf(Stats);
  });

  test('getStats()를 통해 당첨 횟수가 담긴 배열을 얻는다.', () => {
    const stat = new Stats(userLottos, winningNumbers, bonusNumber);

    const stats = stat.getStats();

    expect(stats).toEqual([0, 0, 0, 0, 1]);
  });
});
