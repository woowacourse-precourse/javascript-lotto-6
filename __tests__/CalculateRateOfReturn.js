import CalculateRateOfReturn from "../src/Domain/CalculateRateOfReturn";

describe("수익률 계산 테스트", () => {
  test("3개 일치 1개 5개 일치 1개 6개 일치 1개일 때 수익률 계산", () => {
    const RANK_MATCH_ARRAY = [1, 1, 1, 0, 0];
    const NUMBER_OF_LOTTO = 5;
    const CALCULATE_RATE_OF_RETURN = new CalculateRateOfReturn();
    expect(
      CALCULATE_RATE_OF_RETURN.calculate(RANK_MATCH_ARRAY, NUMBER_OF_LOTTO)
    ).toEqual("31100.0");
  });
});
