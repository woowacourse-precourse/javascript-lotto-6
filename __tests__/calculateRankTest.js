import calculateRank from "../src/calculateRank";

describe("calculateRank 함수 테스트", () => {
  test("3개가 일치 할 경우", () => {
    //given
    const lottoResult = { 3: 0, 4: 0, 5: 0, "5bonus": 0, 6: 0 };
    const result = "3";
    const bonusResult = "bonusFalse";

    //when
    calculateRank(lottoResult, result, bonusResult);

    //then
    expect(lottoResult).toEqual({ 3: 1, 4: 0, 5: 0, "5bonus": 0, 6: 0 });
  });
  test("5개와 보너스가 일치 할 경우", () => {
    //given
    const lottoResult = { 3: 0, 4: 0, 5: 0, "5bonus": 0, 6: 0 };
    const result = "5";
    const bonusResult = "bonusTrue";

    //when
    calculateRank(lottoResult, result, bonusResult);

    //then
    expect(lottoResult).toEqual({ 3: 0, 4: 0, 5: 0, "5bonus": 1, 6: 0 });
  });
});
