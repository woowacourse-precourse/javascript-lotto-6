import LottoValidator from "../src/utils/LottoValidator.js";

let lottoValidator;

beforeEach(() => {
  lottoValidator = new LottoValidator();
  jest.restoreAllMocks();
});

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 숫자가 아닌 문자나 공백일 경우", () => {
    const bonusNumber = "asd";

    expect(() =>
      lottoValidator.validateBonusNumberIsNumeric(bonusNumber)
    ).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위를 벗어나는 경우", () => {
    const bonusNumber = 50;

    expect(() =>
      lottoValidator.validateBonusNumberInRange(bonusNumber)
    ).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되는 경우", () => {
    const bonusNumber = 6;
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    expect(() =>
      lottoValidator.validateBonusNumberNotInWinningNumbers(
        bonusNumber,
        winningNumbers
      )
    ).toThrow("[ERROR]");
  });
});
