import Rank from "../src/domain/Rank.js";

describe("Rank 클래스 테스트", () => {
  test("당첨 번호, 보너스 번호를 로또와 비교해 당첨 통계 출력 확인", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 7, 8, 9, 10],
    ];
    const winning = ["1", "2", "3", "4", "5", "6"];
    const bonus = "7";

    const props = { winningNumber: winning, bonusNumber: bonus };
    const answer = [1, 0, 0, 0, 0];
    const rank = new Rank(lottos);
    expect(rank.getRankStatistic(props)).toEqual(answer);
  });
});
