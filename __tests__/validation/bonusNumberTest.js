import { bonusNubmerValidation } from "../../src/utils/Validation";
import { ERROR_MESSAGE } from "../../src/constants/ErrorMessages.js";

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 범위안에 있는 숫자인지 테스트", () => {
    const bonusNumber = ["47", "0", "@", "", " ", "01", "1."];
    const numberList = [1, 2, 3, 4, 5, 6];

    bonusNumber.forEach((number) => {
      expect(() => {
        bonusNubmerValidation(number, numberList);
      }).toThrow(ERROR_MESSAGE.number);
    });
  });

  test("보너스 번호가 당첨번호와 중복되었는지 테스트", () => {
    const bonusNumber = "6";
    const numberList = ["1", "2", "3", "4", "5", "6"];

    expect(() => {
      bonusNubmerValidation(bonusNumber, numberList);
    }).toThrow(ERROR_MESSAGE.bonus_number);
  });
});
