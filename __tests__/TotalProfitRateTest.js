import calculateTotalProfitRate from "../src/controller/result/calculateTotalProfitRate";

describe("총 수익률 계산 검증 테스트", () => {
  it("1개도 당첨이 안되었을 경우", () => {
    const price = 10000;
    const count = [0, 0, 0, 0, 0];
    const result = calculateTotalProfitRate(price, count);

    expect(result).toBe("0.0");
  });

  it("5등 당첨이 되었을 경우", () => {
    const price = 10000;
    const count = [1, 0, 0, 0, 0];
    const result = calculateTotalProfitRate(price, count);

    expect(result).toBe("50.0");
  });

  it("4등 당첨이 되었을 경우", () => {
    const price = 10000;
    const count = [1, 1, 0, 0, 0];
    const result = calculateTotalProfitRate(price, count);

    expect(result).toBe("550.0");
  });

  it("3등 당첨이 되었을 경우", () => {
    const price = 10000;
    const count = [1, 1, 1, 0, 0];
    const result = calculateTotalProfitRate(price, count);

    expect(result).toBe("15550.0");
  });

  it("2등 당첨이 되었을 경우", () => {
    const price = 10000;
    const count = [1, 1, 1, 1, 0];
    const result = calculateTotalProfitRate(price, count);

    expect(result).toBe("315550.0");
  });

  it("1등 당첨이 되었을 경우", () => {
    const price = 10000;
    const count = [1, 1, 1, 1, 1];
    const result = calculateTotalProfitRate(price, count);

    expect(result).toBe("20315550.0");
  });
});
