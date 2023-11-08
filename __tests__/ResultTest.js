import Result from "../src/Result.js";

describe("결과 클래스 테스트", () => {
  const winningNumberList = [
    [7, 21, 27, 29, 34, 37],
    [4, 18, 28, 38, 41, 42],
    [8, 9, 10, 15, 18, 28],
  ];
  const userWinningNumbers = [4, 8, 9, 10, 18, 28];
  const userBonusNumber = 29;
  const lottoCount = 3;
  let result;

  beforeEach(() => {
    result = new Result(winningNumberList, userWinningNumbers, userBonusNumber);
  });

  test("calculateResult 메서드 테스트", () => {
    const calculatedResult = result.calculateResult();
    expect(calculatedResult).toEqual({
      THREE: 1,
      FOUR: 0,
      FIVE: 1,
      FIVE_BONUS: 0,
      SIX: 0,
    });
  });

  test("calculateProfit 메서드 테스트", () => {
    result.calculateResult();
    const calculatedProfit = result.calculateProfit(lottoCount);
    expect(calculatedProfit).toEqual("50,166.7");
  });
});
