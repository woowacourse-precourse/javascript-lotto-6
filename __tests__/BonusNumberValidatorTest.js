import BonusNumberValidator from "../src/validate/BonusNumberValidator.js";
import { BONUS_NUMBER_ERROR_MESSAGE } from "../src/constants/Message.js";

describe("보너스 번호 유효성 검사 테스트", () => {
  
  test("보너스 번호가 숫자 형태가 아니면 예외가 발생한다.", () => {
    const winningNumbers = [3, 5, 7, 9, 11, 13];
    expect(() => {
      BonusNumberValidator.validateBonusNumber("one", winningNumbers);
    }).toThrow(BONUS_NUMBER_ERROR_MESSAGE.wrongBonusNumber);
  });

  test("보너스 번호가 0 이하면 예외가 발생한다.", () => {
    const winningNumbers = [3, 5, 7, 9, 11, 13];
    expect(() => {
      BonusNumberValidator.validateBonusNumber("-1", winningNumbers);
    }).toThrow(BONUS_NUMBER_ERROR_MESSAGE.notNaturalNumber);
  });

  test("보너스 번호가 당첨 번호에 포함되어 있으면 예외가 발생한다.", () => {
    const winningNumbers = [3, 5, 7, 9, 11, 13];
    expect(() => {
      BonusNumberValidator.validateBonusNumber("5", winningNumbers);
    }).toThrow(BONUS_NUMBER_ERROR_MESSAGE.duplicatedNumber);
  });

  test("올바른 보너스 번호가 입력되면 예외가 발생하지 않는다.", () => {
    const winningNumbers = [3, 5, 7, 9, 11, 13];
    expect(() => {
      BonusNumberValidator.validateBonusNumber("2", winningNumbers);
    }).not.toThrow();
  });
});
