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

describe("보너스 숫자 테스트", () => {
  test("1에서 45 사이의 숫자인지 테스트", async () => {
    const input = '30';
    const wrong_input = '9780';

    expect(await validBonusNumberCheck(input)).toBe(input);
    expect(await validBonusNumberCheck(wrong_input)).toBe(ERROR_MESSAGE.NUM_RANGE);
  });

  test("1개의 숫자인지 테스트", async () => {
    const input = '30';
    const wrong_input = "32,25";

    expect(await validBonusNumberCheck(input)).toBe(input);
    expect(await validBonusNumberCheck(wrong_input)).toBe(ERROR_MESSAGE.BONUS_NUM_COUNT);
  });
});
