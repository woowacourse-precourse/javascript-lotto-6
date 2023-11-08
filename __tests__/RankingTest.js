import Ranking from "../src/domain/Ranking";

describe("랭킹 클래스 테스트", () => {
  test("로또 번호와 당첨 번호 및 보너스 번호를 비교해 등수별 당첨 개수를 반환해야 한다.", () => {
    const lotto_list = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
    ];
    const winning_number = [8, 21, 23, 41, 42, 10];
    const bonus_number = 43;
    const result = [0, 1, 0, 0, 1];

    const ranking = new Ranking();
    const list = ranking.compareRank(lotto_list, winning_number, bonus_number);

    expect(list).toEqual(result);
  });
});
