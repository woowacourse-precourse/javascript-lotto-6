import test from "node:test";
import Profit from "../src/Profit";

describe("수익률 계산 테스트", () => {
  test("수익률 계산 테스트", () => {
    const profit = new Profit();
    const result = profit.profitRateAcc(5000, 10000);
    expect(result).toBe(50);
  });
});
