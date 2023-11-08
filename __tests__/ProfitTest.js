import Profit from "../src/domain/Profit";

describe("수익률 클래스 테스트", () => {
  test("수익률을 계산해 소수점 둘째 자리에서 반올림해야 한다.", () => {
    const ranking = [0, 0, 0, 1, 1];
    const purchase_amount = 12000;

    const profit = new Profit();
    const total_rate = profit.calcProfit(ranking, purchase_amount);

    expect(total_rate).toBe("458.3");
  });
});
