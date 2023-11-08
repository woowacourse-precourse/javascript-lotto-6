import { validateBonusNumber, validateInputMoney } from "../src/Validator.js";

describe("유효값 체크 테스트", () => {
  // TODO: 구입 가격 확인
  test("로또 구입 가격이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const invalidInputMoney = 1501;
    expect(() => {
      new validateInputMoney(invalidInputMoney);
    }).toThrow("[ERROR]");
  });

  // TODO: 보너스 번호 예외처리 여부
  test("보너스 번호가 숫자가 아닐 시 예외가 발생한다. ", () => {
    expect(() => {
      new validateBonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 범위에 맞지 않으면 예외가 발생한다. ", () => {
    expect(() => {
      new validateBonusNumber(50, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
