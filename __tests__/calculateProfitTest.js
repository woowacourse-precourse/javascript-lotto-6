import calculateProfit from "../src/calculateProfit";

describe("calculateProfit 함수 테스트", () => {
  let profit = 0;
  test("3개: 1", () => {
    //given
    const lottoResult = { 3: 1, 4: 0, 5: 0, "5bonus": 0, 6: 0 };
    const amount = 6000;

    //when
    profit = calculateProfit(amount, lottoResult);

    //then
    expect(profit).toBe(83.3);
  });
  test("4개: 1, 5개+보너스: 1", () => {
    //given
    const lottoResult = { 3: 0, 4: 1, 5: 0, "5bonus": 1, 6: 0 };
    const amount = 6000;

    //when
    profit = calculateProfit(amount, lottoResult);

    //then
    expect(profit).toBe(500833.3);
  });
  test("3개: 2, 1등: 1", () => {
    //given
    const lottoResult = { 3: 2, 4: 0, 5: 0, "5bonus": 0, 6: 1 };
    const amount = 6000;

    //when
    profit = calculateProfit(amount, lottoResult);

    //then
    expect(profit).toBe(33333500);
  });
});
