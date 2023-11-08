import CalcReturnRate from "../src/CalcReturnRate.js";

/* eslint-disable no-undef */
describe("수익률 계산 테스트", () => {
  test("등수에 따른 수익률 계산 테스트", () => {
    const rank = { first: 0, second: 0, third: 0, fourth: 0, fifth: 1 };
    const amount = 8000;
    const input = CalcReturnRate(rank, amount);
    const result = (5000 / 8000) * 100;
    expect(input).toEqual(result);
  });
});
