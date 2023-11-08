import statsService from "../src/services/statsService.js";

describe("로또 당첨 통계 테스트", () => {
  test("당첨 금액 계산 검증", () => {
    // given
    const input = {
      "1등": [6, 0, 2000000000],
      "2등": [15, 0, 30000000],
      "3등": [5, 0, 1500000],
      "4등": [4, 1, 50000],
      "5등": [3, 1, 5000],
    };

    // when
    const result = statsService.getTotal(input);

    // then
    expect(result).toBe(55000);
  });

  test("수익률 계산 검증", () => {
    // given
    const price = 10000;
    const total = 55000;

    // when
    const result = statsService.getRate(price, total);

    // then
    expect(result).toBe(550);
  });
});
