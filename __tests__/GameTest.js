import { calcEarningRate } from "../src/Game";
import { amountType } from "../src/Validation";

describe("게임 진행 테스트", () => {
  test("금액 입력 테스트", () => {
    expect(() => {
      amountType(1110);
    }).toThrow("[ERROR]");
  });

  test("이익률 계산 테스트", () => {
    expect(calcEarningRate(7000, 12000)).toBe("171.4");
  });
});
