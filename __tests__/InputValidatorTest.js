import {InputValidator} from "../src/view/InputValidator.js";

describe("입력값을 검증하는 테스트", () => {
  test("구입 금액이 숫자가 아니면 에러 발생", async () => {
    const inputValidator = new InputValidator();
    const input = '5000'
    try {
      inputValidator.validateMoneyInput(input)
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }

  });
  test("당첨 번호가 공백이 들어간 경우 에러 발생", async () => {
    const inputValidator = new InputValidator();
    const input = '1, 2, 3, 4, 5, 6'
    try {
      inputValidator.validateMoneyInput(input)
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }

  });
  test("보너스 번호가 숫자가 아닌 경우 에러 발생", async () => {
    const inputValidator = new InputValidator();
    const input = 'a'

    try {
      inputValidator.validateMoneyInput(input)
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test("보너스 번호 숫자가 1~45 사이가 아닌 경우 에러 발생", async () => {
    const inputValidator = new InputValidator();
    const input = '100'

    try {
      inputValidator.validateMoneyInput(input)
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }

  });
})