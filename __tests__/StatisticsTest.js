import Statistics from '../src/Model/Statistics';

describe("Statistics 클래스 테스트", () => {
  test("각 로또마다 당첨번호와 보너스번호를 비교하여 등수를 매긴다.", () => {
    const TEST_LOTTO = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const TEST_WINNING = [1, 2, 3, 4, 5, 6];
    const TEST_BONUS = 7;
    const statistics = new Statistics(TEST_WINNING, TEST_LOTTO, TEST_BONUS);

    expect(statistics.getResult()).toEqual([1,0,0,0,0]);
  });

  test("총 상금을 합산하여 수익률을 계산한다.", () => {
    const TEST_LOTTO = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const TEST_WINNING = [1, 2, 3, 4, 5, 6];
    const TEST_BONUS = 7;
    const statistics = new Statistics(TEST_WINNING, TEST_LOTTO, TEST_BONUS);
    statistics.getResult();
    expect(statistics.getROI()).toEqual('62.5');
  });
});