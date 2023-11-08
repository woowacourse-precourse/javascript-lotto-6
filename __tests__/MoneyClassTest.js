import Money from "../src/domain/Money.js";

describe("Money 클래스 테스트", () => {
  test("구매 금액을 입력받았을 때 반환되는 로또 갯수 확인", () => {
    const money = new Money("3000");
    expect(money.getAmount()).toEqual(3);
  });

  test("랭크 배열을 받았을 때 수익률 계산 출력 확인", () => {
    const money = new Money("3000");
    const winningStatistic = [0, 0, 1, 0, 1];
    const revenueRate = "50166.7";

    expect(money.getRevenueRate(winningStatistic)).toEqual(revenueRate);
  });
});
