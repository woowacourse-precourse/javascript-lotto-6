import {validAmountCheck, validBonusNumberCheck}  from "../src/validator.js";
import { ERROR_MESSAGE } from "../src/constatns/message.js";

describe("금액 테스트", () => {
  test("1000원 단위인지 테스트", async () => {
    const input = '3000';
    const wrong_input = '3200';

    expect(await validAmountCheck(input)).toBe(input);
    expect(await validAmountCheck(wrong_input)).toBe(ERROR_MESSAGE.AMOUNT);
  });

  test("숫자인지 테스트", async () => {
    const input = '3000';
    const wrong_input = "3200j";

    expect(await validAmountCheck(input)).toBe(input);
    expect(await validAmountCheck(wrong_input)).toBe(ERROR_MESSAGE.AMOUNT);
  });
});
