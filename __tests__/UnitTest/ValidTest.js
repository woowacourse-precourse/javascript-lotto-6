import {
  validLottoMoney,
  validLottoNumber,
  validBonusNumber,
} from "../../src/Valid";

describe("Validate Test", () => {
  const MONEY_ERROR_CASES = [
    ["asaa"],
    ["1151rq"],
    ["1 1000"],
    ["1001"],
    ["500"],
    ["10300"],
    ["1,000"],
  ];
  test.each(MONEY_ERROR_CASES)("validLottoMoney 에러 테스트", (input) => {
    expect(() => validLottoMoney(input)).toThrow(Error);
  });

  const LOTTO_NUMBER_ERROR_CASES = [
    [7, 11, 21, 34, 42, 21],
    [0, 1, 2, 3, 4, 5],
    [4, 5, 6, 7, 8, 46],
    [1, 2, 3],
  ];
  test.each(LOTTO_NUMBER_ERROR_CASES)(
    "validLottoNumber 에러 테스트",
    (input) => {
      expect(() => validLottoNumber(input)).toThrow(Error);
    }
  );

  const BONUS_NUMBER_ERROR_CASES = [
    [[1, 2, 3, 4, 5, 6], "0"],
    [[1, 2, 3, 4, 5, 6], "46"],
    [[6, 10, 15, 17, 24, 41], "17"],
  ];
  test.each(BONUS_NUMBER_ERROR_CASES)(
    "validBonusNumber 에러 테스트",
    (lottoNumber, input) => {
      expect(() => validBonusNumber(lottoNumber, input)).toThrow(Error);
    }
  );
});
