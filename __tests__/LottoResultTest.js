import LottoResultChecker from "../src/classes/LottoResultChecker";

describe("로또 당첨결과 계산 테스트", () => {
  test("1등 테스트", () => {
    expect(
      new LottoResultChecker(['10', '13', '26', '41', '42', '44'], 7, [[10, 13, 26, 41, 42, 44]]).getResult(),
    ).toEqual(expect.objectContaining({ firstPrize: 1 }));
  });

  test("2등 테스트", () => {
    expect(
      new LottoResultChecker(['10', '13', '26', '41', '42', '44'], 7, [[7, 10, 13, 26, 41, 44]]).getResult(),
    ).toEqual(expect.objectContaining({ secondPrize: 1 }));
  });

  test("3등 테스트", () => {
    expect(
      new LottoResultChecker(['1', '2', '3', '4', '5', '6'], 7, [[5, 2, 1, 3, 6, 44]]).getResult(),
    ).toEqual(expect.objectContaining({ thirdPrize: 1 }));
  });

  test("4등 테스트", () => {
    expect(
      new LottoResultChecker(['1', '2', '3', '4', '5', '6'], 7, [[5, 2, 1, 3, 45, 44]]).getResult(),
    ).toEqual(expect.objectContaining({ fourthPrize: 1 }));
  });

  test("5등 테스트", () => {
    expect(
      new LottoResultChecker(['1', '2', '3', '4', '5', '6'], '7', [[1, 3, 5, 14, 22, 45]]).getResult(),
    ).toEqual(expect.objectContaining({ lastPrize: 1 }));
  });
});
