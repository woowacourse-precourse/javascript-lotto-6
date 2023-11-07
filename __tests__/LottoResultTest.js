import LottoResultChecker from "../src/classes/LottoResultChecker";
import { LOTTO_PRIZE_AMOUNT, PRICE } from "../src/constant/lottoConstants";

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

describe("로또 수익률 계산 테스트", () => {
  const calcProfit = (pay, profit) => (profit / pay) * 100;

  test("1등 당첨", () => {
    expect(
      new LottoResultChecker(
        ['10', '13', '26', '41', '42', '44'],
        7,
        [
          [10, 13, 26, 41, 42, 44],
        ],
      ).getProfitRate(),
    ).toBe(calcProfit(PRICE.LOTTO, LOTTO_PRIZE_AMOUNT.FIRST_PLACE));
  });

  test("2등 3번 당첨", () => {
    expect(
      new LottoResultChecker(
        ['10', '13', '26', '41', '42', '44'],
        7,
        [
          [10, 13, 26, 41, 42, 7],
          [10, 13, 26, 41, 42, 7],
          [10, 13, 26, 41, 42, 7],
        ],
      ).getProfitRate(),
    ).toBe(calcProfit(PRICE.LOTTO * 3, LOTTO_PRIZE_AMOUNT.SECOND_PLACE * 3));
  });

  test("로또 3번 사서 3등 당첨", () => {
    expect(
      new LottoResultChecker(
        ['10', '13', '26', '41', '42', '44'],
        7,
        [
          [10, 13, 26, 41, 42, 2],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
      ).getProfitRate(),
    ).toBe(calcProfit(PRICE.LOTTO * 3, LOTTO_PRIZE_AMOUNT.THIRD_PLACE));
  });

  test("로또 5번 사서 4등 당첨", () => {
    expect(
      new LottoResultChecker(
        ['10', '13', '26', '41', '42', '44'],
        7,
        [
          [10, 13, 26, 41, 1, 2],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
      ).getProfitRate(),
    ).toBe(calcProfit(PRICE.LOTTO * 5, LOTTO_PRIZE_AMOUNT.FOURTY_PLACE));
  });


  test("5등 2번 당첨", () => {
    expect(
      new LottoResultChecker(
        ['10', '13', '26', '41', '42', '44'],
        7,
        [
          [10, 13, 26, 31, 1, 2],
          [10, 13, 26, 31, 1, 2],
        ],
      ).getProfitRate(),
    ).toBe(calcProfit(PRICE.LOTTO * 2, LOTTO_PRIZE_AMOUNT.LAST_PLACE * 2));
  });

});
