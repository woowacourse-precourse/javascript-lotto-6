import { rewards } from "../src/constants";
import reward from "../src/models/Reward";

describe("수익 객체 테스트", () => {
  test("등수에 따라 당첨 금액을 계산한다.", () => {
    const matches = [2, 1, 0, 0, 1];
    const amount = reward.computeWinningAmount(matches);

    expect(amount).toEqual(2 * rewards[0] + rewards[1] + rewards[4]);
  });

  const cases = [
    [3000, 8000, 37.5],
    [7000, 12000, 58.3],
  ];

  test.each(cases)("총 수익률을 계산한다.", (winning, purchase, result) => {
    const totalReturn = reward.computeTotalReturn(winning, purchase);
    expect(totalReturn).toEqual(result);
  });
});
